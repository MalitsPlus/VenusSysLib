import {
  Card,
  Skill,
  SkillDetail,
  SkillEfficacy,
  SkillLevel,
  SkillTarget,
  SkillTrigger,
} from "./proto/proto_master"
import {
  WapCard,
  WapSkill,
  WapSkillDetail,
  WapSkillEfficacy,
  WapSkillLevel,
} from "./wrapper_types"
import protoCard from "./database/Card.json"
import protoSkill from "./database/Skill.json"
import protoSkillEfficacy from "./database/SkillEfficacy.json"
import protoSkillTarget from "./database/SkillTarget.json"
import protoSkillTrigger from "./database/SkillTrigger.json"

const rawCards: Card[] = protoCard
const rawSkills: Skill[] = protoSkill
const rawSkillEfficacy: SkillEfficacy[] = protoSkillEfficacy
const rawSkillTarget: SkillTarget[] = protoSkillTarget
const rawSkillTrigger: SkillTrigger[] = protoSkillTrigger

export const getCards = (): WapCard[] => {
  let wappedCards: WapCard[] = []
  rawCards.forEach(element => {
    wappedCards.push(getWapCard(element))
  })
  return wappedCards
}

const getWapCard = (
  original: Card
): WapCard => {
  let _skill1 = getSkill(original.skillId1)
  let _skill2 = getSkill(original.skillId2)
  let _skill3 = getSkill(original.skillId3)
  return {
    ...original,
    skill1: _skill1,
    skill2: _skill2,
    skill3: _skill3,
  }
}

function getSkill(id: string): WapSkill {
  let _rawSkill = rawSkills.find(it => it.id === id)
  let wappedLevels: WapSkillLevel[] = []
  _rawSkill.levels.forEach(element => {
    let wappedLevel = getWapSkillLevel(element)
    wappedLevels.push(wappedLevel)
  })
  return {
    ..._rawSkill,
    wapSkillLevels: wappedLevels,
  }
}

const getWapSkillLevel = (
  original: SkillLevel
): WapSkillLevel => {
  let _trigger = rawSkillTrigger.find(it => it.id === original.triggerId)
  let wappedSkillDetails: WapSkillDetail[] = []
  original.skillDetails.forEach(element => {
    let wappedDetail = getWapSkillDetail(element)
    wappedSkillDetails.push(wappedDetail)
  })
  return {
    ...original,
    trigger: _trigger,
    wapSkillDetails: wappedSkillDetails,
  }
}

const getWapSkillDetail = (
  original: SkillDetail
): WapSkillDetail => {
  let _trigger = rawSkillTrigger.find(it => it.id === original.triggerId)
  let _rawEfficacy = rawSkillEfficacy.find(it => it.id === original.efficacyId)
  let _efficacy = getWapSkillEfficacy(_rawEfficacy)
  return {
    ...original,
    trigger: _trigger,
    efficacy: _efficacy
  }
}

const getWapSkillEfficacy = (
  original: SkillEfficacy
): WapSkillEfficacy => {
  let _target = rawSkillTarget.find(it => it.id === original.skillTargetId)
  return {
    ...original,
    skillTarget: _target,
  }
}
