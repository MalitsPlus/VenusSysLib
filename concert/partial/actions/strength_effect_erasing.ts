import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { GameSetting } from "../../../db/repository/setting_repository";
import { getStrengthEffectErasingType } from "../../efficacy_analyze";
import { Str2EfficacyType } from "../../consts/chart_consts";

export const strengthEffectErasing: Action = ({
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
  const typeString = getStrengthEffectErasingType(efficacy.id)
  if (typeString) {
    const _type = Str2EfficacyType[typeString]
    if (_type) {
      targetIndexes.forEach(target => {
        const cardStat = concert.current.getCardStatus(target)
        cardStat.effects = cardStat.effects.filter(eff => {
          return eff.efficacyType !== _type
        })
        cardStat.refreshAllParam(concert.liveDeck.getCard(target))
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
  }
  return effInfo
}
