import { UserStatus, CardStatus, SkillStatus, StageSkillStatus } from "../../types/concert_types"
import { MusicChartType, LiveAbilityType } from "../../types/proto/proto_enum"
import { getCardStatusByIndex } from "../../utils/chart_utils"
import { Concert } from "../concert"

export default function init(this: Concert) {
  this.migratedEffs = []
  this.previous = {
    chartType: MusicChartType.Unknown,
    sequence: 0,
    actPosition: 0,
    cardStatuses: this.initCardStatus(),
    userStatuses: this.initUserStatus(),
    stageSkillStatuses: this.initStageSkillStatus(),
    getCardStatus: getCardStatusByIndex
  }
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
  return this.live.liveDeck.liveCards.map(card => ({
    cardIndex: card.index,
    vocal: card.liveCard.deckVocal,
    dance: card.liveCard.deckDance,
    visual: card.liveCard.visual,
    stamina: card.liveCard.stamina,
    technique: card.liveCard.technique,
    mental: card.liveCard.mental,
    skillStatuses: this.initSkillStatus(card.index),
    effects: [],
  }))
}

export function initSkillStatus(this: Concert, index: number): SkillStatus[] {
  return this.live.liveDeck.liveCards
    .find(x => x.index === index)!
    .liveCard.skills.map(skill => ({
      skillIndex: skill.index,
      coolTime: skill.skill.coolTime,
      remainCount: skill.skill.limitCount,
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
    skillIndex: 200 + index * 2,
    coolTime: ability.skill.coolTime,
    remainCount: ability.skill.limitCount,
    userIndex: 1,
  }))
  if (this.live.isBattle) {
    bonuses.forEach((ability, index) => {
      statuses.push({
        skillIndex: 200 + index * 2 + 1,
        coolTime: ability.skill.coolTime,
        remainCount: ability.skill.limitCount,
        userIndex: 2,
      })
    })
  }
  return statuses
}
