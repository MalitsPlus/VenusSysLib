import { MusicChartType, SkillCategoryType, SkillFailureType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";

export default function checkActSkillExistence(
  this: Concert,
  opponentSide?: boolean,
) {
  const _checkActSkillExistence = (
    isOpponent: boolean
  ) => {
    const position = isOpponent
      ? this.current.actPosition + 5 // FIXME: potential error
      : this.current.actPosition
    const card = this.liveDeck.getCard(position)
    const nodeType = (() => {
      switch (this.current.chartType) {
        case MusicChartType.ActiveSkill: return SkillCategoryType.Active
        case MusicChartType.SpecialSkill: return SkillCategoryType.Special
        default:
          return SkillCategoryType.Unknown
      }
    })()
    const actable = {
      index: position,
      skills: card.skills.filter(x =>
        x.skill.categoryType === nodeType
      ).map(x => 
        x.index
      )
    }
    if (actable.skills.length > 0) {
      this.actables.push(actable)
    } else {
      if (!isOpponent) {
        this.current.failureFlag = SkillFailureType.CategoryMismatch
      }
    }
  }

  if (opponentSide !== undefined) {
    _checkActSkillExistence(opponentSide)
    return
  }

  _checkActSkillExistence(false)
  if (this.live.isBattle) {
    _checkActSkillExistence(true)
  }
}
