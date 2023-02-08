import {
  ParamBoost,
  SpScorePermilEfficacyList,
  StaminaConsumptionAdjustment
} from "../concert/consts/efficacy_list"
import {
  EfficacyValue
} from "../concert/consts/eff_grades"
import { LiveCard } from "../types/card_types"
import {
  CardStatus
} from "../types/concert_types"
import {
  AttributeType,
  SkillEfficacyType
} from "../types/proto/proto_enum"
import { WapSkillLevel } from "../types/wap/skill_waps"
import {
  getMergedEffectByType,
  getRealtimeParamByChartType,
  isEffects
} from "./skill_utils"

export function calcParam(
  paramValue: number,
  permil: number,
  rarityBonusPermil: number
): number {
  return Math.floor(
    Math.floor(paramValue * permil / 1000)
    * rarityBonusPermil / 1000
  )
}

export function calcBuffedParam(
  base: number,
  mul: number = 0,
  add: number = 0,
  isPermil: boolean = true,
): number {
  let divisor = 1
  if (isPermil) {
    divisor = 1000
  }
  return Math.floor(base * mul / divisor) + add
}

/**
 * Calculate stamina consumption.
 * @param expectedSt Original stamina.
 * @param cardStat Card Status.
 * @param questWeightPermil Live adjustment.
 * @returns Calculated value.
 */
export function calcStaminaConsumption(
  expectedSt: number,
  cardStat: CardStatus,
  questWeightPermil: number,
): number {
  let permil = 1000
  if (cardStat.effects) {
    cardStat.effects.forEach(eff => {
      if (isEffects(eff, StaminaConsumptionAdjustment)) {
        permil += EfficacyValue[eff.efficacyType]?.[eff.grade] ?? 0
      }
      if (isEffects(eff, ParamBoost)) {
        permil += eff.grade * 10
      }
    })
  }
  return Math.floor(expectedSt * permil / 1000 * questWeightPermil / 1000)
}

/**
 * Calculate stamina recovery.
 * @param expectedSt Original stamina.
 * @param cardStat Card Status.
 * @param questWeightPermil Live adjustment.
 * @returns Calculated value.
 */
export function calcStaminaRecovery(
  expectedSt: number,
  cardStat: CardStatus,
  questWeightPermil: number,
): number {
  let permil = 1000
  if (questWeightPermil === 0) {
    questWeightPermil = 1000
  }
  return Math.floor(expectedSt * permil / 1000 * questWeightPermil / 1000)
}

/**
 * Calculate stamina consumption. **Skill** means it has a chance to be a percentage consumption.
 * @param skillLevel A `WapSkillLevel` to be performed.
 * @param card A `LiveCard` which performs this skill.
 * @param cardStatus A `CardStatus` belongs to which performs this skill.
 * @param staminaWeightPermil Stamina consumption rate of this stage.
 * @returns Calculated stamina amount to be consumed.
 */
export function calcSkillStaminaConsumption(
  skillLevel: WapSkillLevel,
  card: LiveCard,
  cardStatus: CardStatus,
  staminaWeightPermil: number
): number {
  const expectedSt = skillLevel.staminaPermil
    ? Math.floor(card.deckStamina * skillLevel.staminaPermil / 1000)
    : skillLevel.stamina
  return calcStaminaConsumption(expectedSt, cardStatus, staminaWeightPermil)
}

export function calcActSkillPrivilege(
  laneType: AttributeType,
  card: LiveCard,
  cardStatus: CardStatus
): number {
  let param = getRealtimeParamByChartType(laneType, cardStatus)
  let staminaPct = cardStatus.stamina / card.deckStamina
  var powerRate = 1.000

  if (0.90 < staminaPct && staminaPct <= 0.95) powerRate = 0.975
  else if (0.85 < staminaPct && staminaPct <= 0.90) powerRate = 0.950
  else if (0.80 < staminaPct && staminaPct <= 0.85) powerRate = 0.925
  else if (0.75 < staminaPct && staminaPct <= 0.80) powerRate = 0.900
  else if (0.70 < staminaPct && staminaPct <= 0.75) powerRate = 0.875
  else if (0.65 < staminaPct && staminaPct <= 0.70) powerRate = 0.850
  else if (0.60 < staminaPct && staminaPct <= 0.65) powerRate = 0.825
  else if (0.55 < staminaPct && staminaPct <= 0.60) powerRate = 0.800
  else if (0.50 < staminaPct && staminaPct <= 0.55) powerRate = 0.775
  else if (0.45 < staminaPct && staminaPct <= 0.50) powerRate = 0.750
  else if (0.40 < staminaPct && staminaPct <= 0.45) powerRate = 0.700
  else if (0.35 < staminaPct && staminaPct <= 0.40) powerRate = 0.650
  else if (0.30 < staminaPct && staminaPct <= 0.35) powerRate = 0.600
  else if (0.25 < staminaPct && staminaPct <= 0.30) powerRate = 0.550
  else if (0.20 < staminaPct && staminaPct <= 0.25) powerRate = 0.500
  else if (0.15 < staminaPct && staminaPct <= 0.20) powerRate = 0.450
  else if (0.10 < staminaPct && staminaPct <= 0.15) powerRate = 0.400
  else if (0.05 < staminaPct && staminaPct <= 0.10) powerRate = 0.350
  else if (0.00 < staminaPct && staminaPct <= 0.05) powerRate = 0.300
  else if (staminaPct <= 0) powerRate = 0.250
  else powerRate = 1.000

  powerRate += (getMergedEffectByType(
    SkillEfficacyType.SkillSuccessRateUp,
    cardStatus,
    true,
  )?.value ?? 0) / 1000

  return param * powerRate
}

