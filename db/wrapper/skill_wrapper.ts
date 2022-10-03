import { getEfficacyDuration, isEfficacyInstant } from "../../concert/efficacy_analyze"
import { WapSkillEfficacy } from "../../types/wap/skill_waps"
import { getRawSkillEfficacy, getRawSkillTarget } from "../dao/skill_dao"

export const getWapSkillEfficacy = (
  id: string
): WapSkillEfficacy | undefined => {
  const original = getRawSkillEfficacy(id)
  if (!original) return undefined
  return {
    ...original,
    skillTarget: getRawSkillTarget(original.skillTargetId),
    duration: getEfficacyDuration(original) ?? 0,
    isInstant: isEfficacyInstant(original),
  }
}
