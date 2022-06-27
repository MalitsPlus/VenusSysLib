import {
  cardParameter,
  cardRarity,
} from "../data/master"

export function calcParam(
  paramId: string,
  level: number,
  permil: number,
  rarity: number
): number {
  let param = cardParameter.find(it => it.level === level && it.id === paramId)
  let rarityBonus = cardRarity.find(it => it.rarity === rarity)
  return Math.floor(
    Math.floor(+param.value * permil / 1000)
    * rarityBonus.parameterBonusPermil / 1000
  )
}

export function calcStamina(
  paramId: string,
  level: number,
  rarity: number
): number {
  let param = cardParameter.find(it => it.level === level && it.id === paramId)
  let rarityBonus = cardRarity.find(it => it.rarity === rarity)
  return Math.floor(
    +param.value * rarityBonus.parameterBonusPermil / 1000
  )
}
