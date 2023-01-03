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
  readonly deckVocal: number,
  readonly deckDance: number,
  readonly deckVisual: number,
  readonly deckStamina: number,
  readonly deckMental: number,
  readonly deckTechnique: number,
  // isArbitrary: boolean,
  audienceAmount?: number,
  getSkill: (index: number) => WapSkillLevel,
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
}
