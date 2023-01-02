import { UserCard } from "./card_types"

export type TransDeck = {
  name: string
  userCards: {
    index: number
    card: UserCard
  }[]
}

export type TransCard = {
  cardId: string
  level: number
  rarity: number
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  vocal: number
  dance: number
  visual: number
  stamina: number
  mental: number
  technique: number
}
