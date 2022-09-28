import { WapCard } from "./wap/card_waps"
import { WapSkillLevel } from "./wap/skill_waps"

export type LiveDeck = {
  isBattle: boolean
  // `liveCards` contains up to 10 cards (in battle live)
  liveCards: {
    index: number
    liveCard: LiveCard
  }[]
  getCard: (index: number) => LiveCard
}

export type LiveCard = UserCard & {
  deckVocal: number,
  deckDance: number,
  deckVisual: number,
  deckStamina: number,
  deckMental: number,
  deckTechnique: number,
  isArbitrary: boolean,
  audienceAmount?: number,
  // TODO: implement exSkills
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
    skill: WapSkillLevel
  }[]
  liveAbilityLevel?: number
  activityAbilityLevel?: number

  getSkill: (index: number) => WapSkillLevel
}
