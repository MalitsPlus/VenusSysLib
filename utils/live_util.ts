import {
  Live,
  LiveCard,
  LiveDeck,
} from "../types/live_types"
import {
  UserCard,
  UserDeck,
  Equipment,
} from "../types/user_types"
import { WapQuest } from "../types/wrapper_types";

export function newLiveCard(
  userCard: UserCard,
  equipment?: Equipment
): LiveCard {
  // TODO: implement equipments
  let vocal = userCard.vocal
  let dance = userCard.dance
  let visual = userCard.visual
  let stamina = userCard.stamina
  let mental = userCard.mental
  let technique = userCard.technique
  return {
    ...userCard,
    deckVocal: vocal,
    deckDance: dance,
    deckVisual: visual,
    deckStamina: stamina,
    deckMental: mental,
    deckTechnique: technique,
  }
}

export function newLiveDeck(userDeck: UserDeck, opponentDeck?: UserDeck): LiveDeck {

  let liveCards = userDeck.userCards.map(it => ({
    index: it.index,
    liveCard: newLiveCard(it.userCard)
  }))

  if (opponentDeck) {
    opponentDeck.userCards.forEach(({ index, userCard }) => {
      liveCards.push({
        index: index + 5, // ⚠ potential invalidation 
        liveCard: newLiveCard(userCard)
      })
    })
  }

  let liveEquipments: {
    index: number,
    equipment: Equipment,
  }[] = []

  if (userDeck.userEquipments) {
    userDeck.userEquipments.forEach(({ index, equipment }) => {
      liveEquipments?.push({
        index: index, // ⚠ potential invalidation 
        equipment: equipment
      })
    })
  }
  if (opponentDeck) {
    opponentDeck?.userEquipments?.forEach(({ index, equipment }) => {
      liveEquipments.push({
        index: index + 5, // ⚠ potential invalidation 
        equipment: equipment
      })
    })
  }

  let liveDeck: LiveDeck = {
    idAlly: userDeck.id,
    deckNameAlly: userDeck.deckName,
    idOppt: opponentDeck?.id,
    deckNameOppt: opponentDeck?.deckName,
    liveCards: liveCards,
    liveEquipments: liveEquipments,
  }
  return liveDeck
}

export function newLive(quest: WapQuest, deck: LiveDeck, isBattle: boolean): Live {
  return {
    charts: [],
    quest: quest,
    liveDeck: deck,
    isBattle: isBattle,
  }
}