import { v4 as uuidv4 } from "uuid";
import { CardStatus } from "../../../types/concert_types";
import { getCoolTimeIncreaseValue } from "../../efficacy_analyze";
import { Action } from "./action";

export const coolTimeIncrease: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const increaseValue = getCoolTimeIncreaseValue(efficacy.id)
  const effInfo = {
    value: increaseValue ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  if (increaseValue) {
    targetIndexes.forEach(target => {
      const cardStat = concert.current.getCardStatus(target)
      doIncrease(cardStat, increaseValue)
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
    })
  }
  return effInfo
}

export function doIncrease(
  cardStat: CardStatus,
  increaseValue: number,
) {
  cardStat.skillStatuses.forEach(skillStat => {
    if (skillStat.hasTimes()) {
      const afterInc = skillStat.coolTime + increaseValue
      skillStat.coolTime = afterInc // FIXME(delayed): check maxCoolTime?
    }
  })
}