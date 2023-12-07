import { initApi } from "../db/dao/api";
import simulate, { initCard, initCharacter, initQuest, initSetting, initSkill } from "../index";
import { getDefaultUserCard } from '../satomi/card';
import { CustomNote, TransDeck } from "../types/trans_types";
import dotenv from "dotenv"

async function test() {
  dotenv.config()
  if (!process.env.DB_URL || !process.env.DB_SKR) {
    console.error("DB_URL and DB_SKR must be given.")
    return
  }

  initApi({
    url: process.env.DB_URL,
    sakura: process.env.DB_SKR,
  })

  await Promise.all([
    initCard(),
    initSkill(),
    initCharacter(),
    initSetting(),
    initQuest(),
  ])

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
}

test()
