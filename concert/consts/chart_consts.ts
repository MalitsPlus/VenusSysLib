import { MusicChartType, SkillCategoryType, SkillEfficacyType } from "../../types/proto/proto_enum"
import { WeaknessDurationList } from "./efficacy_list"

export const Indexes: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

export const AllyIndexes: number[] = [
  1, 2, 3, 4, 5,
]

export const OpponentIndexes: number[] = [
  6, 7, 8, 9, 10,
]

export const Index2Lane: {
  [k: number]: number
} = {
  1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
  6: 1, 7: 2, 8: 3, 9: 4, 10: 5,
}

export const Lane2Indexes: {
  [k: number]: number[]
} = {
  1: [1, 6],
  2: [2, 7],
  3: [3, 8],
  4: [4, 9],
  5: [5, 10],
}

export const Str2EfficacyType: {
  [key: string]: SkillEfficacyType
} = {
  active_skill_score_up: SkillEfficacyType.ActiveSkillScoreUp,
  audience_amount_increase: SkillEfficacyType.AudienceAmountIncrease,
  audience_amount_reduction: SkillEfficacyType.AudienceAmountReduction,
  beat_score_up: SkillEfficacyType.BeatScoreUp,
  combo_continuation: SkillEfficacyType.ComboContinuation,
  critical_bonus_permil_up: SkillEfficacyType.CriticalBonusPermilUp,
  critical_rate_up: SkillEfficacyType.CriticalRateUp,
  dance_down: SkillEfficacyType.DanceDown,
  dance_up: SkillEfficacyType.DanceUp,
  score_up: SkillEfficacyType.ScoreUp,
  skill_impossible: SkillEfficacyType.SkillImpossible,
  skill_score_up: SkillEfficacyType.ActiveSkillScoreUp,
  stamina_consumption_increase: SkillEfficacyType.StaminaConsumptionIncrease,
  stamina_consumption_reduction: SkillEfficacyType.StaminaConsumptionReduction,
  tension_up: SkillEfficacyType.TensionUp,
  visual_down: SkillEfficacyType.VisualDown,
  visual_up: SkillEfficacyType.VisualUp,
  vocal_down: SkillEfficacyType.VocalDown,
  vocal_up: SkillEfficacyType.VocalUp,
  vocal_boost: SkillEfficacyType.VocalBoost,
  dance_boost: SkillEfficacyType.DanceBoost,
  visual_boost: SkillEfficacyType.VisualBoost,
}

export const Str2EfficacyGroup: {
  [key: string]: SkillEfficacyType[]
} = {
  weekness: WeaknessDurationList,
}

export const IndexNeighbor: {
  [key: number]: number[]
} = {
  1: [2, 3],
  2: [1, 4],
  3: [1, 5],
  4: [2],
  5: [3],
  6: [7, 8],
  7: [6, 9],
  8: [6, 10],
  9: [7],
  10: [8],
}

export const SameLaneOpponent: {
  [k: number]: number
} = {
  1: 6, 2: 7, 3: 8, 4: 9, 5: 10,
  6: 1, 7: 2, 8: 3, 9: 4, 10: 5,
}

export const Chart2SkillType: {
  [key in MusicChartType]: SkillCategoryType
} = {
  [MusicChartType.ActiveSkill]: SkillCategoryType.Active,
  [MusicChartType.SpecialSkill]: SkillCategoryType.Special,
  [MusicChartType.Beat]: SkillCategoryType.Unknown,
  [MusicChartType.Unknown]: SkillCategoryType.Unknown,
}

// export const WeaknessEffectInversionDict: {
//   [key in SkillEfficacyType]?: SkillEfficacyType
// } = {
//   [SkillEfficacyType.DanceDown]: SkillEfficacyType.DanceUp,
//   [SkillEfficacyType.VocalDown]: SkillEfficacyType.VocalUp,
//   [SkillEfficacyType.VisualDown]: SkillEfficacyType.VisualUp,
//   [SkillEfficacyType.StaminaConsumptionIncrease]: SkillEfficacyType.StaminaConsumptionReduction,
// }