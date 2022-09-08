import { Chart, Live, SkillStatus } from "../types/live_types";
import { CardType, SkillEfficacyType, SkillTargetType } from "../types/proto/proto_enum";
import {
  SkillTarget
} from "../types/proto/proto_master";
import { getTargetLastNum, getTargetSecondLastNum, getTargetStatusType } from "./target_analyze";

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
  // リストにpushされるindexの数が対戦相手が含めているとターゲットが複数ある可能性の矛盾
  if (target) {
    // let targetList: number[] = []
    var isOpponentTarget = false
    var targetNum = 1
    const targetList: number[] = (() => {
      switch (target.type) {

        case SkillTargetType.Self: {
          return [deckPosition]
        }

        case SkillTargetType.All: {
          targetNum = 5
          return current.cardStatuses.map(stat => stat.cardIndex)
        }

        case SkillTargetType.Center: {
          return [1, 6]
        }

        case SkillTargetType.DanceHigher: {
          return current.cardStatuses.slice()
            .sort((a, b) => b.dance - a.dance)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.DanceHigher: {
          return current.cardStatuses.slice()
            .sort((a, b) => a.dance - b.dance)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VocalHigher: {
          return current.cardStatuses.slice()
            .sort((a, b) => b.vocal - a.vocal)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VocalLower: {
          return current.cardStatuses.slice()
            .sort((a, b) => a.vocal - b.vocal)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VisualHigher: {
          return current.cardStatuses.slice()
            .sort((a, b) => b.visual - a.visual)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VisualLower: {
          return current.cardStatuses.slice()
            .sort((a, b) => a.visual - b.visual)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.StaminaHigher: {
          return current.cardStatuses.slice()
            .sort((a, b) => b.stamina - a.stamina)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.StaminaLower: {
          return current.cardStatuses.slice()
            .sort((a, b) => a.stamina - b.stamina)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.Status: {
          let [effectType, amount] = getTargetStatusType(target.id) ?? [SkillEfficacyType.Unknown, 0]
          if (effectType !== SkillEfficacyType.Unknown && !amount) {
            targetNum = amount
            return current.cardStatuses.filter(status => {
              status.effects?.some(eff => {
                eff.efficacyType === effectType
              })
            }).map(stat => stat.cardIndex)
          }
          return []
        }

        case SkillTargetType.Trigger: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return skillTriggerIdx ?? []
        }

        case SkillTargetType.CardType: {
          let cardType = CardType[getTargetSecondLastNum(target.id) ?? 0]
          let amount = getTargetLastNum(target.id)
          live.liveDeck.liveCards
          // 人数が5人〇？10人×？

        }

        default:
          console.error(`Unimplemented 'TargetType': ${target.type.toString()}.`)
          return []
      }
    })()


    return targetList
  }
}