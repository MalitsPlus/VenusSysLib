import { LiveDeck } from "../types/card_types"
import { TransDeck } from "../types/trans_types"
import { getLiveCard } from "./card"

export function getLiveDeck(
  transDeck: TransDeck,
  transOpntDeck?: TransDeck
): LiveDeck {
  const liveDeck: LiveDeck = {
    isBattle: false,
    liveCards: transDeck.transCards.map(it => ({
      index: it.index,
      liveCard: getLiveCard(it.card)
    }))
  }
  if (transOpntDeck) {
    liveDeck.isBattle = true
    transOpntDeck.transCards.forEach(it => {
      liveDeck.liveCards.push({
        index: it.index,
        liveCard: getLiveCard(it.card)
      })
    })
  }
  liveDeck.liveCards.sort((a, b) => a.index - b.index)
  return liveDeck
}
