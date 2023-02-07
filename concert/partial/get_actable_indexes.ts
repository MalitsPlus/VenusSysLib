import { MusicChartType, SkillEfficacyType } from "../../types/proto/proto_enum";
import { getRealtimeParamByChartType } from "../../utils/skill_utils";
import { Concert } from "../concert";
import { AllyIndexes, OpponentIndexes, SameLaneOpponent } from "../consts/chart_consts";

export default function getActableIndexes(
  this: Concert,
  isBattle: boolean,
): number[] {
  let idxes = _getActableIndexes(this, false)
  if (isBattle) {
    idxes = [
      ...idxes,
      ..._getActableIndexes(this, true)
    ]
  }
  return idxes
}

// return both friendly side and opponent side indexes
// ex: actposition: 2, then return [1, 3, 4, 5, 2, 7]
function _getActableIndexes(
  concert: Concert,
  isOpponent: boolean,
): number[] {
  const current = concert.current
  const realActPosition = isOpponent
    ? SameLaneOpponent[current.actPosition]
    : current.actPosition

  switch (current.chartType) {
    case MusicChartType.ActiveSkill: {
      if (current.getCardStatus(realActPosition)?.getEffects(SkillEfficacyType.ActiveSkillChanceAssignment).length) {
        const laneType = concert.live.quest.getLaneType(concert.current.originalActPosition)
        const volunteers = (isOpponent
          ? OpponentIndexes
          : AllyIndexes
        ).filter(x =>
          x !== realActPosition
        ).sort((a, b) => {
          const aStat = concert.current.getCardStatus(a)!
          const bStat = concert.current.getCardStatus(b)!
          return getRealtimeParamByChartType(laneType, bStat) - getRealtimeParamByChartType(laneType, aStat)
        })
        // add original index to the last
        volunteers.push(realActPosition)
        return volunteers
      }
      return [realActPosition]
    }
    case MusicChartType.SpecialSkill: {
      return [realActPosition]
    }
    default: {
      return []
    }
  }
}

// export default function assignment_a_skill(this: Concert) {
//   const current = this.current
//   if (current.chartType === MusicChartType.ActiveSkill) {
//     if (this.actables.length > 0) {
//       if (current.getCardStatus(this.actables[0].index)?.getEffects(SkillEfficacyType.ActiveSkillChanceAssignment).length) {
//         // clear current actables
//         this.actables = []
//         const originalPos = current.originalActPosition
//         const isOpponent = originalPos > 5 ? true : false
//         const volunteers = Indexes.filter(it =>
//           isOpponent ? it > 5 : it <= 5
//         ).sort((a, b) => {

//         })

//         for (const idx of Indexes.filter(it => isOpponent ? it > 5 : it <= 5)) {
//           if (idx === originalPos) continue
//           current.actPosition = idx
//           this.checkActSkillExistence(isOpponent)
//           this.checkActSkillStamina()
//           this.checkActSkillCoolTime()
//           this.checkActSkillPossibility()
//           if (this.actables.length > 0) {
//             break
//           }
//         }
//         if (this.actables.length < 1) {
//           current.actPosition = originalPos
//         }
//       }
//     }
//   }
// }