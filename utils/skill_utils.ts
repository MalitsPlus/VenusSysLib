import * as efg from "../concert/consts/eff_grades"
import { CardStatus, DetEffect, Effect, LiveCard, SkillStatus } from "../types/concert_types";
import { AttributeType, MusicChartType, SkillEfficacyType } from "../types/proto/proto_enum";
import { WapSkill, WapSkillLevel } from "../types/wrapper_types";

// export function getEffValueByGrade(
//   type: SkillEfficacyType,
//   grade: number
// ): number {
//   switch (type) {
//     case SkillEfficacyType.StaminaConsumptionIncrease:
//       return efg.StaminaConsumptionIncreaseGrade[grade]
//     case SkillEfficacyType.StaminaConsumptionReduction:
//       return efg.StaminaConsumptionReductionGrade[grade]
//     // TODO: implement remains
//     default:
//       return 0
//   }
// }

export function getDeckParamByChartType(
  type: AttributeType,
  card: LiveCard,
): number {
  switch (type) {
    case AttributeType.Dance: return card.deckDance
    case AttributeType.Vocal: return card.deckVocal
    case AttributeType.Visual: return card.deckVisual
    default:
      throw new TypeError(`Attirbute '${type}' can never be appeared.`)
  }
}

export function getRealtimeParamByChartType(
  type: AttributeType,
  cardStatus: CardStatus
): number {
  switch (type) {
    case AttributeType.Dance: return cardStatus.dance
    case AttributeType.Vocal: return cardStatus.vocal
    case AttributeType.Visual: return cardStatus.visual
    default:
      throw new TypeError(`Attirbute '${type}' can never be appeared.`)
  }
}

export function getValidGrade(
  efficacyType: SkillEfficacyType,
  grade: number
): number {
  let maxGrade: number = efg.EfficacyMaxGrade[efficacyType]
  if (!maxGrade) {
    return 0
  }
  return grade > maxGrade ? maxGrade : grade
}

export function isEffect(
  eff: Effect,
  efficacyType: SkillEfficacyType
): boolean {
  if (eff.efficacyType === efficacyType && eff.remain > 0) {
    return true
  }
  return false
}

export function isEffects(
  eff: Effect,
  efficacyTypes: SkillEfficacyType[]
): boolean {
  return efficacyTypes.some(effType => {
    isEffect(eff, effType)
  })
}

// export function getEffectsByType(
//   efficacyType: SkillEfficacyType,
//   cardStatus: CardStatus,
// ): Effect[] | undefined {
//   let effects = cardStatus.effects?.filter(it => isEffect(it, efficacyType))
//   if (!effects || effects.length === 0) {
//     return undefined
//   }
//   return effects
// }

export function getMergedEffectByType(
  efficacyType: SkillEfficacyType,
  cardStatus: CardStatus,
): DetEffect | undefined {
  let effects = getEffectsByType(efficacyType, cardStatus)
  if (!effects || effects.length === 0) {
    return undefined
  }
  var grade = 0
  effects.forEach(it => grade += it.grade)
  grade = getValidGrade(efficacyType, grade)
  return {
    efficacyType: efficacyType,
    grade: grade,
    value: efg.EfficacyValue[efficacyType][grade],
    isInstant: false,
  }
}

export function isSkillImpossible(
  cardStatus: CardStatus
): boolean {
  cardStatus.effects?.forEach(eff => {
    if (isEffect(eff, SkillEfficacyType.SkillImpossible)) {
      return true
    }
  })
  return false
}

export function skillHasRemainCount(
  skill: WapSkillLevel,
  skillStatus: SkillStatus
): boolean {
  if (skill.limitCount > 0 && skillStatus.remainCount <= 0) {
    return false
  }
  return true
}
