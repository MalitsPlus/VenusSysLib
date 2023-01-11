import * as fs from 'fs'
import simulate from "./index";
import { getDefaultUserCard } from './satomi/card';
import { TransDeck } from "./types/trans_types"

const questId = "qt-ex-tower-002-150"
const allyDeck: TransDeck = {
  name: "test deck",
  userCards: [
    { index: 1, card: getDefaultUserCard("card-kor-05-idol-00") },
    { index: 2, card: getDefaultUserCard("card-mei-05-fest-00") },
    { index: 3, card: getDefaultUserCard("card-ski-05-chsk-00") },
    { index: 4, card: getDefaultUserCard("card-rei-05-mizg-02") },
    { index: 5, card: getDefaultUserCard("card-mna-05-fest-00") },
  ]
}

const result = simulate(questId, allyDeck)
const jsonStr = JSON.stringify(result, undefined, 2)
fs.writeFileSync("test/result.json", jsonStr, "utf8")
const a = 1
