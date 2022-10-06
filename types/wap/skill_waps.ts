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
  duration: number
  isInstant: boolean  // FIXME: 考虑是否有必要？duration=0判断已足够？
}

export type WapLiveAbility = LiveAbilityLevel & {
  skill: WapSkillLevel
}
