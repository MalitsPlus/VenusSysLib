import { getLiveAbilityReduceValue } from "../../efficacy_analyze";
import { Action } from "./action";

export const liveAbilityCoolTimeReduction: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const reduceValue = getLiveAbilityReduceValue(efficacy.id)
  const effInfo = {
    value: reduceValue ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  if (reduceValue) {
    let userIndex = 1
    if (sourceIndex >= 6) {
      userIndex = 2
    }
    for (const stageSkill of concert.current.stageSkillStatuses ?? []) {
      if (stageSkill.userIndex !== userIndex) {
        continue
      }
      if (!stageSkill.hasTimes()) {
        continue
      }
      stageSkill.coolTime = stageSkill.coolTime > reduceValue ? stageSkill.coolTime - reduceValue : 0
    }
  }
  return effInfo
}