export function roll(
  probabilityPermil: number,
): boolean {
  if (probabilityPermil >= 1000) {
    return true
  }
  if (probabilityPermil / 1000 > Math.random()) {
    return true
  }
  return false
}

export function calcCriticalRate(
  technique: number,
  difficulty: number,
): number {
  if (technique === 0) {
    return 0
  }
  // TODO: implement critical rate calculation
  return 0.5
}

export function getDbComboBonus(
  combo: number
): number {
  if (combo <= 10) {
    return 50
  } else if (combo <= 20) {
    return 100
  } else if (combo <= 30) {
    return 150
  } else if (combo <= 40) {
    return 200
  } else if (combo <= 50) {
    return 250
  } else if (combo <= 70) {
    return 300
  } else {
    return 500
  }
}

export function getSpScorePermil(
  cardStat: CardStatus
): number {
  let permil = 0
  SpScorePermilEfficacyList.forEach(eff => {
    permil += cardStat.getEffectValue(eff, true, false)
  })
  return permil
}

// approximate value
export function getAudiencePermil(
  cardStat: CardStatus
): number {
  const audIncrGrade = cardStat.getEffectSumOrMaxGrade(SkillEfficacyType.AudienceAmountIncrease)[0]
  const audDecsGrade = cardStat.getEffectSumOrMaxGrade(SkillEfficacyType.AudienceAmountReduction)[0]
  return (audIncrGrade - audDecsGrade) * 10
}

export function getComboPermil(
  cardStat: CardStatus,
  combo: number
): number {
  const permil = cardStat.getEffectValue(SkillEfficacyType.ComboScoreUp, true, false)
  const comboBonus = getDbComboBonus(combo)
  return comboBonus * (1000 + permil) / 1000
}

export function getCriticalPermil(
  cardStat: CardStatus,
): number {
  const permil = cardStat.getEffectValue(SkillEfficacyType.CriticalBonusPermilUp, true, false)
  return permil
}

export function calcSpSkillPower(
  cardStat: CardStatus,
  attributeType: AttributeType,
  combo: number,
): number[] {
  // base definition
  const paramBase = 330000
  const photoPermil = 300
  const yellPermil = 100
  const audiencePermil = 250
  const crtDeckPermil = 500 + 1000
  const crtRateBase = 350

  const permil = cardStat.getBuffedPermil(
    attributeType === AttributeType.Dance ? "dance"
      : attributeType === AttributeType.Vocal ? "vocal"
        : "visual",
    false,
  ) + 1000
  const param = Math.floor(paramBase * permil / 1000)
  const spPermil = 1000 + photoPermil + yellPermil + getSpScorePermil(cardStat)
  const audPermil = 1000 + audiencePermil + getAudiencePermil(cardStat)
  const comboPermil = 1000 + getComboPermil(cardStat, combo)
  const crtRate = (crtRateBase + cardStat.getEffectValue(SkillEfficacyType.CriticalRateUp, true, false)) / 1000
  const crtPermil = 1000 + crtDeckPermil + getCriticalPermil(cardStat)
  const crtWeightedPermil = 1000 + (crtDeckPermil + getCriticalPermil(cardStat)) * (crtRate > 1 ? 1 : crtRate)
  const power = Math.floor(param * spPermil / 1000 * audPermil / 1000 * comboPermil / 1000 * crtPermil / 1000)
  const weightedPower = Math.floor(param * spPermil / 1000 * audPermil / 1000 * comboPermil / 1000 * crtWeightedPermil / 1000)
  return [power, weightedPower]
}

export function calcPrivilegePower(
  cardStat: CardStatus,
  attributeType: AttributeType,
): number {
  const paramBase = 330000
  const permil = cardStat.getBuffedPermil(
    attributeType === AttributeType.Dance ? "dance"
      : attributeType === AttributeType.Vocal ? "vocal"
        : "visual",
    false,
  ) + 1000
  const param = Math.floor(paramBase * permil / 1000)
  const privilegeRate = cardStat.getEffectValue(SkillEfficacyType.SkillSuccessRateUp, true, false)
  const privilege = Math.floor(param * (1000 + privilegeRate) / 1000)
  return privilege
}

// export function calcStaminaRecovery(
//   base: number,
//   permil: number
// ): number {
//   if (permil === 0) {
//     return base
//   }
//   return Math.floor(base * permil / 1000)
// }

