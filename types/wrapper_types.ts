import {
  Card,
  Skill,
  SkillLevel,
  SkillEfficacy,
  SkillDetail,
  SkillTarget,
  SkillTrigger,
  MusicChartPattern,
  LiveAbility,
  LiveAbilityLevel,
} from "./proto/proto_master"
import {
  QuestBase,
} from "./base_types"
import { AttributeType, SkillCategoryType } from "./proto/proto_enum"
import { LiveBeat } from "./proto/proto_api"

export type WapCard = Card & {
  skill1: WapSkill
  skill2: WapSkill
  skill3: WapSkill
  attributeType: AttributeType
}

export type WapSkill = Skill & {
  wapSkillLevels: WapSkillLevel[]
}

export type WapSkillLevel = SkillLevel & {
  trigger?: SkillTrigger
  wapSkillDetails: WapSkillDetail[]
  categoryType: SkillCategoryType
  name: string
  assetId: string
}

export type WapSkillDetail = SkillDetail & {
  trigger?: SkillTrigger
  efficacy: WapSkillEfficacy
}

export type WapSkillEfficacy = SkillEfficacy & {
  skillTarget?: SkillTarget
}

export type WapMusicChartPattern = MusicChartPattern & {
  sequence: number
}

export type WapLiveAbility = LiveAbilityLevel & {
  skill: WapSkill
}

export type WapQuest = QuestBase & {
  musicName: string
  musicChartPatterns: WapMusicChartPattern[]
  liveBonuses?: WapLiveAbility[]
}

// TODO: Photo
export type WapPhotoAbility = {
  photoAbilityId: string
  effectValue: string
  missionId: string
  grade: number
  isAvailable: boolean
}

export type WapLiveBeat = Omit<LiveBeat, "score"> & {
  score: number
}