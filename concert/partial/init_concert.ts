import { CardStatus, SkillStatus, StageSkillStatus, UserStatus } from "../../types/concert_types"
import { LiveAbilityType, MusicChartType, SkillCategoryType } from "../../types/proto/proto_enum"
import {
  getBuffedPermil,
  getCardSkillStatus,
  getCardStatusByIndex,
  getEffectsByType,
  getEffectSumGradeByType,
  getEffectSumGradeOrMaxGradeByType,
  getEffectValue,
  getStageStatusByIndexes,
  getUserStatusByIndex,
  refreshAllParam,
  refreshParam,
  removeEffect,
  skillHasTimes
} from "../../utils/chart_utils"
import { Concert } from "../concert"

export default function init(this: Concert) {
  this.order = 0
  this.migratedEffs = []
  this.previous = {
    chartType: MusicChartType.Unknown,
    sequence: 0,
    actPosition: 0,
    originalActPosition: 0,
    actPSkills: [],
    cardStatuses: this.initCardStatus(),
    userStatuses: this.initUserStatus(),
    stageSkillStatuses: this.initStageSkillStatus(),
    getCardStatus: getCardStatusByIndex,
    getUserStatus: getUserStatusByIndex,
    getStageStatus: getStageStatusByIndexes,
  }
  // initialize pSkills list and descly order them by mental
  this.pSkills = this.liveDeck.liveCards.flatMap(card => {
    return card.liveCard.skills.filter(x =>
      x.skill.categoryType === SkillCategoryType.Passive
    ).map(x => ({
      cardIndex: card.index,
      skillIndex: x.index,
    }))
  }).sort((a, b) => 
    this.liveDeck.getCard(b.cardIndex).mental - this.liveDeck.getCard(a.cardIndex).mental
    || a.cardIndex - b.cardIndex
    || a.skillIndex - b.skillIndex
  )
}

export function initUserStatus(this: Concert): UserStatus[] {
  const user: UserStatus[] = [{
    userIndex: 1,
    combo: 0,
  }]
  if (this.live.isBattle) {
    user.push({
      userIndex: 2,
      combo: 0,
    })
  }
  return user
}

export function initCardStatus(this: Concert): CardStatus[] {
  return this.liveDeck.liveCards.map(card => ({
    cardIndex: card.index,
    deckVocal: card.liveCard.deckVocal,
    deckDance: card.liveCard.deckDance,
    deckVisual: card.liveCard.deckVisual,
    vocal: card.liveCard.deckVocal,
    dance: card.liveCard.deckDance,
    visual: card.liveCard.deckVisual,
    stamina: card.liveCard.deckStamina,
    technique: card.liveCard.deckTechnique,
    mental: card.liveCard.deckMental,
    skillStatuses: this.initSkillStatus(card.index),
    effects: [],
    getSkillStatus: getCardSkillStatus,
    getEffects: getEffectsByType,
    getEffectSumGrade: getEffectSumGradeByType,
    getEffectSumOrMaxGrade: getEffectSumGradeOrMaxGradeByType,
    getEffectValue: getEffectValue,
    getBuffedPermil: getBuffedPermil,
    refreshParam: refreshParam,
    refreshAllParam: refreshAllParam,
    removeEffect: removeEffect,
  }))
}

export function initSkillStatus(this: Concert, index: number): SkillStatus[] {
  return this.liveDeck.liveCards
    .find(x => x.index === index)!
    .liveCard.skills.map(skill => ({
      skillIndex: skill.index,
      coolTime: 0,
      remainCount: skill.skill.limitCount,
      initCount: skill.skill.limitCount,
      used: false,
      hasTimes: skillHasTimes,
    }))
}

export function initStageSkillStatus(this: Concert): StageSkillStatus[] | undefined {
  const bonuses = this.live.quest.liveBonuses?.filter(bonus =>
    bonus.type === LiveAbilityType.PassiveSkill
  )
  if (!bonuses || bonuses.length === 0) {
    return undefined
  }
  const statuses: StageSkillStatus[] = bonuses.map((ability, index) => ({
    skillIndex: index,
    cardIndex: 100 + 1,
    coolTime: 0,
    remainCount: ability.skill.limitCount,
    initCount: ability.skill.limitCount,
    userIndex: 1,
    used: false,
    hasTimes: skillHasTimes,
  }))
  if (this.live.isBattle) {
    bonuses.forEach((ability, index) => {
      statuses.push({
        skillIndex: index,
        cardIndex: 100 + 2,
        coolTime: 0,
        remainCount: ability.skill.limitCount,
        initCount: ability.skill.limitCount,
        userIndex: 2,
        used: false,
        hasTimes: skillHasTimes,
      })
    })
  }
  return statuses
}
