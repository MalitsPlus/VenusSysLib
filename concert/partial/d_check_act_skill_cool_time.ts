import { SkillFailureType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";

export default function checkActSkillCoolTime(
  this: Concert
) {
  if (this.actables.length === 0) {
    return
  }
  this.actables = this.actables.filter(actable => {
    const cardStat = this.current.getCardStatus(actable.index)
    if (cardStat) {
      actable.skills = actable.skills.filter(skillIndex => {
        return cardStat.getSkillStatus(skillIndex).coolTime === 0
      })
    }
    if (actable.index <= 5 && actable.skills.length === 0) {
      this.current.failureFlag = SkillFailureType.InCoolTime
    }
    // if has no skills available, remove this actable
    if (actable.skills.length === 0) {
      return false
    }
    return true
  })
}
