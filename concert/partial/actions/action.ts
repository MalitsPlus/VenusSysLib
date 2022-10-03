import { SkillEfficacyType } from "../../../types/proto/proto_enum"
import { WapSkillEfficacy } from "../../../types/wap/skill_waps"
import { Concert } from "../../concert"
import { danceUp } from "./dance_up"

/**
 * Determine efficacy type and return a corresponding impl function.
 * @param type One of the `SkillEfficacyType`.
 * @returns A specified `Action` function used to implement corresponding effects.
 */
export function typeOf(type: SkillEfficacyType): Action {
  switch (type) {
    case SkillEfficacyType.DanceUp: // 13
      return danceUp
    default:
      return defaultProc
  }
}

/**
 * Base type of skill actions
 */
export type Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}: {
  concert: Concert,
  efficacy: WapSkillEfficacy,
  targetIndexes: number[],
  sourceIndex: number,
  sourceSkillIndex: number,
  isBeforeBeat: boolean,
}
) => {
  value: number,
  grade: number,
  maxGrade: number,
}

const defaultProc: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  return {
    value: 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
}
