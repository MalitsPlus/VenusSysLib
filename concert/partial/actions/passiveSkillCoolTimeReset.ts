import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { CardStatus } from "../../../types/concert_types";
import { LiveCard } from "../../../types/card_types";
import { SkillCategoryType } from "../../../types/proto/proto_enum";

export const passiveSkillCoolTimeReset: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const reduceValue = 999
  const effInfo = {
    value: reduceValue ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  targetIndexes.forEach(target => {
    const cardStat = concert.current.getCardStatus(target)
    const card = concert.liveDeck.getCard(target)
    if (cardStat) {
      doReductionByType(card, cardStat, reduceValue, SkillCategoryType.Passive)
      cardStat.effects.push({
        id: uuidv4(),
        efficacyType: efficacy.type,
        grade: effInfo.grade,
        maxGrade: effInfo.maxGrade,
        value: effInfo.value,
        remain: efficacy.duration,
        isInstant: efficacy.isInstant,
        include: isBeforeBeat,
        sourceIndex: sourceIndex,
        sourceSkillIndex: sourceSkillIndex,
      })
    }
  })
  return effInfo
}

function doReductionByType(
  card: LiveCard,
  cardStat: CardStatus,
  reduceValue: number,
  _type: SkillCategoryType,
) {
  for (const skill of card.skills) {
    if (skill.skill.categoryType !== _type) {
      continue
    }
    const skillStat = cardStat.getSkillStatus(skill.index)
    if (skillStat.hasTimes()) {
      const afterRdc = skillStat.coolTime - reduceValue
      skillStat.coolTime = afterRdc < 0 ? 0 : afterRdc
    }
  }
}