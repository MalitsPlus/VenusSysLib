import { v4 as uuidv4 } from "uuid";
import { calcStaminaRecovery } from "../../../utils/calc_utils";
import { getFixStaminaRecoveryValue } from "../../efficacy_analyze";
import { Action } from "./action";

export const fixStaminaRecovery: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const effInfo = {
    value: getFixStaminaRecoveryValue(efficacy.id) ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  targetIndexes.forEach(target => {
    const cardStat = concert.current.getCardStatus(target)
    if (cardStat) {
      cardStat.effects.push({
        id: uuidv4(),
        efficacyType: efficacy.type,
        grade: effInfo.grade,
        maxGrade: effInfo.maxGrade,
        value: effInfo.value,
        remain: efficacy.duration,
        isInstant: efficacy.isInstant,
        include: isBeforeBeat,
        sourceIndex: sourceIndex,
        sourceSkillIndex: sourceSkillIndex,
      })
      const expRecovery = calcStaminaRecovery(effInfo.value, cardStat, concert.live.quest.staminaRecoveryWeightPermil)
      const maxStamina = concert.liveDeck.getCard(target).deckStamina
      cardStat.stamina = expRecovery + cardStat.stamina > maxStamina ? maxStamina : expRecovery + cardStat.stamina
    }
  })
  return effInfo
}
