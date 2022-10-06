import { GameSetting } from "../db/repository/setting_repository"
import { SkillEfficacy } from "../types/proto/proto_master"
import { WeaknessOtherDurationList, WeaknessOtherInstantList } from "./consts/efficacy_list"


export function getEfficacyDuration(
  efficacy: SkillEfficacy
): number | undefined {
  if ([
    ...GameSetting.skillEfficacyTypeStrengthList,
    ...GameSetting.skillEfficacyTypeWeaknessDownList,
    ...WeaknessOtherDurationList
  ].includes(efficacy.type)) {
    return getEfficacyLastNum(efficacy.id)
  }
}

export function isEfficacyInstant(
  efficacy: SkillEfficacy
): boolean {
  if ([
    ...GameSetting.skillEfficacyTypeScoreList,
    ...GameSetting.skillEfficacyTypeSupportList,
    ...WeaknessOtherInstantList
  ].includes(efficacy.type)) {
    return true
  }
  return false
}

function getEfficacyLastNum(
  efficacyId: string
): number | undefined {
  const matched = efficacyId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

export function getFixStaminaRecoveryValue(
  efficacyId: string
): number | undefined {
  const matched = efficacyId.match(/(?<=fix_stamina_recovery-)\d+/)
  if (matched) {
    return +matched[0]
  }
  logError("Cannot find digital numbers right after 'fix_stamina_recovery-'.")
  return undefined
}

export function getStrengthEffectCountIncreaseValue(
  efficacyId: string
): number | undefined {
  const matched = efficacyId.match(/(?<=strength_effect_count_increase-)\d+/)
  if (matched) {
    return +matched[0]
  }
  logError("Cannot find digital numbers right after 'strength_effect_count_increase-'.")
  return undefined
}

export function getStrengthEffectValueIncreaseValue(
  efficacyId: string
): number | undefined {
  const matched = efficacyId.match(/(?<=strength_effect_value_increase-)\d+/)
  if (matched) {
    return +matched[0]
  }
  logError("Cannot find digital numbers right after 'strength_effect_value_increase-'.")
  return undefined
}

function logError(msg: string) {
  console.error("[EfficacyAnalyze] " + msg)
}
