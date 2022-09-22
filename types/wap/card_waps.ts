import { Equipment } from "../misc_types"
import { AttributeType } from "../proto/proto_enum"
import { Card } from "../proto/proto_master"
import { WapSkill, WapSkillLevel } from "./skill_waps"

export type WapCard = Card & {
  skill1: WapSkill
  skill2: WapSkill
  skill3: WapSkill
  attributeType: AttributeType
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
  skills: {
    index: number
    skills: WapSkillLevel
  }[]
  liveAbilityLevel?: number
  activityAbilityLevel?: number
}

export type LiveCard = UserCard & {
  deckVocal: number,
  deckDance: number,
  deckVisual: number,
  deckStamina: number,
  deckMental: number,
  deckTechnique: number,
  audienceAmount?: number,
  arbitrary?: boolean,
}

export type UserDeck = {
  id: string,
  deckName: string,
  userCards: {
    index: number,
    userCard: UserCard,
  }[],
  userEquipments?: {
    index: number,
    equipment: Equipment,
  }[],
}

export type LiveDeck = {
  idAlly: string,
  deckNameAlly: string,
  idOppt?: string,
  deckNameOppt?: string,
  liveCards: {
    index: number,
    liveCard: LiveCard,
  }[],
  liveEquipments?: {
    index: number,
    equipment: Equipment,
  }[],
}
