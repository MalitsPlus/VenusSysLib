import { LiveDeck } from "../types/card_types";
import { Live } from "../types/concert_types";
import { WapQuest } from "../types/wap/quest_waps";

export function getLive(
  quest: WapQuest,
  deck: LiveDeck,
  isBattle: boolean
): Live {
  // TODO: implement exSkills
  return {
    isBattle: isBattle,
    quest: quest,
    liveDeck: deck,
    charts: [],
    snapshot: [],
  }
}
