import { StackableSkillEfficacyList } from "../concert/consts/efficacy_list"
import { DanceBoostGrade, DanceDownGrade, DanceUpGrade, EfficacyMaxGrade, EfficacyValue, VisualBoostGrade, VisualDownGrade, VisualUpGrade, VocalBoostGrade, VocalDownGrade, VocalUpGrade } from "../concert/consts/eff_grades"
import { GameSetting } from "../db/repository/setting_repository"
import { LiveCard, LiveDeck, UserCard } from "../types/card_types"
import {
  CardStatus,
  Chart, Effect, Live, SkillStatus, StageSkillStatus, UserStatus
} from "../types/concert_types"
import { AttributeType, SkillEfficacyType } from "../types/proto/proto_enum"
import { Quest } from "../types/proto/proto_master"
import { WapQuest } from "../types/wap/quest_waps"
import { WapSkillLevel } from "../types/wap/skill_waps"
import { calcBuffedParam, calcCriticalRate } from "./calc_utils"
import { getValidGrade } from "./skill_utils"

// Chart
export function getCardStatusByIndex(
  this: Chart,
  index: number,
): CardStatus {
  return this.cardStatuses.find(x => x.cardIndex === index)!  // FIXME: potential exception
}
export function getUserStatusByIndex(
  this: Chart,
  index: number,
): UserStatus {
  return this.userStatuses.find(x => x.userIndex === index)! // FIXME: potential exception
}
export function getStageStatusByIndexes(
  this: Chart,
  cardIndex: number,
  skillIndex: number,
): StageSkillStatus | undefined {
  return this.stageSkillStatuses?.find(x => x.cardIndex === cardIndex && x.skillIndex === skillIndex)
}

// LiveDeck
export function getCardByIndex(
  this: LiveDeck,
  index: number,
): LiveCard {
  return this.liveCards.find(x => x.index === index)!.liveCard // FIXME: potential exception
}

// UserCard
export function getUserCardSkillByIndex(
  this: UserCard,
  index: number,
): WapSkillLevel {
  return this.skills.find(x => x.index === index)!.skill // FIXME: potential exception
}

// CardStatus
export function getCardSkillStatus(
  this: CardStatus,
  index: number
): SkillStatus {
  return this.skillStatuses.find(x => x.skillIndex === index)! // FIXME: potential exception
}

/**
 * Get all specified type `Effect`s in this CardStatus.  
 * By default zero-remaining effects will be ignored.
 */
export function getEffectsByType(
  this: CardStatus,
  _type: SkillEfficacyType,
  included?: boolean,
  needZeroRemain?: boolean,
): Effect[] {
  return this.effects.filter(x =>
    x.efficacyType === _type
    && (included === undefined || x.include === included)
    && (needZeroRemain === undefined || needZeroRemain || x.remain)
  )
}
/**
 * Get sum of specified type effect grades.  
 * If this CardStatus doesn't possess the effect, 0 will be returned.
 */
export function getEffectSumGradeByType(
  this: CardStatus,
  _type: SkillEfficacyType,
  included: boolean = true,
  needZeroRemain?: boolean
): number {
  const effs = this.getEffects(_type, included, needZeroRemain)
  if (!effs.length) {
    return 0
  }
  return effs.map(x => x.grade).reduce((c, p) => c + p)
}
/**
 * Get sum of specified type effect grade.  
 * Exceeding grades will be excluded.  
 * 🚨CAUTION: If given `type` is not belong to `StrengthList` or other 2 weakness type,
 * maxGrade exceeding check will not be performed and sumGrade 
 * will be returned instead.
 */
export function getEffectSumGradeOrMaxGradeByType(
  this: CardStatus,
  _type: SkillEfficacyType,
  included: boolean = true,
  needZeroRemain?: boolean
): number {
  const sumGrade = this.getEffectSumGrade(_type, included, needZeroRemain)
  if (!StackableSkillEfficacyList.includes(_type)) {
    return sumGrade
  }
  const maxGrade = EfficacyMaxGrade[_type] ?? 0
  return sumGrade > maxGrade ? maxGrade : sumGrade
}
/**
 * Get and calculate effect value of specified type.  
 * Exceeding grades will be excluded.  
 * If the type is not belong to `StrengthList` or other 2 weakness type, always returns 0.
 */
export function getEffectValue(
  this: CardStatus,
  _type: SkillEfficacyType,
): number {
  if (!StackableSkillEfficacyList.includes(_type)) {
    return 0
  }
  const grade = this.getEffectSumOrMaxGrade(_type, true)
  const value = EfficacyValue[_type][grade] ?? 0 // FIXME: protential error
  return value
}
/**
 * Apply all attribute-related effects, calculate sum of their permils, then return that sum.  
 * Note exceeding grades will be excluded.
 */
