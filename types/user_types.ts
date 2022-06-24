import {
  WapCard,
  WapSkill,
  WapSkillDetail,
  WapSkillEfficacy,
  WapSkillLevel,
} from "./wrapper_types"

export type UserDeck = {

}

export type UserCard = WapCard & {
  level: number
  rarity: number
  vocal: number
  dance: number
  visual: number
  stamina: number
  mental: number
  technique: number
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  liveAbilityLevel?: number
  activityAbilityLevel?: number
}

