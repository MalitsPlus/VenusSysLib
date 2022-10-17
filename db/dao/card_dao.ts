
import protoCard from "../../database/Card.json"
import protoCardParameter from "../../database/CardParameter.json"
import protoCardRarity from '../../database/CardRarity.json';
import { Card, CardParameter, CardRarity } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"

const rawCard: Card[] = protoCard
const rawCardParameter: CardParameter[] = protoCardParameter
const rawCardRarity: CardRarity[] = protoCardRarity

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
}
