import { SkillCategoryType } from "../proto/proto_enum"
import {
  Skill,
  SkillLevel,
  SkillTrigger,
  SkillDetail,
  SkillEfficacy,
  SkillTarget,
  LiveAbilityLevel
} from "../proto/proto_master"

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

export type WapLiveAbility = LiveAbilityLevel & {
  skill: WapSkill
}
