import * as fs from 'fs'
import { getRawQuests } from './db/dao/quest_dao';
import simulate from "./index";
import { getDefaultUserCard } from './satomi/card';
import { TransDeck } from "./types/trans_types"

const reg = "area-daily-002"
const xxx = getRawQuests(reg)

const questId = "qt-area-1-008"
const allyDeck: TransDeck = {
  name: "test deck",
  userCards: [
    { index: 1, card: getDefaultUserCard("card-smr-05-idol-00") },
    { index: 2, card: getDefaultUserCard("card-rui-03-schl-00") },
    { index: 3, card: getDefaultUserCard("card-ai-05-tact-00") },
    { index: 4, card: getDefaultUserCard("card-chs-05-chsk-00") },
    { index: 5, card: getDefaultUserCard("card-ngs-05-idol-00") },
  ]
}

const result = simulate(questId, allyDeck)
const jsonStr = JSON.stringify(result, undefined, 2)
fs.writeFileSync("test/result.json", jsonStr, "utf8")
const a = 1
