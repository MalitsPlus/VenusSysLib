import * as master from "./master"
import {
  Accessory,
  Card,
  SkillDetail,
  SkillEfficacy,
  SkillLevel,
} from "../types/proto/proto_master"
import {
  WapCard,
  WapSkill,
  WapSkillDetail,
  WapSkillEfficacy,
  WapSkillLevel,
} from "../types/wrapper_types"
import {
  QuestBase,
} from "../types/base_types"
import { SkillCategoryType } from "../types/proto/proto_enum"

const getAccessories = (): Accessory[] => {
  return master.rawAccessory
}

const getQuests = (): QuestBase[] => {
  return master.rawQuest
}

const getCards = (): WapCard[] => {
  let wappedCards: WapCard[] = []
  master.rawCards.forEach(element => {
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

export function getSkill(id: string): WapSkill {
  let _rawSkill = master.rawSkills.find(it => it.id === id)
  let wappedLevels: WapSkillLevel[] = []
  _rawSkill.levels.forEach(element => {
    let wappedLevel = getWapSkillLevel(element, _rawSkill.categoryType)
    wappedLevels.push(wappedLevel)
  })
  return {
    ..._rawSkill,
    wapSkillLevels: wappedLevels,
  }
}

const getWapSkillLevel = (
  original: SkillLevel,
  type: SkillCategoryType
): WapSkillLevel => {
  let _trigger = master.rawSkillTrigger.find(it => it.id === original.triggerId)
  let wappedSkillDetails: WapSkillDetail[] = []
  original.skillDetails.forEach(element => {
    let wappedDetail = getWapSkillDetail(element)
    wappedSkillDetails.push(wappedDetail)
  })
  return {
    ...original,
    trigger: _trigger,
    wapSkillDetails: wappedSkillDetails,
    categoryType: type,
  }
}

const getWapSkillDetail = (
  original: SkillDetail
): WapSkillDetail => {
  let _trigger = master.rawSkillTrigger.find(it => it.id === original.triggerId)
  let _rawEfficacy = master.rawSkillEfficacy.find(it => it.id === original.efficacyId)
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
  let _target = master.rawSkillTarget.find(it => it.id === original.skillTargetId)
  return {
    ...original,
    skillTarget: _target,
  }
}

export {
  getAccessories,
  getQuests,
  getCards,
}
