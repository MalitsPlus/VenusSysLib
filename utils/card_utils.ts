import {
  UserCard,
} from "../types/user_types"
import {
  getCard,
} from "../data/wrapper_data"
import {
  calcParam,
  calcStamina,
} from "./calc_utils"
import {
  setting,
  getCardInfo,
  getMental,
  getTechnique,
} from "../settings/user_settings"

// export function getUserCard(id: string): void
// export function getUserCard(
//   id: string,
//   level: number,
//   rarity: number,
//   mental: number,
//   technique: number,
//   skillLevel1: number,
//   skillLevel2: number,
//   skillLevel3: number
// ): void

export function getUserCard(
  id: string,
  level?: number,
  rarity?: number,
  mental?: number,
  technique?: number,
  skillLevel1?: number,
  skillLevel2?: number,
  skillLevel3?: number
): UserCard {
  let card = getCard(id)
  if (level === undefined) {
    let cardInfo = getCardInfo(id)
    level = cardInfo.level
    rarity = cardInfo.rarity
    mental = getMental()
    technique = getTechnique()
    skillLevel1 = cardInfo.skillLevel1
    skillLevel2 = cardInfo.skillLevel2
    skillLevel3 = cardInfo.skillLevel3
  } 
  let userCard: UserCard = {
    ...card,
    level: level,
    rarity: rarity,
    vocal: calcParam(card.cardParameterId, level, card.vocalRatioPermil, rarity),
    dance: calcParam(card.cardParameterId, level, card.danceRatioPermil, rarity),
    visual: calcParam(card.cardParameterId, level, card.visualRatioPermil, rarity),
    stamina: calcStamina(card.cardParameterId, level, rarity),
    mental: mental,
    technique: technique,
    skillLevel1: skillLevel1,
    skillLevel2: skillLevel2,
    skillLevel3: skillLevel3,
  }
  return userCard
}