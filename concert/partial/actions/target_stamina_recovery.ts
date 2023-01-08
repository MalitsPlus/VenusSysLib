import { v4 as uuidv4 } from "uuid";
import { calcStaminaRecovery } from "../../../utils/calc_utils";
import { getTargetStaminaRecoveryValue } from "../../efficacy_analyze";
import { Action } from "./action";

export const targetStaminaRecovery: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const effInfo = {
    value: getTargetStaminaRecoveryValue(efficacy.id) ?? 0,
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
      const fixedValue = Math.floor(concert.liveDeck.getCard(target).deckStamina * effInfo.value / 1000)
      const expRecovery = calcStaminaRecovery(fixedValue, cardStat, concert.live.quest.staminaRecoveryWeightPermil)
      const maxStamina = concert.liveDeck.getCard(target).deckStamina
      cardStat.stamina = cardStat.stamina + expRecovery > maxStamina ? maxStamina : cardStat.stamina + expRecovery
    }
  })
  return effInfo
}
