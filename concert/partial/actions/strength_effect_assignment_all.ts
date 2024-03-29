import { v4 as uuidv4 } from "uuid";
import { GameSetting } from "../../../db/repository/setting_repository";
import { Action } from "./action";

export const strengthEffectAssignmentAll: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const effInfo = {
    value: 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  targetIndexes.forEach(target => {
    const sourceCardStat = concert.current.getCardStatus(sourceIndex)
    const cardStat = concert.current.getCardStatus(target)
    if (sourceCardStat && cardStat) {
      if (cardStat.cardIndex !== sourceCardStat.cardIndex) {
        sourceCardStat.effects = sourceCardStat.effects.filter(eff => {
          if (GameSetting.skillEfficacyTypeStrengthList.includes(eff.efficacyType)) {
            eff.migrated = true
            cardStat.effects.push(eff)
            return false
          }
          return true
        })
        sourceCardStat.refreshAllParam()
        cardStat.refreshAllParam()
      }
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
