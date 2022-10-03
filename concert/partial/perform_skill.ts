import { Actable, ActSkill, CardStatus, SkillStatus, StageSkillStatus } from "../../types/concert_types";
import { WapLiveAbility, WapSkillLevel } from "../../types/wap/skill_waps";
import { Concert } from "../concert";
import * as calc from "../../utils/calc_utils";
import { LiveCard } from "../../types/card_types"
import { SkillEfficacyType } from "../../types/proto/proto_enum";
import { getTriggeredIndexes } from "../trigger_proc";
import { getCritical } from "../../utils/chart_utils";
import { getTargetIndexes } from "../target_proc";
import { implementEfficacy } from "./impl_efficacy";

export function performASPSkill(
  this: Concert,
  actables: Actable[],
): boolean {
  // skill failed
  if (actables.length === 0) {
    return false
  }
  if (actables[0].skills.length === 0) {
    return false
  }

  const { index, skills } = actables[0]
  // well, despite the name, it is totally can be reuse here
  return this.performPSkill(index, skills[0], false)
}

export function performPSkill(
  this: Concert,
  cardIndex: number,
  skillIndex: number,
  isBeforeBeat: boolean,
): boolean {
  const card = this.liveDeck.getCard(cardIndex)
  const skill = card.getSkill(skillIndex)
  const cardStat = this.current.getCardStatus(cardIndex)
  const skillStat = cardStat.getSkillStatus(skillIndex)

  const success = this._performSkill()
}

export function performStageSkill(
  this: Concert,
  liveAbility: WapLiveAbility,
  skillStat: StageSkillStatus,
  isOpponentSide: boolean,
  isBeforeBeat: boolean,
): boolean {

}

export function _performSkill(
  this: Concert,
  cardIndex: number,
  skillIndex: number,
  skill: WapSkillLevel,
  skillStat: SkillStatus,
  isOpponentSide: boolean,
  isBeforeBeat: boolean,
  card?: LiveCard,
  cardStat?: CardStatus,
): boolean {

  // rolling
  if (!calc.roll(skill.probabilityPermil)) {
    return false
  }

  // check stamina 
  let stamina = skill.stamina
  if (card && cardStat) {
    stamina = calc.calcStaminaConsumption(
      skill,
      card,
      cardStat,
      this.live.quest.skillStaminaWeightPermil
    )
    if (cardStat.stamina < stamina) {
      return false // stamina shortages
    }
  }

  // get triggered indexes
  const triggeredIndexes = getTriggeredIndexes(
    skill.trigger,
    skill.categoryType,
    skillStat,
    this.live,
    this.current,
    cardIndex,
    isOpponentSide,
    this.actables,
    cardStat,
    card
  )

  if (!triggeredIndexes) {
    // TODO: notify new triggers
    console.error("New trigger hasn't been implemented.")
    return false // unhandled triggers
  }
  if (triggeredIndexes.length === 0) {
    return false // not triggered
  }

  // SKILL ACTIVATION COMFIRMED
  this.order += 1
  // critical or not 
  const isCritical = getCritical(
    cardStat?.technique ?? 0, this.live.quest.difficultyLevel
  )
  // calculate stamina consumption
  if (card && cardStat) {
    stamina = calc.calcStaminaConsumption(
      skill,
      card,
      cardStat,
      this.live.quest.skillStaminaWeightPermil
    )
  }

  // create a new ActSkill
  let actPSkill: ActSkill = {
    cardIndex: cardIndex,
    skillIndex: skillIndex,
    order: this.order,
    stamina: stamina,
    details: [],
    isCritical: isCritical,
    isComboBreak: false,
  }

  for (const [index, detail] of skill.wapSkillDetails.entries()) {
    const detailTriggeredIndexes = getTriggeredIndexes(
      detail.trigger,
      skill.categoryType,
      skillStat,
      this.live,
      this.current,
      cardIndex,
      isOpponentSide,
      this.actables,
      cardStat,
      card
    )

    if (!detailTriggeredIndexes) {
      // TODO: notify new triggers
      console.error("New trigger hasn't been implemented.")
      continue // unhandled triggers
    }
    if (detailTriggeredIndexes.length === 0) {
      continue // not triggered
    }

    // get target indexes
    const targetIndexes = getTargetIndexes(
      detail.efficacy.skillTarget,
      skillStat,
      this.live,
      this.current,
      cardIndex,
      isOpponentSide,
      triggeredIndexes,
      detailTriggeredIndexes
    )

    // implement to CardStatus
    const { value, grade, maxGrade } = this.implementEfficacy(
      detail.efficacy,
      targetIndexes,
      cardIndex,
      skillIndex,
      isBeforeBeat,
    )

    actPSkill.details.push({
      name: detail.efficacy.name,
      description: detail.efficacy.description,
      ?grade: detail.efficacy.grade,
      ?maxGrade: detail.efficacy.maxGrade,
      efficacyIndex: index,
      efficacyType: detail.efficacy.type,
      targetIndexes: targetIndexes,
      value: ?,
    })

    // set SkillStatus
    skillStat.coolTime = skill.coolTime
    skillStat.remainCount && skillStat.remainCount--
  }
}
