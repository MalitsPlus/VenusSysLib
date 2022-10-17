import { getEfficacyDuration, isEfficacyInstant } from "../../concert/efficacy_analyze"
import { Skill, SkillDetail, SkillLevel } from "../../types/proto/proto_master"
import { WapSkill, WapSkillDetail, WapSkillEfficacy, WapSkillLevel } from "../../types/wap/skill_waps"
import { getRawSkill, getRawSkillEfficacy, getRawSkillTarget, getRawSkillTrigger } from "../dao/skill_dao"

export const getWapSkill = (
  id: string
): WapSkill | undefined => {
  const original = getRawSkill(id)
  if (!original) return undefined
  return {
    ...original,
    wapSkillLevels: getWapSkillLevels(original),
  }
}

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

const getWapSkillLevels = (
  skill: Skill,
): WapSkillLevel[] => {
  return skill.levels.map(level => getWapSkillLevel(skill, level))
}

export const getWapSkillLevel = (
  skill: Skill,
  level: SkillLevel,
): WapSkillLevel => {
  return {
    ...level,
    name: skill.name,
    assetId: skill.assetId,
    categoryType: skill.categoryType,
    trigger: getRawSkillTrigger(level.triggerId),
    wapSkillDetails: getWapSkillDetails(level),
  }
}

const getWapSkillDetails = (
  level: SkillLevel,
): WapSkillDetail[] => {
  return level.skillDetails.map(detail => getWapSkillDetail(detail))
}

const getWapSkillDetail = (
  detail: SkillDetail,
): WapSkillDetail => {
  return {
    ...detail,
    trigger: getRawSkillTrigger(detail.triggerId),
    efficacy: getWapSkillEfficacy(detail.efficacyId)!,  // FIXME: potential error
  }
}
