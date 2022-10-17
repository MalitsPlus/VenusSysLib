import {
  Skill, SkillEfficacy, SkillTarget,
  SkillTrigger
} from "../../types/proto/proto_master"

import protoSkill from "../../database/Skill.json"
import protoSkillEfficacy from "../../database/SkillEfficacy.json"
import protoSkillTarget from "../../database/SkillTarget.json"
import protoSkillTrigger from "../../database/SkillTrigger.json"
import { logIdNotFound } from "../../utils/console_utils"

const rawSkill: Skill[] = protoSkill
const rawSkillTarget: SkillTarget[] = protoSkillTarget
const rawSkillTrigger: SkillTrigger[] = protoSkillTrigger
const rawSkillEfficacy: SkillEfficacy[] = protoSkillEfficacy

const getRawSkill = (
  id: string
): Skill | undefined => {
  return rawSkill.find(it => it.id === id)
    ?? logIdNotFound("Skill", id)
}

const getRawSkillTarget = (
  id: string
): SkillTarget | undefined => {
  if (!id) {
    return undefined
  }
  return rawSkillTarget.find(it => it.id === id)
    ?? logIdNotFound("SkillTarget", id)
}

const getRawSkillTrigger = (
  id: string
): SkillTrigger | undefined => {
  if (!id) {
    return undefined
  }
  return rawSkillTrigger.find(it => it.id === id)
    ?? logIdNotFound("SkillTrigger", id)
}

const getRawSkillEfficacy = (
  id: string
): SkillEfficacy | undefined => {
  return rawSkillEfficacy.find(it => it.id === id)
    ?? logIdNotFound("SkillEfficacy", id)
}   

export {
  getRawSkill,
  getRawSkillTarget,
  getRawSkillEfficacy,
  getRawSkillTrigger,
}
