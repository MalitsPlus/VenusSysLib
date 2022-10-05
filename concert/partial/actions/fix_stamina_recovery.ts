import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { getFixStaminaRecoveryValue } from "../../efficacy_analyze";

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
  // 对每个目标适用效果
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
  })
  return effInfo
}
