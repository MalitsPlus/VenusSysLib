
export type TransDeck = {
  name: string
  transCards: {
    index: number
    card: TransCard
  }[]
}

export type TransCard = {
  index: number
  cardId: string
  level: number
  rarity: number
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  isArbitrary: boolean
  vocal: number
  dance: number
  visual: number
  stamina: number
  mental: number
  technique: number
}
