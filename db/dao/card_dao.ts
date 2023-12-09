import { Card, CardParameter, CardRarity } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"
import { Unpromise } from "./typeUtils";
import { getRaw, isAllInitialzed } from "./utils";

let rawCard: Card[]
let rawCardParameter: CardParameter[]
let rawCardRarity: CardRarity[]

async function initCard() {
  // if (isAllInitialzed(rawCard, rawCardParameter, rawCardRarity)) {
  //   console.debug("card already inited")
  //   return
  // }
  const results = await Promise.all([
    getRaw<Card[]>("Card"),
    getRaw<CardParameter[]>("CardParameter"),
    getRaw<CardRarity[]>("CardRarity"),
  ])
  setInitCard(results)
  return results
}

function setInitCard(data: Unpromise<ReturnType<typeof initCard>>) {
  if (data === undefined) {
    throw new Error("Initialize Card failed")
  }
  rawCard = data[0]
  rawCardParameter = data[1]
  rawCardRarity = data[2]
}

const getAllRawCard = () => {
  return rawCard
}

const getRawCard = (
  id: string
): Card | undefined => {
  return rawCard.find(it => it.id === id)
    ?? logIdNotFound("SkillTarget", id)
}

const getRawCardParameters = (
  id: string
): CardParameter[] => {
  return rawCardParameter.filter(it => it.id === id)
}

const getRawCardRarity = (
  rarity: number
): CardRarity => {
  return rawCardRarity.find(it => it.rarity === rarity)!  // FIXME: potential error
}

export {
  getRawCard,
  getRawCardParameters,
  getRawCardRarity,
  getAllRawCard,
  initCard,
  setInitCard,
}
