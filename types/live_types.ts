import { LiveBeat } from "./proto/proto_api"
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
  remainCount: number,
}

export type DetEffect = {
  efficacyType: SkillEfficacyType,
  grade: number,
  value: number,
}

export type Effect = DetEffect & {
  remain: number,
  // additions
  include?: boolean,
  id?: string,
  sourceIndex?: number,
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

export type ActSkill = {
  cardIndex: number,
  skillIndex: number,
  order: number,
  stamina: number,
  details: EfficacyDetail[],
  isCritical: boolean,
  isComboBreak: boolean,
  score?: number,
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
  actPosition: number,
  cardStatuses: CardStatus[],
  userStatuses: UserStatus[],
  beats?: LiveBeat[],
  stageSkillStatuses?: SkillStatus[],
  actSkill?: ActSkill,
  actPSkills?: ActSkill[],
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
