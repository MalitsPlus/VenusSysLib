import {
  SkillEfficacyType,
  MusicChartType,
  SkillFailureType
} from "./proto/proto_enum"
import { LiveCard, LiveDeck } from "./card_types"
import { WapLiveBeat } from "./wap/misc_waps"
import { WapQuest } from "./wap/quest_waps"
import { WapSkillLevel } from "./wap/skill_waps"

export type Live = {
  charts:  Chart[],
  quest: WapQuest,
  liveDeck: LiveDeck,
  isBattle: boolean,
  // exSkills?: WapSkillLevel[],
}

export type Chart = {
  chartType: MusicChartType,
  sequence: number,
  actPosition: number,
  cardStatuses: CardStatus[],
  userStatuses: UserStatus[],
  beats?: WapLiveBeat[],
  stageSkillStatuses?: StageSkillStatus[],
  actSkill?: ActSkill,
  actPSkills: ActSkill[],
  failureFlag?: SkillFailureType,

  getCardStatus: (this: Chart, index: number) => CardStatus,
  getUserStatus: (this: Chart, index: number) => UserStatus,
  getStageStatus: (this: Chart, cardIndex: number, skillIndex: number) => StageSkillStatus | undefined,
}

export type CardStatus = {
  cardIndex: number,
  vocal: number,
  dance: number,
  visual: number,
  stamina: number,
  technique: number,
  mental: number,
  skillStatuses: SkillStatus[],
  effects: Effect[],

  getSkillStatus: (this: CardStatus, index: number) => SkillStatus,
  getEffects: (this: CardStatus, type: SkillEfficacyType, needZeroRemain?: boolean) => Effect[],
  getEffectSumGrade: (this: CardStatus, type: SkillEfficacyType) => number,
  getBuffedPermil: (this: CardStatus, type: "dance" | "vocal" | "visual") => number,
  refreshParam: (this: CardStatus, card: LiveCard, type: "dance" | "vocal" | "visual") => void,
}

export type ConcertSkill = WapSkillLevel & {
  deckPosition: number,
  skillIndex: number,
  isFirstTime: boolean,
  isOpponentSide: boolean,
}

export type UserStatus = {
  userIndex: number,
  combo: number,
}

export type SkillStatus = {
  skillIndex: number,
  coolTime: number,
  remainCount: number,
  initCount: number,
  used: boolean,

  hasRemain: () => boolean,
}

export type StageSkillStatus = SkillStatus & {
  userIndex: number
  cardIndex: number
}

// a superior Effect type used for calculation
export type DetEffect = {
  efficacyType: SkillEfficacyType,
  grade: number,
  value: number,
  isInstant: boolean,
}

export type Effect = DetEffect & {
  remain: number,
  // additions
  maxGrade: number,
  include: boolean,
  id: string,
  sourceIndex: number,
  sourceSkillIndex: number,
}

export type EfficacyDetail = {
  name: string,
  description: string,
  grade: number,
  maxGrade: number,
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

export type Actable = {
  index: number,
  skills: number[],
}