export function getBuffedPermil(
  this: CardStatus,
  _type: "dance" | "vocal" | "visual"
): number {
  const { upType, boostType, downType, upDict, boostDict, downDict } = (() => {
    if (_type === "dance") {
      return {
        upType: SkillEfficacyType.DanceUp,
        boostType: SkillEfficacyType.DanceBoost,
        downType: SkillEfficacyType.DanceDown,
        upDict: DanceUpGrade,
        boostDict: DanceBoostGrade,
        downDict: DanceDownGrade,
      }
    } else if (_type === "vocal") {
      return {
        upType: SkillEfficacyType.VocalUp,
        boostType: SkillEfficacyType.VocalBoost,
        downType: SkillEfficacyType.VocalDown,
        upDict: VocalUpGrade,
        boostDict: VocalBoostGrade,
        downDict: VocalDownGrade,
      }
    } else {
      return {
        upType: SkillEfficacyType.VisualUp,
        boostType: SkillEfficacyType.VisualBoost,
        downType: SkillEfficacyType.VisualDown,
        upDict: VisualUpGrade,
        boostDict: VisualBoostGrade,
        downDict: VisualDownGrade,
      }
    }
  })()
  let upGrade = this.getEffectSumGrade(upType, true)
  const upMaxGrade = EfficacyMaxGrade[upType] ?? 99
  let boostGrade = this.getEffectSumGrade(boostType, true)
  const boostMaxGrade = EfficacyMaxGrade[boostType] ?? 99
  let downGrade = this.getEffectSumGrade(downType, true)
  const downMaxGrade = EfficacyMaxGrade[downType] ?? 99

  upGrade = upGrade > upMaxGrade ? upMaxGrade : upGrade
  boostGrade = boostGrade > boostMaxGrade ? boostMaxGrade : boostGrade
  downGrade = downGrade > downMaxGrade ? downMaxGrade : downGrade

  return upDict[upGrade]
    + boostDict[boostGrade]
    + downDict[downGrade]
}

/**
 * Refreshes property of given attribute in this `CardStatus`.
 * If efficacy's grade reaches its maxGrade, exceeding grades will be ignored.
 */
export function refreshParam(
  this: CardStatus,
  card: LiveCard,
  type: "dance" | "vocal" | "visual"
) {
  const permil = this.getBuffedPermil(type) + 1000
  switch (type) {
    case "dance":
      this.dance = calcBuffedParam(card.deckDance, permil, 0, true)
      break
    case "vocal":
      this.vocal = calcBuffedParam(card.deckVocal, permil, 0, true)
      break
    case "visual":
      this.visual = calcBuffedParam(card.deckVisual, permil, 0, true)
      break
  }
}

export function refreshAllParam(
  this: CardStatus,
  card: LiveCard,
) {
  this.refreshParam(card, "dance")
  this.refreshParam(card, "vocal")
  this.refreshParam(card, "visual")
}

export function getLaneTypeByIndex(
  this: WapQuest,
  index: number,
): AttributeType {
  switch (index) {
    case 1: case 6: return this.position1AttributeType
    case 2: case 7: return this.position2AttributeType
    case 3: case 8: return this.position3AttributeType
    case 4: case 9: return this.position4AttributeType
    case 5: case 10: return this.position5AttributeType
    default: throw TypeError(`Lane index '${index}' is invalid.`)
  }
}

// export function getMergedStrengthEffectByType(
//   this: CardStatus,
//   efficacyType: SkillEfficacyType,
// ) {
//   const effects = this.getEffects(efficacyType)
//   if (!effects || effects.length === 0) {
//     return undefined
//   }
//   if (!GameSetting.skillEfficacyTypeStrengthList.includes(efficacyType)) {
//     return undefined
//   }
//   let grade = 0
//   const maxGrade = EfficacyMaxGrade[efficacyType] ?? 0
//   effects.forEach(it => grade += it.grade)
//   return {
//     efficacyType: efficacyType,
//     grade: grade,
//     maxGrade: maxGrade,
//     overwhelm: grade > maxGrade,
//     value: EfficacyValue[efficacyType][grade > maxGrade ? maxGrade : grade],
//   }
// }

export function skillHasTimes(
  this: SkillStatus,
): boolean {
  if (!this.initCount || this.remainCount) {
    return true
  }
  return false
}

export function getCritical(
  technique: number,
  difficulty: number
): boolean {
  let rate = calcCriticalRate(technique, difficulty)
  if (Math.random() <= rate) {
    return true
  }
  return false
}
