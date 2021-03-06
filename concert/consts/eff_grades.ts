import {
  SkillEfficacyType,
} from "../../types/proto/proto_enum"

export const GradableEfficacies = [
  SkillEfficacyType.StaminaConsumptionReduction,
  SkillEfficacyType.DanceUp,
  SkillEfficacyType.VocalUp,
  SkillEfficacyType.VisualUp,
  SkillEfficacyType.ScoreUp,
  SkillEfficacyType.BeatScoreUp,
  SkillEfficacyType.ActiveSkillScoreUp,
  SkillEfficacyType.CriticalRateUp,
  SkillEfficacyType.CriticalBonusPermilUp,
  SkillEfficacyType.AudienceAmountIncrease,
  SkillEfficacyType.AudienceAmountReduction,
  SkillEfficacyType.DanceDown,
  SkillEfficacyType.VocalDown,
  SkillEfficacyType.VisualDown,
  SkillEfficacyType.StaminaConsumptionIncrease,
  SkillEfficacyType.SpecialSkillScoreUp,
  SkillEfficacyType.SkillSuccessRateUp,
  SkillEfficacyType.TensionUp,
  SkillEfficacyType.ComboScoreUp,
  SkillEfficacyType.PassiveSkillScoreUp,
  SkillEfficacyType.VocalBoost,
  SkillEfficacyType.DanceBoost,
  SkillEfficacyType.VisualBoost,
  SkillEfficacyType.SpecialScoreMultiplierAdd,
  SkillEfficacyType.ActiveScoreMultiplierAdd,
  SkillEfficacyType.PassiveScoreMultiplierAdd,
]

export const EfficacyMaxGrade = {
  [SkillEfficacyType.StaminaConsumptionReduction]: 20,
  [SkillEfficacyType.DanceUp]: 20,
  [SkillEfficacyType.VocalUp]: 20,
  [SkillEfficacyType.VisualUp]: 20,
  [SkillEfficacyType.ScoreUp]: 20,
  [SkillEfficacyType.BeatScoreUp]: 20,
  [SkillEfficacyType.ActiveSkillScoreUp]: 20,
  [SkillEfficacyType.CriticalRateUp]: 20,
  [SkillEfficacyType.CriticalBonusPermilUp]: 20,
  [SkillEfficacyType.AudienceAmountIncrease]: 10,
  [SkillEfficacyType.AudienceAmountReduction]: 10,
  [SkillEfficacyType.DanceDown]: 20,
  [SkillEfficacyType.VocalDown]: 20,
  [SkillEfficacyType.VisualDown]: 20,
  [SkillEfficacyType.StaminaConsumptionIncrease]: 20,
  [SkillEfficacyType.SpecialSkillScoreUp]: 20,
  [SkillEfficacyType.SkillSuccessRateUp]: 10,
  [SkillEfficacyType.TensionUp]: 10,
  [SkillEfficacyType.ComboScoreUp]: 20,
  [SkillEfficacyType.PassiveSkillScoreUp]: 20,
  [SkillEfficacyType.VocalBoost]: 20,
  [SkillEfficacyType.DanceBoost]: 20,
  [SkillEfficacyType.VisualBoost]: 20,
  [SkillEfficacyType.SpecialScoreMultiplierAdd]: 0,
  [SkillEfficacyType.ActiveScoreMultiplierAdd]: 0,
  [SkillEfficacyType.PassiveScoreMultiplierAdd]: 0,
}

export const StaminaConsumptionReductionGrade = {
  1: -50, 2: -100, 3: -150, 4: -200, 5: -250,
  6: -300, 7: -350, 8: -400, 9: -450, 10: -500,
  11: -550, 12: -600, 13: -650, 14: -700, 15: -750,
  16: -800, 17: -850, 18: -900, 19: -950, 20: -1000,
}

