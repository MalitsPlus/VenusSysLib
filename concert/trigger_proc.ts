import {
  CardStatus,
  Chart,
  Live,
  LiveCard,
  SkillStatus,
} from "../types/concert_types";
import {
  AttributeType,
  MusicChartType,
  SkillCategoryType,
  SkillTriggerType
} from "../types/proto/proto_enum";
import { SkillTrigger } from "../types/proto/proto_master";
import {
  getCardStatusByIndex,
  getLaneAttributeByPosition,
  getLiveCardByIndex,
} from "../utils/chart_utils";
import { isEffect } from "../utils/skill_utils";
import {
  Actable,
} from "./concert";
import { SkillEfficacyStaminaRecoveryList } from "./consts/efficacy_list";
import * as tra from "./trigger_analyze"

// returns undefined if trigger logic hasn't been implemented
// returns empty array if has trigger but not triggered
// returns [0] if has no trigger
export function getTriggeredIndexes(
  trigger: SkillTrigger | undefined,
  skillType: SkillCategoryType,
  skillStatus: SkillStatus,
  live: Live,
  current: Chart,
  deckPosition: number,
  isOpponentSide: boolean,
  actable?: Actable,
  cardStatus?: CardStatus,
  deckCard?: LiveCard
): number[] | undefined {
  let result = _getTriggeredIndexes(
    trigger,
    skillType,
    skillStatus,
    live,
    current,
    deckPosition,
    isOpponentSide,
    actable,
    cardStatus,
    deckCard
  )
  // clear indexes those are not belong to corresponding side
  return isOpponentSide
    ? result?.filter(it => it === 0 || (6 <= it && it <= 10))
    : result?.filter(it => it === 0 || (1 <= it && it <= 5))
}

