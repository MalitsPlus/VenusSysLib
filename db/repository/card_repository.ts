import { CardParameter, CardRarity } from "../../types/proto/proto_master";
import { WapCard } from "../../types/wap/card_waps";
import { getAllRawCard, getRawCardParameters, getRawCardRarity } from "../dao/card_dao";
import { getWapCard } from "../wrapper/card_wrapper";

// lazy init a single card
export const getCard = (
  id: string
): WapCard | undefined => {
  return wapCardRepo[id] ?? (() => {
    const card = getWapCard(id)
    if (card) {
      wapCardRepo[id] = card
    }
    return card
  })()
}

// init all Card.
// This operation can take considerable time.
let initFlag = false
export const getAllWapCards = (): WapCard[] => {
  if (!initFlag) {
    getAllRawCard().forEach(rawCard => {
      getCard(rawCard.id)
    })
    initFlag = true
  }
  return Object.values(wapCardRepo)
}

export const getCardParameter = (
  id: string,
  level: number
): CardParameter => {
  const params = getCardParameters(id)
  return params.find(it => it.level === level)! // FIXME: potential error
}

export const getCardRarity = (
  rarity: number
): CardRarity => {
  return getRawCardRarity(rarity)
}

export const getCardParameters = (
  id: string
): CardParameter[] => {
  return cardParametersRepo[id] ?? (() => {
    const params = getRawCardParameters(id)
    if (params) {
      cardParametersRepo[id] = params
    }
    return params
  })()
}

const wapCardRepo: {
  [key: string]: WapCard
} = {}

const cardParametersRepo: {
  [key: string]: CardParameter[]
} = {}
