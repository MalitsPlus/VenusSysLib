import {
  Card,
  Skill,
  SkillLevel,
  SkillEfficacy,
  SkillDetail,
  SkillTarget,
  SkillTrigger,
} from "../proto/proto_master"

export type WapCard = Card & {
  skill1: WapSkill
  skill2: WapSkill
  skill3: WapSkill
}

export type WapSkill = Skill & {
  wapSkillLevels: WapSkillLevel[]
}

export type WapSkillLevel = SkillLevel & {
  trigger?: SkillTrigger
  wapSkillDetails: WapSkillDetail[]
}

export type WapSkillDetail = SkillDetail & {
  trigger?: SkillTrigger
  efficacy: WapSkillEfficacy
}

export type WapSkillEfficacy = SkillEfficacy & {
  skillTarget?: SkillTarget
}

// TODO: Photo
export type WapPhotoAbility = {
  photoAbilityId: string
  effectValue: string
  missionId: string
  grade: number
  isAvailable: boolean
}
