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
  charts: Chart[],
  snapshot: Chart[],
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

  getCardStatus: (this: Chart, index: number) => CardStatus | undefined,
  getUserStatus: (this: Chart, index: number) => UserStatus | undefined,
  getStageStatus: (this: Chart, cardIndex: number, skillIndex: number) => StageSkillStatus | undefined,
}

export type CardStatus = {
  readonly cardIndex: number,
  readonly deckVocal: number,
  readonly deckDance: number,
  readonly deckVisual: number,
  vocal: number,
  dance: number,
  visual: number,
  stamina: number,
  technique: number,
  mental: number,
  skillStatuses: SkillStatus[],
  effects: Effect[],

  getSkillStatus: (this: CardStatus, index: number) => SkillStatus,
  /**
   * Get all specified type `Effect`s in this CardStatus.  
   * By default zero-remaining effects will be ignored.
   */
  getEffects: (this: CardStatus, type: SkillEfficacyType, exceptUnincluded?: boolean, needZeroRemain?: boolean) => Effect[],
  /**
   * Get sum of specified type effect grades.  
   * If this CardStatus doesn't possess the effect, 0 will be returned.
   */
  getEffectSumGrade: (this: CardStatus, type: SkillEfficacyType, exceptUnincluded?: boolean, needZeroRemain?: boolean) => [number, number[]],
  /**
   * Get sum of specified type effect grade.  
   * If the grade exceeds maxGrade, maxGrade will be returned.  
   * 🚨CAUTION: If given `type` is not belong to `StrengthList`,
   * maxGrade exceeding check will not be performed and sumGrade 
   * will be returned instead.
   */
  getEffectSumOrMaxGrade: (this: CardStatus, type: SkillEfficacyType, exceptUnincluded?: boolean, needZeroRemain?: boolean) => [number, number[]],
  /**
   * Get and calculate effect value of specified type.  
   * If the grade exceeds maxGrade, maxGrade will be used to calculate.  
   * If the type is not belong to `StrengthList`, always returns 0.
   */
  getEffectValue: (this: CardStatus, type: SkillEfficacyType, exceptUnincluded: boolean, needZeroRemain?: boolean) => number,
  /**
   * Apply all attribute-related effects, calculate sum of their permils, then return that sum.  
   * Note exceeding grades will be excluded.
   */
  getBuffedPermil: (this: CardStatus, type: "dance" | "vocal" | "visual", exceptUnincluded: boolean, needZeroRemain?: boolean) => number,
  /**
   * Refreshes property of given `type` in this `CardStatus`.
   * If efficacy's grade reaches its maxGrade, exceeding grades will be ignored.
   */
  refreshParam: (this: CardStatus, type: "dance" | "vocal" | "visual") => void,
  refreshAllParam: (this: CardStatus) => void,
  removeEffect: (this: CardStatus, effId: string) => void,
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

  hasTimes: () => boolean,
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
  ajusted?: boolean,
  migrated?: boolean,
  strengthenValue?: number,
  strengthenInclude?: boolean,
  lengthenValue?: number,
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
