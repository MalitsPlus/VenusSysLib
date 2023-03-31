import { Str2EfficacyType } from "../../consts/chart_consts";
import { getEffectChanges } from "../../efficacy_analyze";
import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { SkillTargetType } from "../../../types/proto/proto_enum";
import { EfficacyMaxGrade } from "../../consts/eff_grades";

export const statusEffectChange: Action = ({
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
  const [originalType, targetType] = getEffectChanges(efficacy.id)
    ?? [SkillTargetType.Unknown, SkillTargetType.Unknown]
  targetIndexes.forEach(target => {
    const cardStat = concert.current.getCardStatus(target)
    if (cardStat) {
      cardStat.effects.forEach(eff => {
        if (eff.efficacyType === originalType) {
          cardStat.effects.push({
            id: uuidv4(),
            efficacyType: targetType,
            grade: eff.grade,
            maxGrade: EfficacyMaxGrade[targetType] ?? 0,
            value: 0,
            remain: eff.remain,
            isInstant: false,
            include: isBeforeBeat,
            sourceIndex: eff.sourceIndex,
            sourceSkillIndex: eff.sourceSkillIndex,
            ajusted: true
          })
          eff.remain = 0
        }
      })
      cardStat.refreshAllParam()
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
