import {
  Accessory,
  Card,
  Skill,
  SkillEfficacy,
  SkillTarget,
  SkillTrigger,
  Quest,
} from "../proto/proto_master"

import protoCard from "../database/Card.json"
import protoSkill from "../database/Skill.json"
import protoSkillEfficacy from "../database/SkillEfficacy.json"
import protoSkillTarget from "../database/SkillTarget.json"
import protoSkillTrigger from "../database/SkillTrigger.json"
import protoQuest from "../database/Quest.json"
import protoAccessory from "../database/Accessory.json"

import cardParameter from "../database/CardParameter.json"
import cardRarity from "../database/CardRarity.json"

export const rawCards: Card[] = protoCard
export const rawSkills: Skill[] = protoSkill
export const rawSkillEfficacy: SkillEfficacy[] = protoSkillEfficacy
export const rawSkillTarget: SkillTarget[] = protoSkillTarget
export const rawSkillTrigger: SkillTrigger[] = protoSkillTrigger
export const rawQuest: Quest[] = protoQuest
export const rawAccessory: Accessory[] = protoAccessory

export {
  cardParameter,
  cardRarity,
}
