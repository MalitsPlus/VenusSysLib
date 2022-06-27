import {
  getCard,
} from "./data/wrapper_data"
import { setting } from "./settings/user_settings"
import {
  UserCard,
} from "./types/user_types"
import {
  getUserCard,
} from "./utils/card_utils"

const card = getCard("card-ai-05-idol-00")
const userCard: UserCard = getUserCard("card-ai-05-idol-00")
let a = 1
