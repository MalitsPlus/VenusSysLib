import { v4 as uuidv4 } from "uuid";
import { SkillEfficacyType } from "../../../types/proto/proto_enum";
import { Action } from "./action";
import { doReduction } from "./cool_time_reduction";

export const weaknessEffectInversion: Action = ({
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
    const cardStat = concert.current.getCardStatus(target)
    cardStat?.effects.forEach(eff => {
      if (eff.efficacyType === SkillEfficacyType.DanceDown) {
        eff.efficacyType = SkillEfficacyType.DanceUp
        eff.value = -eff.value
        eff.ajusted = true
      } else if (eff.efficacyType === SkillEfficacyType.VocalDown) {
        eff.efficacyType = SkillEfficacyType.VocalUp
        eff.value = -eff.value
        eff.ajusted = true
      } else if (eff.efficacyType === SkillEfficacyType.VisualDown) {
        eff.efficacyType = SkillEfficacyType.VisualUp
        eff.value = -eff.value
        eff.ajusted = true
      } else if (eff.efficacyType === SkillEfficacyType.SkillImpossible) {
        const reduceCT = eff.value
        doReduction(cardStat, reduceCT)
        eff.value = 0
        eff.ajusted = true
      } else if (eff.efficacyType === SkillEfficacyType.StaminaConsumptionIncrease) {
        eff.efficacyType = SkillEfficacyType.StaminaConsumptionReduction
        eff.value = -eff.value
        eff.ajusted = true
      }
    })
    cardStat?.refreshAllParam()
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
  return effInfo
}
