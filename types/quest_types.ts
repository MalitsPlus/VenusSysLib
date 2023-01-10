import { AttributeType, LiveSkipType } from "./proto/proto_enum";
import { Quest } from "./proto/proto_master";

export type QuestBase = {
  id: string
  stageId: string
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
  questAudienceAdvantageId: string
  liveBonusGroupId: string
  liveSkipType: LiveSkipType

  areaId?: string
  difficultyLevel?: number
  name?: string
  questCharacterAdvantageId?: string
}