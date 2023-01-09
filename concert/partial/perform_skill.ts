import { LiveCard } from "../../types/card_types";
import { Actable, ActSkill, CardStatus, SkillStatus } from "../../types/concert_types";
import { SkillEfficacyType } from "../../types/proto/proto_enum";
import { WapSkillLevel } from "../../types/wap/skill_waps";
import * as calc from "../../utils/calc_utils";
import { getCritical } from "../../utils/chart_utils";
import { Concert } from "../concert";
import { getTargetIndexes } from "../target_proc";
import { getTriggeredIndexes } from "../trigger_proc";
import { ComboType } from "./handle_combo";

/**
 * Performs A, SP skill and return a flag refers to performing info.
 * @param this 
 * @param actables 
 * @returns A number which refers to which side performed this skill, or Zero(failed).
 */
export function performASPSkill(
  this: Concert,
  actables: Actable[],
): ComboType {
  if (actables.length) {
    if (actables[0].skills.length) {
      const { index, skills } = actables[0]
      const card = this.liveDeck.getCard(index)
      const skill = card.getSkill(skills[0])
      const cardStat = this.current.getCardStatus(index)!
      const skillStat = cardStat.getSkillStatus(skills[0])

      const actSkill = this._performSkill(
        index,
        skills[0],
        skill,
        skillStat,
        index > 5,
        false,
        card,
        cardStat,
      )
      if (actSkill) {
        this.current.actSkill = actSkill
        skillStat.used = true
        return index > 5 ? ComboType.AddOpponent : ComboType.AddAlly
      }
    }
  }
  // skill failed
  const isAllyBuffed = this.current
    .getCardStatus(this.current.actPosition)!
    .getEffects(SkillEfficacyType.ComboContinuation, true).length > 0
  if (isAllyBuffed) {
    return ComboType.KeepAllyBreakOpponent
  }
  // FIXME(delayed): keep opponent
  return ComboType.Break
}

export function performPSkill( 
  this: Concert,
  cardIndex: number,
  skillIndex: number,
  isBeforeBeat: boolean,
): boolean {
  const card = this.liveDeck.getCard(cardIndex)
  const skill = card.getSkill(skillIndex)
  const cardStat = this.current.getCardStatus(cardIndex)!
  const skillStat = cardStat.getSkillStatus(skillIndex)

  const actSkill = this._performSkill(
    cardIndex,
    skillIndex,
    skill,
    skillStat,
    cardIndex > 5,
    isBeforeBeat,
    card,
    cardStat,
  )

  if (actSkill) {
    this.current.actPSkills.push(actSkill)
    skillStat.used = true
    return true
  }
  return false
}

export function performStageSkill(
  this: Concert,
  cardIndex: number,
  skillIndex: number,
  isBeforeBeat: boolean,
): boolean {
  const skillStat = this.current.getStageStatus(cardIndex, skillIndex)!
  const actSkill = this._performSkill(
    skillStat.cardIndex,
    skillStat.skillIndex,
    this.live.quest.liveBonuses![skillIndex].skill,
    skillStat,
    cardIndex % 2 === 0,
    isBeforeBeat,
  )
  if (actSkill) {
    this.current.actPSkills.push(actSkill)
    skillStat.used = true
    return true
  }
  return false
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
): ActSkill | undefined {

  // rolling
  if (!calc.roll(skill.probabilityPermil)) {
    return
  }

  // check stamina 
  let stamina = skill.stamina
  if (card && cardStat) {
    stamina = calc.calcSkillStaminaConsumption(
      skill,
      card,
      cardStat,
      this.live.quest.skillStaminaWeightPermil
    )
    if (cardStat.stamina < stamina) {
      return // stamina shortages
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
    return // unhandled triggers
  }
  if (triggeredIndexes.length === 0) {
    return // not triggered
  }

  // SKILL ACTIVATION COMFIRMED
  this.order += 1
  // critical or not 
  const isCritical = getCritical(
    cardStat?.technique ?? 0, this.live.quest.difficultyLevel
  )
  // calculate stamina consumption
  if (card && cardStat) {
    stamina = calc.calcSkillStaminaConsumption(
      skill,
      card,
      cardStat,
      this.live.quest.skillStaminaWeightPermil
    )
    // consume stamina
    cardStat.stamina -= stamina
  }

  // create a new ActSkill
  const actSkill: ActSkill = {
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
      targetIndexes ?? [],
      cardIndex,
      skillIndex,
      isBeforeBeat,
    )

    actSkill.details.push({
      name: detail.efficacy.name,
      description: detail.efficacy.description,
      grade: grade,
      maxGrade: maxGrade,
      efficacyIndex: index,
      efficacyType: detail.efficacy.type,
      targetIndexes: targetIndexes,
      value: value,
    })

    // set SkillStatus
    skillStat.coolTime = skill.coolTime
    skillStat.remainCount && skillStat.remainCount--
  }
  return actSkill
}
