import {
  Accessory,
} from "../proto/proto_master"
import {
  WapCard,
  WapSkill,
  WapSkillDetail,
  WapSkillEfficacy,
  WapSkillLevel,
  WapPhotoAbility,
} from "./wrapper_types"

export type UserDeck = {
  id: string,
  deckName: string,
  userCards: {
    index: number,
    userCard: UserCard,
  }[],
  userEquipments: {
    index: number,
    equipment: Equipment,
  }[],
}

export type Equipment = {
  wapPhotos: UserPhoto[],
  accessories: Accessory[],
}

export type UserPhoto = {
  photoId: string
  name: string
  rarity: number
  level: number
  abilities: WapPhotoAbility[]
  focusCharacterId: string
  photoRecipeId: string
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

