import { Action } from "./action";

export const activeSkillChanceAssignment: Action = ({
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
  console.warn("Unimplemented Action 'ActiveSkillChanceAssignment'.")
  return effInfo
}