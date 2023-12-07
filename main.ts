import simulate, { initCard, initCharacter, initQuest, initSetting, initSkill } from "./index";
import { getDefaultUserCard } from './satomi/card';
import { CustomNote, TransDeck } from "./types/trans_types"
import { getAllGroups } from './db/repository/chara_repository';
import { initApi } from "./db/dao/api";
import dotenv from "dotenv"

async function main() {
  dotenv.config()
  if (!process.env.DB_URL || !process.env.DB_SKR) {
    console.error("DB_URL and DB_SKR must be given")
    return
  }

  initApi({
    url: process.env.DB_URL,
    sakura: process.env.DB_URL,
  })
  await Promise.all([
    initCard(),
    initSkill(),
    initCharacter(),
    initSetting(),
    initQuest(),
  ])

  const questId = "pvp-quest-056"
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

  const xxx = getAllGroups()
  const a = 1
}

main()
