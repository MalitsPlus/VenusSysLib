import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { getStrengthEffectCountIncreaseValue } from "../../efficacy_analyze";
import { GameSetting } from "../../../db/repository/setting_repository";

export const strengthEffectCountIncrease: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const strengthCount = getStrengthEffectCountIncreaseValue(efficacy.id)
  const effInfo = {
    value: strengthCount ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  if (strengthCount) {
    targetIndexes.forEach(target => {
      const cardStat = concert.current.getCardStatus(target)
      cardStat?.effects.forEach(eff => {
        if (GameSetting.skillEfficacyTypeStrengthList.includes(eff.efficacyType)) {
          if (eff.remain > 0) {
            eff.remain += strengthCount
            eff.ajusted = true
          }
        }
      })
      cardStat?.effects.push({
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
