import { gameSetting } from "../data/wrapper_data";
import {
  ActSkill,
  CardStatus,
  Chart, EfficacyDetail, Live, LiveCard, SkillStatus
} from "../types/live_types";
import { SkillEfficacyType as ef } from "../types/proto/proto_enum";
import { SkillLevel } from "../types/proto/proto_master";
import { WapSkill, WapSkillDetail } from "../types/wrapper_types";
import * as chut from "../utils/chart_utils";
import { EasyAttachList, ParamChangingList } from "./consts/efficacy_list";
import { EfficacyValue } from "./consts/eff_grades";
import { getEffLastNum, getFixStaminaRecoveryValue } from "./efficacy_analyze";

function doPerform() {

}

export function performP(
  actSkill: ActSkill,
  current: Chart,
  live: Live,
  card: LiveCard,
  cardStatus: CardStatus,
  skill: WapSkill,
  skillLevel: SkillLevel,
  skillDetail: WapSkillDetail,
  detailIndex: number,
  skillStatus: SkillStatus,
  casterPosition: number,
  isOpponent: boolean,
  triggeredIndexes: number[],
  targetIndexes: number[],
) {
  
}

export function performASP(
  actSkill: ActSkill,
  current: Chart,
  live: Live,
  card: LiveCard,
  cardStatus: CardStatus,
  skill: WapSkill,
  skillLevel: SkillLevel,
  skillDetail: WapSkillDetail,
  detailIndex: number,
  skillStatus: SkillStatus,
  casterPosition: number,
  isOpponent: boolean,
  triggeredIndexes: number[],
  targetIndexes: number[],
) {
  // TODO: complete actSkill(1. score 2. details.value)
  // change current.cardStatuses

  let efficacyDetail: EfficacyDetail = {
    efficacyIndex: detailIndex,
    efficacyType: skillDetail.efficacy.type,
    targetIndexes: targetIndexes,
  }

  // ignore score skills at this point
  if (gameSetting.skillEfficacyTypeScoreList.includes(
    skillDetail.efficacy.type)) {
    actSkill.score = 0
    efficacyDetail.value = 0
    actSkill.details.push(efficacyDetail)
    return
  }

  // lasting skills
  var lasting = 0
  if ([...EasyAttachList, ...ParamChangingList].includes(skillDetail.efficacy.type)) {
    lasting = getEffLastNum(skillDetail.efficacyId) ?? 0
  }
  targetIndexes.forEach(target => {
    let targetStatus = chut.getCardStatusByIndex(target, current)
    THINK IT AGAIN 
    if (!targetStatus.effects) {
      targetStatus.effects = []
    }
    targetStatus.effects.push({
      efficacyType: skillDetail.efficacy.type,
      grade: skillDetail.efficacy.grade,
      id: make or load uuid,
      remain: lasting,
      include: if new then false if inherit from previous turn then true,
      isInstant: false,
      sourceIndex: casterPosition,
      sourceSkillIndex: actSkill.cardIndex,
      value: 0, // TODO: implement actual values
    })
  })

  switch (skillDetail.efficacy.type) {
    case ef.StaminaRecovery: {
      console.error("EfficacyType 'StaminaRecovery' has not been implemented.")
      break
    }
    case ef.FixStaminaRecovery: {
      let val = getFixStaminaRecoveryValue(skillDetail.efficacyId)
      targetIndexes.forEach(target => {
        chut.getCardStatusByIndex(target, current).stamina += val ?? 0
      })
      break
    }
      
  }

  // note considering all buffs
  if (ParamChangingList.includes(skillDetail.efficacy.type)) {

  }
}
