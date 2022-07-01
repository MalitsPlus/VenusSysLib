import { EfficacyValue } from "./concert/eff_grades"
import {
  getCard,
  getQuest,
} from "./data/wrapper_data"
import { setting } from "./settings/user_settings"
import { SkillEfficacyType } from "./types/proto/proto_enum"
import {
  UserCard,
} from "./types/user_types"
import { newLive, newLiveDeck } from "./utils/live_util"
import {
  newUserCard,
  newUserDeck,
} from "./utils/user_utils"

const userCard: UserCard = newUserCard("card-ai-05-idol-00")
let deckInfo = [
  {
    index: 1,
    cardId: "card-ai-04-casl-00",
  },
  {
    index: 2,
    cardId: "card-ai-05-kait-00",
  },
  {
    index: 3,
    cardId: "card-ai-05-vlnt-00",
  },
  {
    index: 4,
    cardId: "card-aoi-04-casl-00",
  },
  {
    index: 5,
    cardId: "card-aoi-05-kait-00",
  },
]
// on deck save
const userDeck = newUserDeck(deckInfo)
// on simu click
const liveDeck = newLiveDeck(userDeck)
const quest = getQuest("qt-area-1-010")
const live = newLive(quest, liveDeck, false)

type tesType = {
  val: number
}
let tes1: tesType = { val: 3 }
let tes2: tesType = undefined
var fi = 0
fi += tes1?.val ?? 2 / 100
fi += tes2?.val ?? 4 / 100

let a = 1
