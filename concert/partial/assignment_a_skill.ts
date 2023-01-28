import { MusicChartType, SkillEfficacyType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";
import { Indexes } from "../consts/chart_consts";

export default function assignment_a_skill(this: Concert) {
  const current = this.current
  if (current.chartType === MusicChartType.ActiveSkill) {
    if (this.actables.length > 0) {
      if (current.getCardStatus(this.actables[0].index)?.getEffects(SkillEfficacyType.ActiveSkillChanceAssignment).length) {
        // clear current actables
        this.actables = []
        const originalPos = current.originalActPosition
        const isOpponent = originalPos > 5 ? true : false
        for (const idx of Indexes.filter(it => isOpponent ? it > 5 : it <= 5)) {
          if (idx === originalPos) continue
          current.actPosition = idx
          this.checkActSkillExistence(isOpponent)
          this.checkActSkillStamina()
          this.checkActSkillCoolTime()
          this.checkActSkillPossibility()
          if (this.actables.length > 0) {
            break
          }
        }
        if (this.actables.length < 1) {
          current.actPosition = originalPos
        }
      }
    }
  }
}