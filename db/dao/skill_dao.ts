import {
    SkillTarget,
    SkillTrigger,
    SkillEfficacy,
  } from "../../types/proto/proto_master"
  
import protoSkillTarget from "../../database/SkillTarget.json"
import protoSkillTrigger from "../../database/SkillTrigger.json"
import protoSkillEfficacy from "../../database/SkillEfficacy.json"
import { logIdNotFound } from "../../utils/console_utils"

const rawSkillTarget: SkillTarget[] = protoSkillTarget
const rawSkillTrigger: SkillTrigger[] = protoSkillTrigger
const rawSkillEfficacy: SkillEfficacy[] = protoSkillEfficacy

const getRawSkillTarget = (
  id: string
): SkillTarget | undefined => {
  return rawSkillTarget.find(it => it.id === id)
    ?? logIdNotFound("SkillTarget", id)
}

const getRawSkillEfficacy = (
  id: string
): SkillEfficacy | undefined => {
  return rawSkillEfficacy.find(it => it.id === id)
    ?? logIdNotFound("SkillEfficacy", id)
}

export {
  getRawSkillTarget,
  getRawSkillEfficacy,
}