export const DanceUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const VocalUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const VisualUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const ScoreUpGrade = {
  1: 25, 2: 50, 3: 75, 4: 100, 5: 125,
  6: 150, 7: 175, 8: 200, 9: 225, 10: 250,
  11: 275, 12: 300, 13: 325, 14: 350, 15: 375,
  16: 400, 17: 425, 18: 450, 19: 475, 20: 500,
}
export const BeatScoreUpGrade = {
  1: 100, 2: 200, 3: 300, 4: 400, 5: 500,
  6: 600, 7: 700, 8: 800, 9: 900, 10: 1000,
  11: 1100, 12: 1200, 13: 1300, 14: 1400, 15: 1500,
  16: 1600, 17: 1700, 18: 1800, 19: 1900, 20: 2000,
}
export const ActiveSkillScoreUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const CriticalRateUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const CriticalBonusPermilUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const AudienceAmountIncreaseGrade = {
}
export const AudienceAmountReductionGrade = {
}
export const DanceDownGrade = {
  1: -50, 2: -100, 3: -150, 4: -200, 5: -250,
  6: -300, 7: -350, 8: -400, 9: -450, 10: -500,
  11: -550, 12: -600, 13: -650, 14: -700, 15: -750,
  16: -800, 17: -850, 18: -900, 19: -950, 20: -1000,
}
export const VocalDownGrade = {
  1: -50, 2: -100, 3: -150, 4: -200, 5: -250,
  6: -300, 7: -350, 8: -400, 9: -450, 10: -500,
  11: -550, 12: -600, 13: -650, 14: -700, 15: -750,
  16: -800, 17: -850, 18: -900, 19: -950, 20: -1000,
}
export const VisualDownGrade = {
  1: -50, 2: -100, 3: -150, 4: -200, 5: -250,
  6: -300, 7: -350, 8: -400, 9: -450, 10: -500,
  11: -550, 12: -600, 13: -650, 14: -700, 15: -750,
  16: -800, 17: -850, 18: -900, 19: -950, 20: -1000,
}
export const StaminaConsumptionIncreaseGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
  11: 550, 12: 600, 13: 650, 14: 700, 15: 750,
  16: 800, 17: 850, 18: 900, 19: 950, 20: 1000,
}
export const SpecialSkillScoreUpGrade = {
  1: 30, 2: 60, 3: 90, 4: 120, 5: 150,
  6: 180, 7: 210, 8: 240, 9: 270, 10: 300,
  11: 330, 12: 360, 13: 390, 14: 420, 15: 450,
  16: 480, 17: 510, 18: 540, 19: 570, 20: 600,
}
export const SkillSuccessRateUpGrade = {
  1: 37, 2: 75, 3: 112, 4: 150, 5: 187,
  6: 225, 7: 262, 8: 300, 9: 337, 10: 375,
}
export const TensionUpGrade = {
  1: 50, 2: 100, 3: 150, 4: 200, 5: 250,
  6: 300, 7: 350, 8: 400, 9: 450, 10: 500,
}
export const ComboScoreUpGrade = {
  1: 100, 2: 200, 3: 300, 4: 400, 5: 500,
  6: 600, 7: 700, 8: 800, 9: 900, 10: 1000,
  11: 1100, 12: 1200, 13: 1300, 14: 1400, 15: 1500,
  16: 1600, 17: 1700, 18: 1800, 19: 1900, 20: 2000,
}
export const PassiveSkillScoreUpGrade = {
  1: 100, 2: 200, 3: 300, 4: 400, 5: 500,
  6: 600, 7: 700, 8: 800, 9: 900, 10: 1000,
  11: 1100, 12: 1200, 13: 1300, 14: 1400, 15: 1500,
  16: 1600, 17: 1700, 18: 1800, 19: 1900, 20: 2000,
}
export const VocalBoostGrade = {
  1: 75, 2: 150, 3: 225, 4: 300, 5: 375,
  6: 450, 7: 525, 8: 600, 9: 675, 10: 750,
  11: 825, 12: 900, 13: 975, 14: 1050, 15: 1125,
  16: 1200, 17: 1275, 18: 1350, 19: 1425, 20: 1500,
}
export const DanceBoostGrade = {
  1: 75, 2: 150, 3: 225, 4: 300, 5: 375,
  6: 450, 7: 525, 8: 600, 9: 675, 10: 750,
  11: 825, 12: 900, 13: 975, 14: 1050, 15: 1125,
  16: 1200, 17: 1275, 18: 1350, 19: 1425, 20: 1500,
}
export const VisualBoostGrade = {
  1: 75, 2: 150, 3: 225, 4: 300, 5: 375,
  6: 450, 7: 525, 8: 600, 9: 675, 10: 750,
  11: 825, 12: 900, 13: 975, 14: 1050, 15: 1125,
  16: 1200, 17: 1275, 18: 1350, 19: 1425, 20: 1500,
}
export const SpecialScoreMultiplierAddGrade = {
}
export const ActiveScoreMultiplierAddGrade = {
}
export const PassiveScoreMultiplierAddGrade = {
}

export const EfficacyValue = {
  [SkillEfficacyType.StaminaConsumptionReduction]: StaminaConsumptionReductionGrade,
  [SkillEfficacyType.DanceUp]: DanceUpGrade,
  [SkillEfficacyType.VocalUp]: VocalUpGrade,
  [SkillEfficacyType.VisualUp]: VisualUpGrade,
  [SkillEfficacyType.ScoreUp]: ScoreUpGrade,
  [SkillEfficacyType.BeatScoreUp]: BeatScoreUpGrade,
  [SkillEfficacyType.ActiveSkillScoreUp]: ActiveSkillScoreUpGrade,
  [SkillEfficacyType.CriticalRateUp]: CriticalRateUpGrade,
  [SkillEfficacyType.CriticalBonusPermilUp]: CriticalBonusPermilUpGrade,
  [SkillEfficacyType.AudienceAmountIncrease]: AudienceAmountIncreaseGrade,
  [SkillEfficacyType.AudienceAmountReduction]: AudienceAmountReductionGrade,
  [SkillEfficacyType.DanceDown]: DanceDownGrade,
  [SkillEfficacyType.VocalDown]: VocalDownGrade,
  [SkillEfficacyType.VisualDown]: VisualDownGrade,
  [SkillEfficacyType.StaminaConsumptionIncrease]: StaminaConsumptionIncreaseGrade,
  [SkillEfficacyType.SpecialSkillScoreUp]: SpecialSkillScoreUpGrade,
  [SkillEfficacyType.SkillSuccessRateUp]: SkillSuccessRateUpGrade,
  [SkillEfficacyType.TensionUp]: TensionUpGrade,
  [SkillEfficacyType.ComboScoreUp]: ComboScoreUpGrade,
  [SkillEfficacyType.PassiveSkillScoreUp]: PassiveSkillScoreUpGrade,
  [SkillEfficacyType.VocalBoost]: VisualBoostGrade,
  [SkillEfficacyType.DanceBoost]: DanceBoostGrade,
  [SkillEfficacyType.VisualBoost]: VisualBoostGrade,
  [SkillEfficacyType.SpecialScoreMultiplierAdd]: SpecialScoreMultiplierAddGrade,
  [SkillEfficacyType.ActiveScoreMultiplierAdd]: ActiveScoreMultiplierAddGrade,
  [SkillEfficacyType.PassiveScoreMultiplierAdd]: PassiveScoreMultiplierAddGrade,
}