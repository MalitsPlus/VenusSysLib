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

export function newLiveDeck(userDeck: UserDeck): LiveDeck {
  let liveCards: {
    index: number,
    liveCard: LiveCard,
  }[] = []
  userDeck.userCards.forEach(({ index, userCard }) => {
    liveCards.push({
      index: index,
      liveCard: newLiveCard(userCard)
    })
  })
  let liveDeck: LiveDeck = {
    id: userDeck.id,
    deckName: userDeck.deckName,
    liveCards: liveCards,
    ...userDeck.userEquipments,
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
