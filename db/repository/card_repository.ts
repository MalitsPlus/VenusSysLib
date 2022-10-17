import { CardParameter, CardRarity } from "../../types/proto/proto_master";
import { WapCard } from "../../types/wap/card_waps";
import { getRawCardParameters, getRawCardRarity } from "../dao/card_dao";
import { getWapCard } from "../wrapper/card_wrapper";

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
