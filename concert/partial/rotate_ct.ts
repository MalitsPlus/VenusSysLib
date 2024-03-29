import { Concert } from "../concert";

export function rotateCT(
  this: Concert,
) {
  // reduce card skill CT
  this.current.cardStatuses.forEach(cardStat => {
    cardStat.skillStatuses.forEach(skillStat => {
      if (skillStat.coolTime) {
        skillStat.coolTime -= 1
      }
    })
  })
  // reduce stage skill CT
  this.current.stageSkillStatuses?.forEach(stageSkillStat => {
    if (stageSkillStat.coolTime) {
      stageSkillStat.coolTime -= 1
    }
  })
  // reduce photo CT
  //...
}
