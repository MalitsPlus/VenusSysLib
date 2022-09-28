import {
  ParamBoost,
  StaminaConsumptionAdjustment
} from "../concert/consts/efficacy_list"
import {
  EfficacyValue,
  StaminaConsumptionReductionGrade
} from "../concert/consts/eff_grades"
import { LiveCard } from "../types/card_types"
import {
  CardStatus,
} from "../types/concert_types"
import {
  AttributeType,
  MusicChartType, SkillEfficacyType
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
  mul: number,
  add: number,
  isPermil?: boolean
): number {
  var divisor = 1
  if (isPermil) {
    divisor = 1000
  }
  return Math.floor(base * mul / divisor) + add
}

/**
 * Calculate stamina consumption.
 * @param skillLevel A `WapSkillLevel` to be performed.
 * @param card A `LiveCard` which performs this skill.
 * @param cardStatus A `CardStatus` belongs to which performs this skill.
 * @param staminaWeightPermil Stamina consumption rate of this stage.
 * @returns Calculated stamina amount to be consumed.
 */
export function calcStaminaConsumption(
  skillLevel: WapSkillLevel,
  card: LiveCard,
  cardStatus: CardStatus,
  staminaWeightPermil: number
): number {
  const expectedSt = skillLevel.staminaPermil
    ? Math.floor(card.deckStamina * skillLevel.staminaPermil / 1000)
    : skillLevel.stamina
  let permil = 1000
  if (cardStatus.effects) {
    cardStatus.effects.forEach(eff => {
      if (isEffects(eff, StaminaConsumptionAdjustment)) {
        permil += EfficacyValue[eff.efficacyType][eff.grade]
      }
      if (isEffects(eff, ParamBoost)) {
        permil += eff.grade * 10
      }
    })
  }
  return Math.floor(expectedSt * permil / 1000 * staminaWeightPermil / 1000)
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
    cardStatus
  )?.value ?? 0) / 1000

  return param * powerRate
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

export function calcBeatScore(
): number {
  return 0
}
