import { LiveDeck } from "../types/card_types";
import { Live } from "../types/concert_types";
import { CustomNote } from "../types/trans_types";
import { WapQuest } from "../types/wap/quest_waps";

export function getLive(
  quest: WapQuest,
  deck: LiveDeck,
  isBattle: boolean,
  customNotes?: CustomNote[],
): Live {
  // TODO: implement exSkills
  return {
    isBattle: isBattle,
    quest: quest,
    liveDeck: deck,
    charts: [],
    snapshot: [],
    customNotes: customNotes,
  }
}
