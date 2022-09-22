import { v4 as uuidv4 } from "uuid"
import {
  UserCard,
  UserDeck,
} from "../types/user_types"
import {
  getCard,
  getCardParameter,
  getCardRarity,
} from "../data/wrapper_data"
import {
  calcParam,
} from "./calc_utils"
import {
  getCardInfo,
  getMental,
  getTechnique,
} from "../settings/user_settings"


export function newUserCard(
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
  let param = getCardParameter(card.cardParameterId, level)
  let rarityBonusPermil = getCardRarity(rarity).parameterBonusPermil
  let userCard: UserCard = {
    ...card,
    level: level,
    rarity: rarity,
    vocal: calcParam(+param.value, card.vocalRatioPermil, rarityBonusPermil),
    dance: calcParam(+param.value, card.danceRatioPermil, rarityBonusPermil),
    visual: calcParam(+param.value, card.visualRatioPermil, rarityBonusPermil),
    stamina: calcParam(+param.staminaValue, card.staminaRatioPermil, rarityBonusPermil),
    mental: mental,
    technique: technique,
    skillLevel1: skillLevel1,
    skillLevel2: skillLevel2,
    skillLevel3: skillLevel3,
  }
  return userCard
}

export function newUserDeck(
  cards: {
    index: number
    cardId: string
    level: number
    rarity: number
    skillLevel1: number
    skillLevel2: number
    skillLevel3: number
    isArbitrary: boolean
    vocal: number
    dance: number
    visual: number
    stamina: number
    mental: number
    technique: number
  }[],
  name?: string
): UserDeck {
  if (name === undefined) {
    name = "New Deck"
  }
  let deckId: string = uuidv4()
  let _userCards: { index: number, userCard: UserCard }[] = []
  cards.forEach(({ index, cardId }) => {
    _userCards.push({
      index: index,
      userCard: newUserCard(cardId),
    })
  })
  let deck: UserDeck = {
    id: deckId,
    deckName: name,
    userCards: _userCards
  }
  return deck
}
