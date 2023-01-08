import { SkillEfficacyType } from "../../types/proto/proto_enum";
import { calcStaminaConsumption, calcStaminaRecovery } from "../../utils/calc_utils";
import { Concert } from "../concert";

export function applyContinuousEffects(
  this: Concert,
) {
  this.current.cardStatuses.forEach(cardStat => {
    const recoveryValue = cardStat.getEffectValue(SkillEfficacyType.StaminaContinuousRecovery, false)
    if (recoveryValue) {
      const finalRec = calcStaminaRecovery(recoveryValue, cardStat, this.live.quest.staminaRecoveryWeightPermil)
      const maxStamina = this.liveDeck.getCard(cardStat.cardIndex).deckStamina
      cardStat.stamina = cardStat.stamina + finalRec > maxStamina ? maxStamina : cardStat.stamina + finalRec
    }
    const consumeValue = cardStat.getEffectValue(SkillEfficacyType.StaminaContinuousConsumption, false)
    if (consumeValue) {
      const finalCsm = calcStaminaConsumption(consumeValue, cardStat, this.live.quest.skillStaminaWeightPermil)
      cardStat.stamina = cardStat.stamina - finalCsm < 0 ? 0 : cardStat.stamina - finalCsm
    }
  })
}
