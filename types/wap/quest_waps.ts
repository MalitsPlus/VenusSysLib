import { AttributeType, MoodType } from "../proto/proto_enum"
import { MusicChartPattern } from "../proto/proto_master"
import { WapLiveAbility } from "./skill_waps"

export type QuestBase = {
  id: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  maxCapacity: number
  mentalThreshold: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  liveBonusGroupId: string
  difficultyLevel: number
}

export type WapQuest = QuestBase & {
  musicName: string
  musicChartPatterns: WapMusicChartPattern[]
  liveBonuses?: WapLiveAbility[]
}

export type WapMusicChartPattern = MusicChartPattern & {
  sequence: number
}
