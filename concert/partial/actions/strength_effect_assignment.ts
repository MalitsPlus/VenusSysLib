import { Str2EfficacyType } from "../../consts/chart_consts";
import { getStrengthEffectAssignmentType } from "../../efficacy_analyze";
import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"

export const strengthEffectAssignment: Action = ({
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
  const typeString = getStrengthEffectAssignmentType(efficacy.id)
  if (typeString) {
    const targetEffect = Str2EfficacyType[typeString]
    if (targetEffect !== undefined) {
      targetIndexes.forEach(target => {
        const sourceCardStat = concert.current.getCardStatus(sourceIndex)
        const cardStat = concert.current.getCardStatus(target)
        if (sourceCardStat && cardStat) {
          if (cardStat.cardIndex !== sourceCardStat.cardIndex) {
            sourceCardStat.effects = sourceCardStat.effects.filter(eff => {
              if (eff.efficacyType === targetEffect) {
                eff.ajusted = true
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
    }
  }
  return effInfo
}
