import { QuestBase } from "../types/base_types"
import {
  Live,
  LiveCard,
  LiveDeck,
  CardStatus,
  Chart,
  SkillStatus,
} from "../types/live_types"
import { AttributeType } from "../types/proto/proto_enum"
import {
  WapSkill,
  WapSkillLevel,
} from "../types/wrapper_types"

export function getLiveCardByIndex(
  index: number,
  live: Live
): LiveCard {
  return live.liveDeck.liveCards.find(
    it => it.index === index
  ).liveCard
}

export function getCardStatusByIndex(
  index: number,
  chart: Chart
): CardStatus {
  return chart.cardStatuses.find(it => it.cardIndex === index)
}

export function getCardSkillStatus(
  cardStatus: CardStatus,
  skillIndex: number
): SkillStatus {
  return cardStatus.skillStatuses.find(it =>
    it.skillIndex === skillIndex
  )
}

export function getCardSkillStatusByIndex(
  cardIndex: number,
  skillIndex: number,
  chart: Chart
): SkillStatus {
  return getCardStatusByIndex(cardIndex, chart).skillStatuses.find(it =>
    it.skillIndex === skillIndex
  )
}

export function getSkillByIndex(
  skillIndex: number,
  card?: LiveCard,
  cardIndex?: number,
  live?: Live
): WapSkill {
  if (live && cardIndex) {
    card = getLiveCardByIndex(cardIndex, live)
  }
  if (card === undefined) {
    throw new ReferenceError("'card' is undefined.")
  }
  switch (skillIndex) {
    case 1: return card.skill1
    case 2: return card.skill2
    case 3: return card.skill3
    default: throw new Error(`Skill index can never be '${skillIndex}'.`)
  }
}

export function getSkillLevel(
  skill: WapSkill,
  level: number
): WapSkillLevel {
  return skill.wapSkillLevels.find(it => it.level === level)
}

export function getCardSkillLevel(
  skillIndex: number,
  card: LiveCard
): WapSkillLevel {
  let skill = getSkillByIndex(skillIndex, card)
  let skillLevel: number
  switch (skillIndex) {
    case 1:
      skillLevel = card.skillLevel1; break;
    case 2:
      skillLevel = card.skillLevel2; break;
    case 3:
      skillLevel = card.skillLevel3; break;
    default:
      throw new Error(`Skill index can never be '${skillIndex}'.`)
  }
  return getSkillLevel(skill, skillLevel)
}

export function getLaneAttributeByPosition(
  quest: QuestBase,
  position: number
): AttributeType {
  switch (position) {
    case 1: case 6: return quest.position1AttributeType
    case 2: case 7: return quest.position2AttributeType
    case 3: case 8: return quest.position3AttributeType
    case 4: case 9: return quest.position4AttributeType
    case 5: case 10: return quest.position5AttributeType
    default: throw TypeError(`Lane position '${position}' is invalid.`)
  }
}

export function indexIsOpponentSide(
  cardIndex: number
): boolean {
  if (cardIndex >= 5 && cardIndex <= 10) {
    return true
  }
  return false
}