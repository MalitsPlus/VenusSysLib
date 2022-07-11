import { Chart, Live, SkillStatus } from "../types/live_types";
import { SkillTargetType } from "../types/proto/proto_enum";
import {
  SkillTarget
} from "../types/proto/proto_master";

export function getTargetIndexes(
  target: SkillTarget | undefined,
  skillStatus: SkillStatus,
  live: Live,
  current: Chart,
  deckPosition: number,
  isOpponentSide: boolean,
  skillTriggerIdx?: number[],
  detailTriggerIdx?: number[],
): number[] | undefined {
  return _getTargetIndexes(
    target,
    skillStatus,
    live,
    current,
    deckPosition,
    isOpponentSide,
    skillTriggerIdx,
    detailTriggerIdx
  )
}

// returns undefined if trigger logic hasn't been implemented
function _getTargetIndexes(
  target: SkillTarget | undefined,
  skillStatus: SkillStatus,
  live: Live,
  current: Chart,
  deckPosition: number,
  isOpponentSide: boolean,
  skillTriggerIdx?: number[],
  detailTriggerIdx?: number[],
): number[] | undefined {

  if (target) {
    let targetList: number[] = []
    switch (target.type) {

      case SkillTargetType.Self: {
        targetList.push(deckPosition)
        break
      }
        
      case SkillTargetType.All: {
        current.cardStatuses.forEach(cardStat => {
          targetList.push(cardStat.cardIndex)
        })
        break
      }
        
      case SkillTargetType.Center: {
        targetList.push(1)
        targetList.push(6)
        break
      }
        
      case SkillTargetType.DanceHigher: {
        let statuses = current.cardStatuses.slice()
        statuses.sort((a, b) => b.dance - a.dance)
        // todo
        break
      }

    }
  }
}