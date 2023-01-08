import { SkillEfficacyType, SkillFailureType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";

export default function checkActSkillPossibility(
  this: Concert
) {
  if (this.actables.length === 0) {
    return
  }
  this.actables = this.actables.filter(actable => {
    const cardStat = this.current.getCardStatus(actable.index)
    if (cardStat) {
      const impossible = cardStat.getEffects(SkillEfficacyType.SkillImpossible, true)
      if (impossible.length > 0) {
        if (actable.index <= 5) {
          this.current.failureFlag = SkillFailureType.InSkillImpossibleEffect
        }
        return false
      }
    }
    return true
  })
}