import {
  SkillEfficacyType,
  MusicChartType,
} from "../proto/proto_enum"
import {
  QuestBase
} from "./base_types"
import {
  UserDeck,
  UserCard,
  Equipment,
} from "./user_types"

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
  num: number,
  cardStatuses: CardStatus[],
  userStatuses: UserStatus[],
  actPSkills?: ActPSkill[],
}

export type Live = {
  charts: Chart[],
  quest: QuestBase,
  liveDeck: LiveDeck,
  yells?: any[], // TODO: implementation
}
