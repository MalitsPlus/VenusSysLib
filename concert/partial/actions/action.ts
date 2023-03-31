import { v4 as uuidv4 } from "uuid"
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
import { statusEffectChange } from "./status_effect_change"
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
    case SkillEfficacyType.StaminaConsumptionReduction: // 11
      return defaultProc
    case SkillEfficacyType.ComboContinuation: // 12
      return defaultProc
    case SkillEfficacyType.DanceUp: // 13
      return danceUp
    case SkillEfficacyType.VocalUp: // 14
      return vocalUp
    case SkillEfficacyType.VisualUp:  // 15
      return visualUp
    case SkillEfficacyType.ScoreUp:  // 16
      return defaultProc
    case SkillEfficacyType.BeatScoreUp:  // 17
      return defaultProc
    case SkillEfficacyType.ActiveSkillScoreUp:  // 18
      return defaultProc
    case SkillEfficacyType.CriticalRateUp:  // 19
      return defaultProc
    case SkillEfficacyType.CriticalBonusPermilUp:  // 20
      return defaultProc
    case SkillEfficacyType.AudienceAmountIncrease:  // 21
      return defaultProc
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
    case SkillEfficacyType.AudienceAmountReduction: // 28
      return defaultProc
    case SkillEfficacyType.SkillImpossible: // 29
      return defaultProc
    case SkillEfficacyType.DanceDown: // 30
      return danceDown
    case SkillEfficacyType.VocalDown: // 31
      return vocalDown
    case SkillEfficacyType.VisualDown:  // 32
      return visualDown
    case SkillEfficacyType.StaminaConsumptionIncrease: // 33
      return defaultProc
    case SkillEfficacyType.SpecialSkillScoreUp: // 34
      return defaultProc
    case SkillEfficacyType.TargetStaminaRecovery: // 35
      return targetStaminaRecovery
    case SkillEfficacyType.SkillSuccessRateUp: // 37
      return defaultProc
    case SkillEfficacyType.TensionUp: // 38
      return defaultProc
    case SkillEfficacyType.WeaknessEffectPrevention: // 40
      return defaultProc
    case SkillEfficacyType.ComboScoreUp: // 41
      return defaultProc
    case SkillEfficacyType.PassiveSkillScoreUp: // 42
      return defaultProc
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
    case SkillEfficacyType.SpecialScoreMultiplierAdd: // 59
      return defaultProc
    case SkillEfficacyType.ActiveScoreMultiplierAdd: // 60
      return defaultProc
    case SkillEfficacyType.PassiveScoreMultiplierAdd: // 61
      return defaultProc
    case SkillEfficacyType.StaminaContinuousRecovery: // 62
      return defaultProc
    case SkillEfficacyType.StaminaContinuousConsumption: // 63
      return defaultProc
    case SkillEfficacyType.ActiveSkillChanceAssignment: // 64
      return defaultProc
    case SkillEfficacyType.StrengthEffectErasingAll:  // 65
      return strengthEffectErasingAll
    case SkillEfficacyType.StrengthEffectAssignmentAll: // 66
      return strengthEffectAssignmentAll
    case SkillEfficacyType.StatusEffectChange:  // 72
      return statusEffectChange
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
  const effInfo = {
    value: val,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  // apply effects to targets
  targetIndexes.forEach(target => {
    const cardStat = concert.current.getCardStatus(target)
    cardStat?.effects.push({
      id: uuidv4(),
      efficacyType: efficacy.type,
      grade: effInfo.grade,
      maxGrade: effInfo.maxGrade,
      value: effInfo.value,
      remain: efficacy.duration,
      isInstant: efficacy.isInstant,
      include: isBeforeBeat,
      sourceIndex: sourceIndex,
      sourceSkillIndex: sourceSkillIndex,
    })
  })
  return {
    value: val,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
}
