import { SkillFailureType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";

export default function checkActSkillCoolTime(
  this: Concert
) {
  if (this.actables.length === 0) {
    return
  }
  this.actables = this.actables.filter(({ index, skills }) => {
    const cardStat = this.current.getCardStatus(index)
    if (cardStat) {
      skills = skills.filter(skillIndex => {
        return cardStat.getSkillStatus(skillIndex).coolTime === 0
      })
    }
    if (index <= 5 && skills.length === 0) {
      this.current.failureFlag = SkillFailureType.InCoolTime
    }
    // if has no skills available, remove this actable
    if (skills.length === 0) {
      return false
    }
    return true
  })
}
