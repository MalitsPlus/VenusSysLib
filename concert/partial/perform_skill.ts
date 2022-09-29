import { Actable, CardStatus, SkillStatus, StageSkillStatus } from "../../types/concert_types";
import { WapLiveAbility, WapSkillLevel } from "../../types/wap/skill_waps";
import { Concert } from "../concert";
import * as calc from "../../utils/calc_utils";
import { LiveCard } from "../../types/card_types"
import { SkillEfficacyType } from "../../types/proto/proto_enum";

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
  // well, despite the name, it is totally can be reuse
  return performPSkill(index, skills[0])
}

export function performPSkill(
  this: Concert,
  cardIndex: number,
  skillIndex: number,
): boolean {
  const card = this.liveDeck.getCard(cardIndex)
  const skill = card.getSkill(skillIndex)
  const cardStat = this.current.getCardStatus(cardIndex)
  const skillStat = cardStat.getSkillStatus(skillIndex)

  const success = _performSkill()
}

export function performStageSkill(
  this: Concert,
  liveAbility: WapLiveAbility,
  skillStat: StageSkillStatus,
  isOpponentSide: boolean, 
): boolean {

}

function _performSkill(
  concert: Concert,
  skill: WapSkillLevel,
  skillStat: SkillStatus,
  isOpponentSide: boolean,
  card?: LiveCard,
  cardStat?: CardStatus,
): boolean {

  // skill possibilities
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


}
