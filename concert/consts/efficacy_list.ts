import { GameSetting } from "../../db/repository/setting_repository"
import {
  SkillEfficacyType,
  SkillTriggerType
} from "../../types/proto/proto_enum"

export const WeaknessOtherDurationList = [
  SkillEfficacyType.SkillImpossible,
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.StaminaContinuousConsumption,
]
export const WeaknessOtherInstantList = [
  SkillEfficacyType.StaminaConsumption,
  SkillEfficacyType.CoolTimeIncrease,
  SkillEfficacyType.StrengthEffectErasing,
  SkillEfficacyType.StrengthEffectErasingAll,
]

export const WeaknessDurationList = [
  ...GameSetting.skillEfficacyTypeWeaknessDownList,
  ...WeaknessOtherDurationList,
]

export const StaminaConsumptionAdjustment = [
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.StaminaConsumptionReduction,
]
export const ParamBoost = [
  SkillEfficacyType.DanceBoost,
  SkillEfficacyType.VocalBoost,
  SkillEfficacyType.VisualBoost,
]

export const TriggerBeforeList = [
  SkillTriggerType.Beat,
  SkillTriggerType.BeforeActiveSkillBySomeone,
  SkillTriggerType.BeforeSpecialSkillBySomeone,
  SkillTriggerType.BeforeCritical,
  SkillTriggerType.BeforeCriticalBySomeone,
  SkillTriggerType.BeforeActiveSkill,
  SkillTriggerType.BeforeSpecialSkill,
]

export const SkillEfficacyStaminaRecoveryList = [
  SkillEfficacyType.StaminaContinuousRecovery,
  SkillEfficacyType.StaminaRecovery,
  SkillEfficacyType.FixStaminaRecovery,
  SkillEfficacyType.TargetStaminaRecovery,
]
