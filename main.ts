import * as fs from 'fs'
import simulate from "./index";
import { getDefaultUserCard } from './satomi/card';
import { CustomNote, TransDeck } from "./types/trans_types"

const questId = "gvg-quest-019"
const allyDeck: TransDeck = {
  name: "test deck",
  userCards: [
    { index: 1, card: getDefaultUserCard("card-kor-05-idol-00") },
    { index: 2, card: getDefaultUserCard("card-mei-05-fest-00") },
    { index: 3, card: getDefaultUserCard("card-chs-05-flow-00") },
    { index: 4, card: getDefaultUserCard("card-szk-05-prem-00") },
    { index: 5, card: getDefaultUserCard("card-mna-05-fest-00") },
  ],
}
const customNodes: CustomNote[] = [{
  ingamePos: 2,
  sequence: 13,
  privilege: "opponent",
}]
const result = simulate(questId, allyDeck, undefined, customNodes)
const jsonStr = JSON.stringify(result, undefined, 2)
fs.writeFileSync("test/result.json", jsonStr, "utf8")
const a = 1
