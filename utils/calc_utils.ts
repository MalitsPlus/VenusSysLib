import { staminaConsumptionAdjustment } from "../concert/efficacy_list"
import { CardStatus, LiveCard } from "../types/live_types"
import { SkillEfficacyType } from "../types/proto/proto_enum"
import { WapSkillLevel } from "../types/wrapper_types"

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

export function calcStaminaConsume(
  skillLevel: WapSkillLevel,
  card: LiveCard,
  cardStatus: CardStatus
): number {
  var consumeSt = skillLevel.staminaPermil
    ? Math.floor(card.deckStamina * skillLevel.staminaPermil / 1000)
    : skillLevel.stamina
  if (cardStatus.effects) {
    let stConsumeEff = cardStatus.effects.filter(
      it => it.efficacyType in staminaConsumptionAdjustment
    )
    if (stConsumeEff.length > 0) {
      
    }
  }
}
