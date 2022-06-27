import {
  getAccessories,
  getCards,
  getQuests,
} from "./wrapper"
import {
  WapCard,
} from "../types/wrapper_types"
import { QuestBase } from "../types/base_types"
import { Accessory } from "../proto/proto_master"

export const cards = getCards()
export const accessories = getAccessories()
// TODO: add event lives & venus battles & union lives
export const quests = getQuests()

export function getCard(id: string): WapCard {
  return cards.find(it => it.id === id)
}

export function getQuest(id: string): QuestBase {
  return quests.find(it => it.id === id)
}

export function getAccessory(id: string): Accessory {
  return accessories.find(it => it.id === id)
}
