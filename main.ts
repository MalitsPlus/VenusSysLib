import * as fs from 'fs'
import simulate from "./index";
import { TransDeck, TransCard } from "./types/trans_types"

const questId = "qt-area-1-008"
const allyDeck: TransDeck = {
  name: "test deck",
  transCards: [
    geneTestCard("card-smr-05-idol-00", 1),
    geneTestCard("card-rui-03-schl-00", 2),
    geneTestCard("card-ai-05-tact-00", 3),
    geneTestCard("card-chs-05-chsk-00", 4),
    geneTestCard("card-ngs-05-idol-00", 5),
  ]
}

const result = simulate(questId, allyDeck)
const jsonStr = JSON.stringify(result, undefined, 2)
fs.writeFileSync("test/result.json", jsonStr, "utf8")
const a = 1




function geneTestCard(
  id: string,
  index: number
) {
  return {
    index: index,
    card: {
      index: index,
      cardId: id,
      level: 190,
      rarity: 9,
      skillLevel1: 4,
      skillLevel2: 4,
      skillLevel3: 2,
      isArbitrary: false,
      vocal: 0,
      dance: 0,
      visual: 0,
      stamina: 7620,
      mental: 4120,
      technique: 4060,
    }
  }
}