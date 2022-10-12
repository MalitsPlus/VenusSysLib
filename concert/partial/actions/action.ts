import { SkillEfficacyType } from "../../../types/proto/proto_enum"
import { WapSkillEfficacy } from "../../../types/wap/skill_waps"
import { Concert } from "../../concert"
import { EfficacyValue } from "../../consts/eff_grades"
import { coolTimeIncrease } from "./cool_time_increase"
import { coolTimeReduction } from "./cool_time_reduction"
import { danceBoost } from "./dance_boost"
import { danceDown } from "./dance_down"
import { danceUp } from "./dance_up"
import { fixStaminaRecovery } from "./fix_stamina_recovery"
import { liveAbilityCoolTimeReduction } from "./live_ability_cool_time_reduction"
import { staminaConsumption } from "./stamina_consumption"
import { strengthEffectAssignment } from "./strength_effect_assignment"
import { strengthEffectAssignmentAll } from "./strength_effect_assignment_all"
import { strengthEffectCountIncrease } from "./strength_effect_count_increase"
import { strengthEffectErasing } from "./strength_effect_erasing"
import { strengthEffectErasingAll } from "./strength_effect_erasing_all"
import { StrengthEffectMigrationBeforeActiveSkill } from "./strength_effect_migration_before_active_skill"
import { StrengthEffectMigrationBeforeSpecialSkill } from "./strength_effect_migration_before_special_skill"
import { strengthEffectValueIncrease } from "./strength_effect_value_increase"
import { targetStaminaRecovery } from "./target_stamina_recovery"
import { visualBoost } from "./visual_boost"
import { visualDown } from "./visual_down"
import { visualUp } from "./visual_up"
import { vocalBoost } from "./vocal_boost"
import { vocalDown } from "./vocal_down"
import { vocalUp } from "./vocal_up"
import { weaknessEffectInversion } from "./weakness_effect_inversion"
import { weaknessEffectRecovery } from "./weakness_effect_recovery"

/**
 * Determine efficacy type and return a corresponding impl function.
 * @param type One of the `SkillEfficacyType`.
 * @returns A specified `Action` function used to implement corresponding effects.
 */
export function typeOf(type: SkillEfficacyType): Action {
  switch (type) {
    case SkillEfficacyType.DanceUp: // 13
      return danceUp
    case SkillEfficacyType.VocalUp: // 14
      return vocalUp
    case SkillEfficacyType.VisualUp:  // 15
      return visualUp
    case SkillEfficacyType.StaminaRecovery: // 22
      return defaultProc
    case SkillEfficacyType.FixStaminaRecovery:  // 23
      return fixStaminaRecovery
    case SkillEfficacyType.WeaknessEffectRecovery:  // 24
      return weaknessEffectRecovery
    case SkillEfficacyType.StrengthEffectCountIncrease: // 25
      return strengthEffectCountIncrease
    case SkillEfficacyType.StrengthEffectValueIncrease: // 26
      return strengthEffectValueIncrease
    case SkillEfficacyType.CoolTimeReduction: // 27
      return coolTimeReduction
    case SkillEfficacyType.DanceDown: // 30
      return danceDown
    case SkillEfficacyType.VocalDown: // 31
      return vocalDown
    case SkillEfficacyType.VisualDown:  // 32
      return visualDown
    case SkillEfficacyType.TargetStaminaRecovery: // 35
      return targetStaminaRecovery
    case SkillEfficacyType.WeaknessEffectInversion: // 44
      return weaknessEffectInversion
    case SkillEfficacyType.StrengthEffectMigrationBeforeActiveSkill:  // 45
      return StrengthEffectMigrationBeforeActiveSkill
    case SkillEfficacyType.StrengthEffectMigrationBeforeSpecialSkill: // 46
      return StrengthEffectMigrationBeforeSpecialSkill
    case SkillEfficacyType.StaminaConsumption:  // 49
      return staminaConsumption
    case SkillEfficacyType.CoolTimeIncrease:  // 50
      return coolTimeIncrease
    case SkillEfficacyType.StrengthEffectErasing: // 51
      return strengthEffectErasing
    case SkillEfficacyType.StrengthEffectAssignment: // 52
      return strengthEffectAssignment
    case SkillEfficacyType.LiveAbilityCoolTimeReduction:  // 53
      return liveAbilityCoolTimeReduction
    case SkillEfficacyType.VocalBoost:  // 56
      return vocalBoost
    case SkillEfficacyType.DanceBoost:  // 57
      return danceBoost
    case SkillEfficacyType.VisualBoost: // 58
      return visualBoost
    case SkillEfficacyType.StrengthEffectErasingAll:  // 65
      return strengthEffectErasingAll
    case SkillEfficacyType.StrengthEffectAssignmentAll: // 66
      return strengthEffectAssignmentAll
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
}) => {
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
  let val = 0
  const mid = EfficacyValue[efficacy.type]
  if (mid) {
    val = mid[efficacy.grade] ?? 0
  }
  return {
    value: val,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
}
