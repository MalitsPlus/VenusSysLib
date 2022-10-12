import { v4 as uuidv4 } from "uuid";
import { calcStaminaConsumption } from "../../../utils/calc_utils";
import { getStaminaConsumptionValue } from "../../efficacy_analyze";
import { Action } from "./action";

export const staminaConsumption: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const effInfo = {
    value: getStaminaConsumptionValue(efficacy.id) ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  targetIndexes.forEach(target => {
    const cardStat = concert.current.getCardStatus(target)
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
    const expConsume = calcStaminaConsumption(effInfo.value, cardStat, concert.live.quest.staminaRecoveryWeightPermil)
    cardStat.stamina = cardStat.stamina - expConsume < 0 ? 0 : cardStat.stamina
  })
  return effInfo
}
