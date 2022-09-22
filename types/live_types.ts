import {
  SkillEfficacyType,
  MusicChartType,
  SkillFailureType
} from "./proto/proto_enum"
import { LiveDeck } from "./wap/card_waps"
import { WapLiveBeat } from "./wap/misc_waps"
import { WapQuest } from "./wap/quest_waps"
import { WapSkill } from "./wap/skill_waps"

export type UserStatus = {
  userIndex: number,
  combo: number,
}

export type SkillStatus = {
  skillIndex: number,
  coolTime: number,
  remainCount: number,
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
  include: boolean,
  id: string,
  sourceIndex: number,
  sourceSkillIndex: number,
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

export type CardStatus = {
  cardIndex: number,
  vocal: number,
  dance: number,
  visual: number,
  stamina: number,
  technique: number,
  mental: number,
  skillStatuses: SkillStatus[],
  effects?: Effect[],
}

export type Chart = {
  chartType: MusicChartType,
  sequence: number,
  actPosition: number,
  cardStatuses: CardStatus[],
  userStatuses: UserStatus[],
  beats?: WapLiveBeat[],
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
