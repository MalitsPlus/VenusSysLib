import { Skill } from "./proto/proto_master"
import rawSkill from "./database/Skill.json"
import {
  getCards,
  getQuests,
} from "./master"
import {
  UserCard,
} from "./types/user_types"

const card = getCards()[0]
const quest = getQuests()[0]
const userCard: UserCard = {
  ...card,
  level: 170,
  rarity: 9,
  vocal: 38000,
  dance: 26000,
  visual: 20000,
  stamina: 3000,
  mental: 100,
  technique: 100,
  skillLevel1: 4,
  skillLevel2: 4,
  skillLevel3: 2,
}
let a = 1
