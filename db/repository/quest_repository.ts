import { WapQuest } from "../../types/wap/quest_waps";
import { getWapQuest } from "../wrapper/quest_wrapper";

export const getQuest = (
  id: string
): WapQuest | undefined => {
  return wapQuestRepo[id] ?? (() => {
    const quest = getWapQuest(id)
    if (quest) {
      wapQuestRepo[id] = quest
    }
    return quest
  })()
}

const wapQuestRepo: {
  [key: string]: WapQuest
} = {}