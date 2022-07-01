import * as efg from "../concert/eff_grades"
import { CardStatus, DetEffect, Effect, LiveCard } from "../types/live_types";
import { AttributeType, MusicChartType, SkillEfficacyType } from "../types/proto/proto_enum";

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

export function getEffectsByType(
  efficacyType: SkillEfficacyType,
  cardStatus: CardStatus,
): Effect[] | undefined {
  let effects = cardStatus.effects?.filter(it => it.efficacyType === efficacyType)
  if (!effects || effects.length === 0) {
    return undefined
  }
  return effects
}

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
  }
}
