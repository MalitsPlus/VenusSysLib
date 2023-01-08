import { v4 as uuidv4 } from "uuid";
import { GameSetting } from "../../../db/repository/setting_repository";
import { CardStatus } from "../../../types/concert_types";
import { EfficacyValue } from "../../consts/eff_grades";
import { getStrengthEffectValueIncreaseValue } from "../../efficacy_analyze";
import { Action } from "./action";

export const strengthEffectValueIncrease: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  const strengthValue = getStrengthEffectValueIncreaseValue(efficacy.id)
  const effInfo = {
    value: strengthValue ?? 0,
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  if (strengthValue) {
    targetIndexes.forEach(target => {
      const cardStat = concert.current.getCardStatus(target)
      if (cardStat) {
        for (const eff of getLongestEffects(cardStat)) {  // returned eff must be inside the `StrengthList`
          if (eff.remain > 0) {
            eff.grade += strengthValue
            eff.value += EfficacyValue[eff.efficacyType][eff.grade] ?? 0
          }
        }
        // refresh attributes
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
  }
  return effInfo
}

function* getLongestEffects(cardStat: CardStatus) {
  const strengthEffs = new Set(cardStat.effects
    .filter(x => x.remain > 0)
    .filter(x => GameSetting.skillEfficacyTypeStrengthList.includes(x.efficacyType))
    .map(x => x.efficacyType)
  )
  for (const eff of strengthEffs) {
    const effs = cardStat.getEffects(eff)
    if (effs.length === 1) {
      yield effs[0]
    }
    yield effs.sort((a, b) => b.remain - a.remain)[0]
  }
}
