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

export function getTargetStaminaRecoveryValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=target_stamina_recovery-)\d+/)
}

export function getFixStaminaRecoveryValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=fix_stamina_recovery-)\d+/)
}

export function getStaminaConsumptionValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=stamina_consumption-)\d+/)
}

export function getStrengthEffectCountIncreaseValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=strength_effect_count_increase-)\d+/)
}

export function getStrengthEffectValueIncreaseValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=strength_effect_value_increase-)\d+/)
}

export function getCoolTimeReductionValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=cool_time_reduction-)\d+/)
}

export function getCoolTimeIncreaseValue(
  efficacyId: string
): number | undefined {
  return findNumber(efficacyId, /(?<=cool_time_increase-)\d+/)
}

export function getStrengthEffectErasingType(
  efficacyId: string
): string | undefined {
  const matched = efficacyId.match(/(?<=strength_effect_erasing-)\w+/)
  if (matched) {
    return matched[0]
  }
  logError(`Cannot find strings right after 'strength_effect_erasing-'.`)
  return undefined
}

function findNumber(
  efficacyId: string,
  ptn: RegExp,
): number | undefined {
  const matched = efficacyId.match(ptn)
  if (matched) {
    return +matched[0]
  }
  logError(`Cannot find digital numbers right after '${ptn}'.`)
  return undefined
}

function logError(msg: string) {
  console.error("[EfficacyAnalyze] " + msg)
}
