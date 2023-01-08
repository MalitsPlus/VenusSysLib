import { getCard, getCardParameter, getCardParameters, getCardRarity } from "../db/repository/card_repository";
import { LiveCard, UserCard } from "../types/card_types";
import { Card } from "../types/proto/proto_master";
import { TransCard } from "../types/trans_types";
import { calcParam } from "../utils/calc_utils";
import { getUserCardSkillByIndex } from "../utils/chart_utils";

export function getLiveCard(userCard: UserCard): LiveCard {
  const {
    vocal,
    dance,
    visual,
    stamina,
    mental,
    technique
  } = userCard
  return {
    ...userCard,
    deckVocal: vocal,
    deckDance: dance,
    deckVisual: visual,
    deckStamina: stamina,
    deckMental: mental,
    deckTechnique: technique,
    getSkill: getUserCardSkillByIndex,
  }
}

export const getDefaultParam = (
  card: Card,
  attr: "dance" | "vocal" | "visual" | "stamina",
  rarity: number = 10,
  level: number = 200,
) => {
  const param = getCardParameter(card.cardParameterId, level)
  const cardRarity = getCardRarity(rarity)
  if (attr === "stamina") {
    return calcParam(+param.staminaValue, card.staminaRatioPermil, cardRarity.parameterBonusPermil)
  } else {
    return calcParam(+param.value, card[`${attr}RatioPermil`], cardRarity.parameterBonusPermil)
  }
}

export const getUserCard = (
  transCard: TransCard
): UserCard => {
  const wapCard = getCard(transCard.cardId)
  // TODO: add message?
  if (!wapCard) throw Error()
  const param = getCardParameter(wapCard.cardParameterId, transCard.level)
  const rarity = getCardRarity(transCard.rarity)
  return {
    ...wapCard,
    level: transCard.level,
    rarity: transCard.rarity,
    vocal: !!transCard.vocal ? transCard.vocal : calcParam(+param.value, wapCard.vocalRatioPermil, rarity.parameterBonusPermil),
    dance: !!transCard.dance ? transCard.dance : calcParam(+param.value, wapCard.danceRatioPermil, rarity.parameterBonusPermil),
    visual: !!transCard.visual ? transCard.visual : calcParam(+param.value, wapCard.visualRatioPermil, rarity.parameterBonusPermil),
    stamina: !!transCard.stamina ? transCard.stamina : calcParam(+param.staminaValue, wapCard.staminaRatioPermil, rarity.parameterBonusPermil),
    mental: transCard.mental,
    technique: transCard.technique,
    skillLevel1: transCard.skillLevel1,
    skillLevel2: transCard.skillLevel2,
    skillLevel3: transCard.skillLevel3,
    skills: [
      {
        index: 1,
        skill: wapCard.skill1.wapSkillLevels.find(x => x.level === transCard.skillLevel1)!
      },
      {
        index: 2,
        skill: wapCard.skill2.wapSkillLevels.find(x => x.level === transCard.skillLevel2)!
      },
      {
        index: 3,
        skill: wapCard.skill3.wapSkillLevels.find(x => x.level === transCard.skillLevel3)!
      },
    ],
  }
}

export const getDefaultUserCard = (id: string): UserCard => {
  return getUserCard(getDefaultTransCard(id))
}

const getDefaultTransCard = (id: string): TransCard => {
  return {
    cardId: id,
    level: 200,
    rarity: 10,
    skillLevel1: 4,
    skillLevel2: 4,
    skillLevel3: 2,
    mental: 5000,
    technique: 8000,
    vocal: 0,
    dance: 0,
    visual: 0,
    stamina: 0,
  }
}
