import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { getCoolTimeReductionValue } from "../../efficacy_analyze";
import { CardStatus } from "../../../types/concert_types";

export const coolTimeReduction: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const reduceValue = getCoolTimeReductionValue(efficacy.id)
  const effInfo = {
    value: reduceValue ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  if (reduceValue) {
    targetIndexes.forEach(target => {
      const cardStat = concert.current.getCardStatus(target)
      if (cardStat) {
        doReduction(cardStat, reduceValue)
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
  }
  return effInfo
}

export function doReduction(
  cardStat: CardStatus,
  reduceValue: number,
) {
  cardStat.skillStatuses.forEach(skillStat => {
    if (skillStat.hasTimes()) {
      const afterRdc = skillStat.coolTime - reduceValue
      skillStat.coolTime = afterRdc < 0 ? 0 : afterRdc
    }
  })
}