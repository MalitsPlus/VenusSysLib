import { SkillCategoryType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";

export default function preparePSkill(
  this: Concert,
  isBefore: boolean,
) {

  for (const it of this.pSkills) {
    const cardStat = this.current.getCardStatus(it.cardIndex)
    const skillStat = cardStat.getSkillStatus(it.skillIndex)
    if (skillStat.hasRemain()) {
      
    }
  }

  const performOrder = this.liveDeck.liveCards.map(x => x.liveCard.)

  const pSkills = this.liveDeck.liveCards.flatMap(card => {
    return card.liveCard.skills.filter(x =>
      x.skill.categoryType === SkillCategoryType.Passive
    ).map(x => ({
      cardIndex: card.index,
      skillIndex: x.index,
    }))
  })
  pSkills.sort(it => {
    this.current.card
  })

  const performables = (function* (concert: Concert) {
    for (const cardStat of concert.current.cardStatuses) {
      for (const skillStat of cardStat.skillStatuses) {
        if (skillStat.coolTime === 0 && !skillStat.remainCount) {
          yield {
            cardIndex: cardStat.cardIndex,
            skillIndex: skillStat.skillIndex,
          }
        }
      }
    }
  })(this)

}
