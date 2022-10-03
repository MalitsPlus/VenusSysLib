import { GameSetting } from "../db/repository/setting_repository"
import { SkillEfficacyType } from "../types/proto/proto_enum"
import { SkillEfficacy } from "../types/proto/proto_master"

const durationList = [
  SkillEfficacyType.SkillImpossible,
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.StaminaContinuousConsumption,
]
const instantList = [
  SkillEfficacyType.StaminaConsumption,
  SkillEfficacyType.CoolTimeIncrease,
  SkillEfficacyType.StrengthEffectErasing,
  SkillEfficacyType.StrengthEffectErasingAll,
]

export function getEfficacyDuration(
  efficacy: SkillEfficacy
): number | undefined {
  if ([
    ...GameSetting.skillEfficacyTypeStrengthList,
    ...GameSetting.skillEfficacyTypeWeaknessDownList,
    ...durationList
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
    ...instantList
  ].includes(efficacy.type)) {
    return true
  }
  return false
}

export function getFixStaminaRecoveryValue(
  efficacyId: string
): number | undefined {
  let matched = efficacyId.match(/(?<=fix_stamina_recovery-)\d+/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

function getEfficacyLastNum(
  efficacyId: string
): number | undefined {
  let matched = efficacyId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}
