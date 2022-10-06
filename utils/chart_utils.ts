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
export function getEffectsByType(
  this: CardStatus,
  _type: SkillEfficacyType,
  needZeroRemain: boolean = false,
): Effect[] {
  return this.effects.filter(x =>
    x.efficacyType === _type && (needZeroRemain || x.remain)
  )
}
export function getEffectSumGradeByType(
  this: CardStatus,
  _type: SkillEfficacyType,
): number {
  return this.getEffects(_type).map(x => x.grade).reduce((c, p) => c + p)
}
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
  let upGrade = this.getEffectSumGrade(upType)
  const upMaxGrade = EfficacyMaxGrade[upType]
  let boostGrade = this.getEffectSumGrade(boostType)
  const boostMaxGrade = EfficacyMaxGrade[boostType]
  let downGrade = this.getEffectSumGrade(downType)
  const downMaxGrade = EfficacyMaxGrade[downType]

  upGrade = upGrade > upMaxGrade ? upMaxGrade : upGrade
  boostGrade = boostGrade > boostMaxGrade ? boostGrade : boostMaxGrade
  downGrade = downGrade > downMaxGrade ? downGrade : downMaxGrade

  return upDict[upGrade]
    + boostDict[boostGrade]
    + downDict[downGrade]
}
export function refreshParam(
  this: CardStatus,
  card: LiveCard,
  type: "dance" | "vocal" | "visual"
) {
  const permil = this.getBuffedPermil(type)
  switch (type) {
    case "dance":
      this.dance = calcBuffedParam(card.deckDance, permil)
      break
    case "vocal":
      this.vocal = calcBuffedParam(card.deckVocal, permil)
      break
    case "visual":
      this.visual = calcBuffedParam(card.deckVisual, permil)
      break
  }
}
export function getMergedStrengthEffectByType(
  this: CardStatus,
  efficacyType: SkillEfficacyType,
) {
  const effects = this.getEffects(efficacyType)
  if (!effects || effects.length === 0) {
    return undefined
  }
  if (!GameSetting.skillEfficacyTypeStrengthList.includes(efficacyType)) {
    return undefined
  }
  let grade = 0
  const maxGrade = EfficacyMaxGrade[efficacyType]
  effects.forEach(it => grade += it.grade)
  return {
    efficacyType: efficacyType,
    grade: grade,
    maxGrade: maxGrade,
    overwhelm: grade > maxGrade,
    value: EfficacyValue[efficacyType][grade > maxGrade ? maxGrade : grade],
  }
}

export function skillHasRemain(
  this: SkillStatus,
): boolean {
  if (!this.initCount || this.remainCount) {
    return true
  }
  return false
}


export function getLaneAttributeByPosition(
  quest: Quest,
  position: number
): AttributeType {
  switch (position) {
    case 1: case 6: return quest.position1AttributeType
    case 2: case 7: return quest.position2AttributeType
    case 3: case 8: return quest.position3AttributeType
    case 4: case 9: return quest.position4AttributeType
    case 5: case 10: return quest.position5AttributeType
    default: throw TypeError(`Lane position '${position}' is invalid.`)
  }
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
