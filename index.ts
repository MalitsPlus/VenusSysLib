import { Concert } from "./concert/concert";
import { getQuest } from "./db/repository/quest_repository";
import { getLiveDeck } from "./satomi/deck";
import { getLive } from "./satomi/live";
import { Live } from "./types/concert_types";
import { CustomNote, TransDeck } from "./types/trans_types";

export default function simulate(
  questId: string,
  transDeck: TransDeck,
  transOpntDeck?: TransDeck,
  customNodes?: CustomNote[],
): Live | string {
  let quest = getQuest(questId)
  if (!quest) {
    return "Cannot find the specified quest."
  }
  let liveDeck = getLiveDeck(transDeck, transOpntDeck)
  let live = getLive(quest, liveDeck, liveDeck.isBattle, customNodes)
  new Concert(live).go()
  return live
}
