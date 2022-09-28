import { getCard, getCardParam, getCardRarity } from "../db/repository/card_repository";
import { LiveCard, UserCard } from "../types/card_types";
import { TransCard } from "../types/trans_types";
import { calcParam } from "../utils/calc_utils";
import { getUserCardSkillByIndex } from "../utils/chart_utils";

export function getLiveCard(transCard: TransCard): LiveCard {
  const userCard = getUserCard(transCard)
  const {
    isArbitrary,
    vocal,
    dance,
    visual,
    stamina,
    mental,
    technique
  } = transCard
  return {
    ...userCard,
    deckVocal: isArbitrary ? vocal : userCard.vocal,
    deckDance: isArbitrary ? dance : userCard.dance,
    deckVisual: isArbitrary ? visual : userCard.visual,
    deckStamina: isArbitrary ? stamina : userCard.stamina,
    deckMental: isArbitrary ? mental : userCard.mental,
    deckTechnique: isArbitrary ? technique : userCard.technique,
    isArbitrary: isArbitrary,
  }
}

export const getUserCard = (
  transCard: TransCard
): UserCard => { 
  const wapCard = getCard(transCard.cardId)
  // TODO: add message?
  if (!wapCard) throw Error()
  const param = getCardParam(wapCard.cardParameterId, transCard.level)
  const rarity = getCardRarity(transCard.rarity)
  return {
    ...wapCard,
    level: transCard.level,
    rarity: transCard.rarity,
    vocal: calcParam(+param.value, wapCard.vocalRatioPermil, rarity.parameterBonusPermil),
    dance: calcParam(+param.value, wapCard.danceRatioPermil, rarity.parameterBonusPermil),
    visual: calcParam(+param.value, wapCard.visualRatioPermil, rarity.parameterBonusPermil),
    stamina: calcParam(+param.staminaValue, wapCard.staminaRatioPermil, rarity.parameterBonusPermil),
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
    getSkill: getUserCardSkillByIndex
  }
}
