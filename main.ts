import * as fs from 'fs'
import simulate from "./index";
import { getDefaultUserCard } from './satomi/card';
import { CustomNote, TransDeck } from "./types/trans_types"

const questId = "marathon-raid-23-0128-quest-4"
const allyDeck: TransDeck = {
  name: "test deck",
  userCards: [
    { index: 1, card: getDefaultUserCard("card-rei-05-rock-00") },
    { index: 2, card: getDefaultUserCard("card-mna-05-vlnt-00") },
    { index: 3, card: getDefaultUserCard("card-rei-05-fest-00") },
    { index: 4, card: getDefaultUserCard("card-ai-05-tact-00") },
    { index: 5, card: getDefaultUserCard("card-ai-05-mizg-01") },
  ],
}
const customNodes: CustomNote[] = [{
  ingamePos: 2,
  sequence: 13,
  privilege: "opponent",
}]
const result = simulate(questId, allyDeck, undefined, undefined)
const jsonStr = JSON.stringify(result, undefined, 2)
fs.writeFileSync("test/result.json", jsonStr, "utf8")
const a = 1
