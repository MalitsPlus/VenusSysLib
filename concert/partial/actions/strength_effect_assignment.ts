import { Action } from "./action";

export const strengthEffectAssignment: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const effInfo = {
    value: 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  console.warn("Unimplemented Action 'StrengthEffectAssignment'.")
  return effInfo
}
