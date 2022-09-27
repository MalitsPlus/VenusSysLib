import { Chart, Live, SkillStatus } from "../types/concert_types";
import { AttributeType, CardType, SkillEfficacyType, SkillTargetType } from "../types/proto/proto_enum";
import {
  SkillTarget
} from "../types/proto/proto_master";
import { IndexNeighbor, SameLaneOpponent } from "./consts/chart_consts";
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
          targetNum = 5 // PTI
          return current.cardStatuses.map(stat => stat.cardIndex)
        }

        case SkillTargetType.Center: {
          return [1, 6]
        }

        case SkillTargetType.DanceHigher: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => b.dance - a.dance)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.DanceLower: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => a.dance - b.dance)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VocalHigher: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => b.vocal - a.vocal)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VocalLower: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => a.vocal - b.vocal)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VisualHigher: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => b.visual - a.visual)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.VisualLower: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => a.visual - b.visual)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.StaminaHigher: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return current.cardStatuses.slice()
            .sort((a, b) => b.stamina - a.stamina)
            .map(stat => stat.cardIndex)
        }

        case SkillTargetType.StaminaLower: {
          targetNum = getTargetLastNum(target.id) ?? 1
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
          let cardType: CardType = getTargetSecondLastNum(target.id) ?? 0
          targetNum = getTargetLastNum(target.id) ?? 1
          return live.liveDeck.liveCards
            .filter(it => it.liveCard.type === cardType)
            .map(it => it.index)
        }

        case SkillTargetType.Neighbor: {
          return IndexNeighbor[deckPosition]
        }

        case SkillTargetType.Vocal: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return live.liveDeck.liveCards
            .filter(it => it.liveCard.attributeType === AttributeType.Vocal)
            .map(it => it.index)
        }

        case SkillTargetType.Dance: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return live.liveDeck.liveCards
            .filter(it => it.liveCard.attributeType === AttributeType.Dance)
            .map(it => it.index)
        }

        case SkillTargetType.Visual: {
          targetNum = getTargetLastNum(target.id) ?? 1
          return live.liveDeck.liveCards
            .filter(it => it.liveCard.attributeType === AttributeType.Visual)
            .map(it => it.index)
        }

        case SkillTargetType.PositionAttributeVocal:
        case SkillTargetType.PositionAttributeDance:
        case SkillTargetType.PositionAttributeVisual: {
          let _type = (() => {
            switch (target.type) {
              case SkillTargetType.PositionAttributeVocal:
                return AttributeType.Vocal
              case SkillTargetType.PositionAttributeDance:
                return AttributeType.Dance
              case SkillTargetType.PositionAttributeVisual:
                return AttributeType.Visual
              default:
                return AttributeType.Unknown
            }
          })()
          targetNum = getTargetLastNum(target.id) ?? 1
          let _targetList: number[] = []
          if (live.quest.position1AttributeType === _type) {
            _targetList.push(1, 6)
          }
          if (live.quest.position2AttributeType === _type) {
            _targetList.push(2, 7)
          }
          if (live.quest.position3AttributeType === _type) {
            _targetList.push(3, 8)
          }
          if (live.quest.position4AttributeType === _type) {
            _targetList.push(4, 9)
          }
          if (live.quest.position5AttributeType === _type) {
            _targetList.push(5, 10)
          }
          return _targetList
        }

        case SkillTargetType.OpponentCenter: {
          isOpponentTarget = true
          if (deckPosition >= 6) return 1
          else return 6
        }

        case SkillTargetType.OpponentCardType: {
          isOpponentTarget = true
          let cardType: CardType = getTargetSecondLastNum(target.id) ?? 0
          targetNum = getTargetLastNum(target.id) ?? 1
          return live.liveDeck.liveCards
            .filter(it => it.liveCard.type === cardType)
            .map(it => it.index)
        }

        case SkillTargetType.OpponentAll: {
          isOpponentTarget = true
          targetNum = 5
          if (deckPosition <= 5) {
            return [6, 7, 8, 9, 10]
          } else {
            return [1, 2, 3, 4, 5]
          }
        }

        case SkillTargetType.OpponentSamePosition: {
          isOpponentTarget = true
          return SameLaneOpponent[deckPosition]
        }

        default:
          console.error(`Unimplemented 'TargetType': ${target.type.toString()}.`)
          return []
      }
    })();

    return ((isOpponentTarget && deckPosition >= 6) || (!isOpponentTarget && deckPosition <= 5)
      // ally side
      ? targetList.filter(it => it <= 5)
      // opponent side
      : targetList.filter(it => it >= 6)
    ).filter((_, index) => {
      index < targetNum
    })
  }
}