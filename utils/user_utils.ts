import { v4 as uuidv4 } from "uuid"
import {
  UserCard,
  UserDeck,
} from "../types/user_types"
import {
  getCard,
} from "../data/wrapper_data"
import {
  calcParam,
  calcStamina,
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
  let userCard: UserCard = {
    ...card,
    level: level,
    rarity: rarity,
    vocal: calcParam(card.cardParameterId, level, card.vocalRatioPermil, rarity),
    dance: calcParam(card.cardParameterId, level, card.danceRatioPermil, rarity),
    visual: calcParam(card.cardParameterId, level, card.visualRatioPermil, rarity),
    stamina: calcStamina(card.cardParameterId, level, card.staminaRatioPermil, rarity),
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
    index: number,
    cardId: string,
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
