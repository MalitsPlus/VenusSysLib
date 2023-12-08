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
  const quest = getQuest(questId)
  if (!quest) {
    return "Cannot find the specified quest."
  }
  const liveDeck = getLiveDeck(transDeck, transOpntDeck)
  const live = getLive(quest, liveDeck, liveDeck.isBattle, customNodes)
  new Concert(live).go()
  return live
}

export { initApi as init } from "./db/dao/api";
export { initCard, setInitCard } from "./db/dao/card_dao"
export { initSkill, setInitSkill } from "./db/dao/skill_dao"
export { initCharacter, setInitCharacter } from "./db/dao/character_dao"
export { initSetting, setInitSetting } from "./db/dao/setting_dao"
export { initQuest, setInitQuest } from "./db/dao/quest_dao"
