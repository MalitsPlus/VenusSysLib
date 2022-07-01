import {
  CardStatus,
  Chart,
  Live,
  LiveCard,
} from "../types/live_types"
import { UserCard } from "../types/user_types"
import { WapSkill, WapSkillLevel } from "../types/wrapper_types"

export function getDeckCardByIndex(
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

export function getSkillByIndex(
  skillIndex: number,
  card?: LiveCard,
  cardIndex?: number,
  live?: Live
): WapSkill {
  if (live && cardIndex) {
    card = getDeckCardByIndex(cardIndex, live)
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
