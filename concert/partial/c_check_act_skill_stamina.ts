import { SkillEfficacyType, SkillFailureType } from "../../types/proto/proto_enum";
import { calcSkillStaminaConsumption } from "../../utils/calc_utils";
import { Concert } from "../concert";

export default function checkActSkillStamina(
  this: Concert
) {
  if (this.actables.length === 0) {
    return
  }
  this.actables = this.actables.filter(({ index, skills }) => {
    const card = this.liveDeck.getCard(index)
    const cardStatus = this.current.getCardStatus(index)
    if (cardStatus) {
      if (cardStatus.getEffects(SkillEfficacyType.ActiveSkillChanceAssignment).length > 0) {
        return true
      }
      skills = skills.filter(skillIndex => {
        const consumeSt = calcSkillStaminaConsumption(
          card.getSkill(skillIndex),
          card,
          cardStatus,
          this.live.quest.skillStaminaWeightPermil
        )
        return cardStatus.stamina >= consumeSt
      })
    }
    // set FailureFlag if ally side no skills available 
    if (index <= 5 && skills.length === 0) {
      this.current.failureFlag = SkillFailureType.StaminaShortage
    }
    // if has no skills available, remove this actable
    if (skills.length === 0) {
      return false
    }
    return true
  })
}
