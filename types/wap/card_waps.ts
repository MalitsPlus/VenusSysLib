import { Equipment } from "../misc_types"
import { AttributeType } from "../proto/proto_enum"
import { Card } from "../proto/proto_master"
import { WapSkill, WapSkillLevel } from "./skill_waps"

export type WapCard = Card & {
  skill1: WapSkill
  skill2: WapSkill
  skill3: WapSkill
  attributeType: AttributeType
}
