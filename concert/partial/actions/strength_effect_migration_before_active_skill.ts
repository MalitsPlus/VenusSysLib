import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"
import { SkillEfficacyType } from "../../../types/proto/proto_enum";
import { Effect } from "../../../types/concert_types";
import { GameSetting } from "../../../db/repository/setting_repository";

export const StrengthEffectMigrationBeforeActiveSkill: Action = ({
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
    const migEff = {
      index: target,
      type: efficacy.type as SkillEfficacyType.StrengthEffectMigrationBeforeActiveSkill
        | SkillEfficacyType.StrengthEffectMigrationBeforeSpecialSkill,
      fromOrder: concert.current.sequence,
      sourceIndex: sourceIndex,
      sourceSkillIndex: sourceSkillIndex,
      effs: [] as Effect[],
    }
    cardStat.effects = cardStat.effects.filter(eff => {
      if (GameSetting.skillEfficacyTypeStrengthList.includes(eff.efficacyType)) {
        migEff.effs.push(eff)
        return false
      }
      return true
    })
    concert.migratedEffs.push(migEff)
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
