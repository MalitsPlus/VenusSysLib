import exp from "constants"
import {
  SkillEfficacyType,
  SkillTriggerType,
} from "../../types/proto/proto_enum"

export const StaminaConsumptionAdjustment = [
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.StaminaConsumptionReduction,
]
export const ParamBoost = [
  SkillEfficacyType.DanceBoost,
  SkillEfficacyType.VocalBoost,
  SkillEfficacyType.VisualBoost,
]

export const TriggerBefore = [
  SkillTriggerType.Beat,
  SkillTriggerType.BeforeActiveSkillBySomeone,
  SkillTriggerType.BeforeSpecialSkillBySomeone,
  SkillTriggerType.BeforeCritical,
  SkillTriggerType.BeforeCriticalBySomeone,
  SkillTriggerType.BeforeActiveSkill,
  SkillTriggerType.BeforeSpecialSkill,
]

export const SkillEfficacyTypeWeaknessDownList = [
  SkillEfficacyType.DanceDown,
  SkillEfficacyType.VocalDown,
  SkillEfficacyType.VisualDown,
]
export const SkillEfficacyTypeWeaknessOtherList = [
  SkillEfficacyType.SkillImpossible,
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.StaminaConsumption,
  SkillEfficacyType.CoolTimeIncrease,
  SkillEfficacyType.StrengthEffectErasing,
  SkillEfficacyType.StaminaContinuousConsumption,
  SkillEfficacyType.StrengthEffectErasingAll,
]
export const SkillEfficacyTypeWeaknessList = [
  ...SkillEfficacyTypeWeaknessDownList,
  ...SkillEfficacyTypeWeaknessOtherList,
]

export const SkillEfficacyStaminaRecoveryList = [
  SkillEfficacyType.StaminaContinuousRecovery,
  SkillEfficacyType.StaminaRecovery,
  SkillEfficacyType.FixStaminaRecovery,
  SkillEfficacyType.TargetStaminaRecovery,
]

export const EasyAttachList = [
  SkillEfficacyType.StaminaConsumptionReduction,
  SkillEfficacyType.ComboContinuation,
  SkillEfficacyType.ScoreUp,
  SkillEfficacyType.BeatScoreUp,
  SkillEfficacyType.ActiveSkillScoreUp,
  SkillEfficacyType.CriticalRateUp,
  SkillEfficacyType.CriticalBonusPermilUp,
  SkillEfficacyType.AudienceAmountIncrease,
  SkillEfficacyType.AudienceAmountReduction,
  SkillEfficacyType.SkillImpossible,
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.SpecialSkillScoreUp,
  SkillEfficacyType.SkillSuccessRateUp,
  SkillEfficacyType.TensionUp,
  SkillEfficacyType.WeaknessEffectPrevention,
  SkillEfficacyType.ComboScoreUp,
  SkillEfficacyType.PassiveSkillScoreUp,
  SkillEfficacyType.SpecialScoreMultiplierAdd,
  SkillEfficacyType.ActiveScoreMultiplierAdd,
  SkillEfficacyType.PassiveScoreMultiplierAdd,
  SkillEfficacyType.StaminaContinuousRecovery,
  SkillEfficacyType.StaminaContinuousConsumption,
]

export const ParamChangingList = [
  SkillEfficacyType.DanceUp,
  SkillEfficacyType.VocalUp,
  SkillEfficacyType.VisualUp,
  SkillEfficacyType.DanceDown,
  SkillEfficacyType.VocalDown,
  SkillEfficacyType.VisualDown,
  SkillEfficacyType.DanceBoost,
  SkillEfficacyType.VocalBoost,
  SkillEfficacyType.VisualBoost,
]