// ⚠️ be careful that returned list may contains opponent side indexes
function _getTriggeredIndexes(
  trigger: SkillTrigger | undefined,
  skillType: SkillCategoryType,
  skillStatus: SkillStatus,
  live: Live,
  current: Chart,
  deckPosition: number,
  isOpponentSide: boolean,
  actable?: Actable,
  cardStatus?: CardStatus,
  deckCard?: LiveCard
): number[] | undefined {
  // if skill has trigger
  if (trigger) {
    // who triggered this
    let triggeredList: number[] = []
    // check if trigger conditions are met according to skill's trigger type
    switch (trigger.type) {

      case SkillTriggerType.Beat: {
        if (current.chartType === MusicChartType.Beat) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.LiveStart: {
        if ([1, 2].includes(current.sequence)) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.Combo: {
        let combo = tra.getTriggerLastNum(trigger.id)
        let userStat = current.userStatuses[
          isOpponentSide ? 1 : 0
        ]
        if (combo && userStat.combo >= combo) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.MoreThanCharacterCount: {
        console.error("'SkillTriggerType.MoreThanCharacterCount' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.BeforeActiveSkillBySomeone: {
        if (current.chartType === MusicChartType.ActiveSkill) {
          actable && triggeredList.push(actable.index)
        }
        break
      }

      case SkillTriggerType.BeforeSpecialSkillBySomeone: {
        if (current.chartType === MusicChartType.SpecialSkill) {
          actable && triggeredList.push(actable.index)
        }
        break
      }

      case SkillTriggerType.BeforeCritical: // probably not correct (currently no card)
      case SkillTriggerType.Critical: {
        if (skillType === SkillCategoryType.Passive) {
          // case: passive skills
          let beat = current.beats?.find(it => it.cardIndex === deckPosition)
          if (beat?.isCritical) {
            triggeredList.push(beat.cardIndex)
          }
        } else {
          // case: A or SP skills
          if (current.actSkill?.cardIndex === deckPosition &&
            current.actSkill?.isCritical) {
            triggeredList.push(current.actSkill.cardIndex)
          }
        }
        break
      }

      case SkillTriggerType.BeforeCriticalBySomeone: {
        if (skillType === SkillCategoryType.Passive) {
          // case: passive skills
          if (current.beats) {
            current.beats.forEach(beat => {
              if (beat.isCritical) {
                triggeredList.push(beat.cardIndex)
              }
            })
          }
        } else {
          // case: A or SP skills
          if (current.actSkill?.isCritical) {
            triggeredList.push(current.actSkill.cardIndex)
          }
        }
        break
      }

      case SkillTriggerType.Status: {
        let efficacyType = tra.getTriggerStatusType(trigger.id)
        if (cardStatus?.effects?.some(eff => isEffect(eff, efficacyType))) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.SomeoneStatus: {
        let efficacyType = tra.getTriggerStatusType(trigger.id)
        current.cardStatuses.forEach(cardStat => {
          if (cardStat.effects?.some(eff => isEffect(eff, efficacyType))) {
            triggeredList.push(cardStat.cardIndex)
          }
        })
        break
      }

      case SkillTriggerType.StaminaLower: {
        let threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold && cardStatus && deckCard) {
          let rate = cardStatus.stamina / deckCard.deckStamina
          if (rate <= threshold / 100) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.StaminaHigher: {
        let threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold && cardStatus && deckCard) {
          let rate = cardStatus.stamina / deckCard.deckStamina
          if (rate >= threshold / 100) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.SomeoneStaminaLower: {
        let threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold) {
          live.liveDeck.liveCards.forEach(card => {
            let cardStat = current.cardStatuses.find(it => it.cardIndex === card.index)
            if (cardStat) {
              if (cardStat.stamina / card.liveCard.deckStamina <= threshold! / 100) {
                triggeredList.push(deckPosition)
              }
            }
          })
        }
        break
      }

      case SkillTriggerType.FanEngageHigher: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.FanEngageHigher' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.Center: {
        if ([1, 6].includes(deckPosition)) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.MoodType: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.MoodType' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.Music: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.Music' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.StatusGroup: {
        let group = tra.getTriggerStatusGroup(trigger.id)
        if (group) {
          if (cardStatus?.effects?.some(eff =>
            group!!.includes(eff.efficacyType)
          )) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.SomeoneStatusGroup: {
        let group = tra.getTriggerStatusGroup(trigger.id)
        if (group) {
          current.cardStatuses.forEach(cardStat => {
            if (cardStat.effects?.some(eff =>
              group!.includes(eff.efficacyType)
            )) {
              triggeredList.push(cardStat.cardIndex)
            }
          })
        }
        break
      }

      case SkillTriggerType.PositionAttributeVocal: {
        let laneType = getLaneAttributeByPosition(live.quest, deckPosition)
        if (laneType === AttributeType.Vocal) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.PositionAttributeDance: {
        let laneType = getLaneAttributeByPosition(live.quest, deckPosition)
        if (laneType === AttributeType.Dance) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.PositionAttributeVisual: {
        let laneType = getLaneAttributeByPosition(live.quest, deckPosition)
        if (laneType === AttributeType.Visual) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.CenterStatus: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.CenterStatus' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.CardTypeStatus: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.CardTypeStatus' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.SomeoneRecovered: {
        current.cardStatuses.forEach(cardStat => {
          if (cardStat.effects?.some(eff =>
            SkillEfficacyStaminaRecoveryList.includes(eff.efficacyType)
          )) {
            triggeredList.push(cardStat.cardIndex)
          }
        })
        break
      }

      case SkillTriggerType.AllAttributeType: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.AllAttributeType' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.MostLeft: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.MostLeft' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.MostRight: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.MostRight' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.SecondFromLeft: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.SecondFromLeft' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.SecondFromRight: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.SecondFromRight' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.AllStatus: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.AllStatus' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.AllStatus: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.AllStatus' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.ComboLessEqual: {
        let combo = tra.getTriggerLastNum(trigger.id)
        let userStat = current.userStatuses[
          isOpponentSide ? 1 : 0
        ]
        if (combo && userStat.combo <= combo) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.SkillFailure: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.SkillFailure' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.MoreThanPositionCardTypeCount: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.MoreThanPositionCardTypeCount' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.BeforeActiveSkill: {
        // hasn't been implemented in game
        console.error("'SkillTriggerType.BeforeActiveSkill' hasn't been implemented.")
        return undefined
      }

      case SkillTriggerType.BeforeSpecialSkill: {
        if (current.chartType === MusicChartType.SpecialSkill) {
          if (actable && actable.index === deckPosition) {
            triggeredList.push(actable.index)
          }
        }
        break
      }

      default: {
        console.error(`Unknown SkillTriggerType enum value: '${trigger.type}'.`)
        return undefined
      }

    }
    return triggeredList
  } else {
    return [0]
  }
}
