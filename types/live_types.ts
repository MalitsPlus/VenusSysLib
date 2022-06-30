import {
  SkillEfficacyType,
  MusicChartType,
  SkillFailureType,
} from "./proto/proto_enum"
import {
  UserCard,
  Equipment,
} from "./user_types"
import {
  WapQuest, WapSkill,
} from "./wrapper_types"

export type SkillStatus = {
  skillIndex: number,
  coolTime: number,
}

export type Effect = {
  efficacyType: SkillEfficacyType,
  grade: number,
  remain: number,
  value: number,
}

export type CardStatus = {
  cardIndex: number,
  vocal: number,
  dance: number,
  visual: number,
  stamina: number,
  skillStatuses: SkillStatus[],
  effects?: Effect[],
}

export type UserStatus = {
  userIndex: number,
  combo: number,
}

export type EfficacyDetail = {
  efficacyIndex: number,
  efficacyType: SkillEfficacyType,
  targetIndexes?: number[],
  value?: number,
}

export type ActPSkill = {
  cardIndex: number,
  skillIndex: number,
  order: number,
  stamina: number,
  details: EfficacyDetail[],
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

export type LiveDeck = {
  id: string,
  deckName: string,
  liveCards: {
    index: number,
    liveCard: LiveCard,
  }[],
  liveEquipments?: {
    index: number,
    equipment: Equipment,
  }[],
}

// 🚩
export type Chart = {
  chartType: MusicChartType,
  sequence: number,
  position: number,
  cardStatuses: CardStatus[],
  userStatuses: UserStatus[],
  actPSkills?: ActPSkill[],
  failureFlag?: SkillFailureType,
}

export type Live = {
  charts: Chart[],
  quest: WapQuest,
  liveDeck: LiveDeck,
  isBattle: boolean,
  exSkills?: WapSkill[],
  yells?: any[], // TODO: implementation
}

export type Concert = {
  
}
