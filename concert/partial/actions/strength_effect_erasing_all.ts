import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { GameSetting } from "../../../db/repository/setting_repository";

export const strengthEffectErasingAll: Action = ({
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
    cardStat.effects = cardStat.effects.filter(eff => {
      !GameSetting.skillEfficacyTypeStrengthList.includes(eff.efficacyType)
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
  return effInfo
}
