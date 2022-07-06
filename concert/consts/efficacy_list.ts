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
