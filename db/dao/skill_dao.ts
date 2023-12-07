import {
  Skill, SkillEfficacy, SkillTarget,
  SkillTrigger
} from "../../types/proto/proto_master"

import { logIdNotFound } from "../../utils/console_utils"
import { getRaw, isAllInitialzed } from "./utils"

let rawSkill: Skill[]
let rawSkillTarget: SkillTarget[]
let rawSkillTrigger: SkillTrigger[]
let rawSkillEfficacy: SkillEfficacy[]


async function initSkill() {
  if (isAllInitialzed(rawSkill, rawSkillTarget, rawSkillTrigger, rawSkillEfficacy)) {
    return
  }
  const results = await Promise.all([
    getRaw<Skill[]>("Skill"),
    getRaw<SkillTarget[]>("SkillTarget"),
    getRaw<SkillTrigger[]>("SkillTrigger"),
    getRaw<SkillEfficacy[]>("SkillEfficacy"),
  ])
  rawSkill = results[0]
  rawSkillTarget = results[1]
  rawSkillTrigger = results[2]
  rawSkillEfficacy = results[3]
}

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
  initSkill,
}
