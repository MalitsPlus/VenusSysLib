import * as efg from "../concert/consts/eff_grades";
import { LiveCard } from "../types/card_types";
import { CardStatus, DetEffect, Effect } from "../types/concert_types";
import { AttributeType, SkillEfficacyType } from "../types/proto/proto_enum";

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
  const maxGrade: number = efg.EfficacyMaxGrade[efficacyType]
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

export function getMergedEffectByType(
  efficacyType: SkillEfficacyType,
  cardStatus: CardStatus,
): DetEffect | undefined {
  let effects = cardStatus.getEffects(efficacyType)
  if (!effects || effects.length === 0) {
    return undefined
  }
  let grade = 0
  effects.forEach(it => grade += it.grade)
  grade = getValidGrade(efficacyType, grade)
  return {
    efficacyType: efficacyType,
    grade: grade,
    value: efg.EfficacyValue[efficacyType][grade],
    isInstant: false,
  }
}
