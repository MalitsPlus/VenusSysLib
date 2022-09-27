import { MusicChartType, SkillEfficacyType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";
import { Index2Lane } from "../consts/chart_consts";

export default function migration(this: Concert) {
  if (this.migratedEffs.length === 0) {
    return
  }
  this.migratedEffs.forEach(migreff => {
    if (matches(this.current.chartType, migreff.type)) {
      if (Index2Lane[migreff.index] === this.current.actPosition) {
        this.current.getCardStatus()
      }
    }
  })
}

const matches = (
  chartType: MusicChartType,
  effType: SkillEfficacyType
): boolean => {
  if (chartType === MusicChartType.ActiveSkill
    && effType === SkillEfficacyType.StrengthEffectMigrationBeforeActiveSkill
  ) {
    return true
  }
  if (chartType === MusicChartType.SpecialSkill
    && effType === SkillEfficacyType.StrengthEffectMigrationBeforeSpecialSkill
  ) {
    return true
  }
  return false
}
