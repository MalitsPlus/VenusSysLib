import * as fs from 'fs'
import simulate from "./index";
import { getDefaultUserCard } from './satomi/card';
import { CustomNote, TransDeck } from "./types/trans_types"
import { getAllWapCards } from './db/repository/card_repository';
import { getAllCharas, getAllGroups } from './db/repository/chara_repository';

const questId = "gvg-quest-021"
const allyDeck: TransDeck = {
  name: "test deck",
  userCards: [
    { index: 1, card: getDefaultUserCard("card-rio-05-fest-00") },
    { index: 2, card: getDefaultUserCard("card-szk-04-casl-00") },
    { index: 3, card: getDefaultUserCard("card-ski-05-xmas-00") },
    { index: 4, card: getDefaultUserCard("card-skr-02-casl-00") },
    { index: 5, card: getDefaultUserCard("card-szk-05-prem-00") },
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

const xxx = getAllGroups()

const a = 1
