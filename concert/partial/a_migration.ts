import { v4 as uuidv4 } from "uuid";
import { MusicChartType, SkillEfficacyType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";
import { Index2Lane } from "../consts/chart_consts";

export default function migration(this: Concert) {
  if (this.migratedEffs.length === 0) {
    return
  }
  const applied: number[] = []
  this.migratedEffs.forEach((migreff, index) => {
    if (matches(this.current.chartType, migreff.type)) {
      if (Index2Lane[migreff.index] === this.current.actPosition) {
        migreff.effs.forEach(eff => {
          eff.migrated = true
          eff.include = true
          eff.id = uuidv4()
        })
        // push migrated effects to current effects
        const cardStatus = this.current.getCardStatus(migreff.index)
        cardStatus?.effects.push(...migreff.effs)
        cardStatus?.refreshAllParam()
        applied.push(index)
      }
    }
  })
  // remove applied effects
  if (applied.length > 0) {
    this.migratedEffs = this.migratedEffs.filter((_, index) =>
      !applied.includes(index)
    )
  }
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
