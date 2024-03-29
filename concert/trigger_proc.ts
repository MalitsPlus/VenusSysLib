import { LiveCard } from "../types/card_types";
import {
  Actable,
  CardStatus,
  Chart,
  Live,
  SkillStatus
} from "../types/concert_types";
import {
  AttributeType,
  MusicChartType,
  SkillCategoryType,
  SkillTriggerType
} from "../types/proto/proto_enum";
import { SkillTrigger } from "../types/proto/proto_master";
import { isEffect } from "../utils/skill_utils";
import { SkillEfficacyStaminaRecoveryList } from "./consts/efficacy_list";
import * as tra from "./trigger_analyze";

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
  actable: Actable[],
  cardStatus?: CardStatus,
  deckCard?: LiveCard
): number[] | undefined {
  const result = _getTriggeredIndexes(
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
    ? result?.filter(it => it === 0 || it > 100 || (6 <= it && it <= 10))
    : result?.filter(it => it === 0 || it > 100 || (1 <= it && it <= 5))
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
  actable: Actable[],
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
        const combo = tra.getTriggerLastNum(trigger.id)
        const userStat = current.userStatuses[
          isOpponentSide ? 1 : 0
        ]
        if (combo && userStat.combo >= combo) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.MoreThanCharacterCount: {
        const charaIds = trigger.characterIds
        live.liveDeck.liveCards.forEach(card => {
          if (charaIds.includes(card.liveCard.characterId)) {
            triggeredList.push(card.index)
          }
        })
        const threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold && triggeredList.length < threshold) {
          triggeredList = []
        }
        break
      }

      case SkillTriggerType.BeforeActiveSkillBySomeone: {
        if (current.chartType === MusicChartType.ActiveSkill) {
          actable.length && triggeredList.push(actable[0].index)
        }
        break
      }

      case SkillTriggerType.BeforeSpecialSkillBySomeone: {
        if (current.chartType === MusicChartType.SpecialSkill) {
          actable.length && triggeredList.push(actable[0].index)
        }
        break
      }

      case SkillTriggerType.BeforeCritical: // probably not correct (currently no card)
      case SkillTriggerType.Critical: {
        if (skillType === SkillCategoryType.Passive) {
          // case: passive skills
          const beat = current.beats?.find(it => it.cardIndex === deckPosition)
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
        const efficacyType = tra.getTriggerStatusType(trigger.id)
        if (cardStatus?.effects?.some(eff => isEffect(eff, efficacyType))) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.SomeoneStatus: {
        const efficacyType = tra.getTriggerStatusType(trigger.id)
        current.cardStatuses.forEach(cardStat => {
          if (cardStat.effects?.some(eff => isEffect(eff, efficacyType))) {
            triggeredList.push(cardStat.cardIndex)
          }
        })
        break
      }

      case SkillTriggerType.StaminaLower: {
        const threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold && cardStatus && deckCard) {
          const rate = cardStatus.stamina / deckCard.deckStamina
          if (rate <= threshold / 100) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.StaminaHigher: {
        const threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold && cardStatus && deckCard) {
          const rate = cardStatus.stamina / deckCard.deckStamina
          if (rate >= threshold / 100) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.SomeoneStaminaLower: {
        const threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold) {
          live.liveDeck.liveCards.forEach(card => {
            const cardStat = current.cardStatuses.find(it => it.cardIndex === card.index)
            if (cardStat) {
              if (cardStat.stamina / card.liveCard.deckStamina <= threshold! / 100) {
                triggeredList.push(cardStat.cardIndex)
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
        const group = tra.getTriggerStatusGroup(trigger.id)
        if (group) {
          if (cardStatus?.effects?.some(eff =>
            group.includes(eff.efficacyType)
          )) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.SomeoneStatusGroup: {
        const group = tra.getTriggerStatusGroup(trigger.id)
        if (group) {
          current.cardStatuses.forEach(cardStat => {
            if (cardStat.effects?.some(eff =>
              group.includes(eff.efficacyType)
            )) {
              triggeredList.push(cardStat.cardIndex)
            }
          })
        }
        break
      }

      case SkillTriggerType.PositionAttributeVocal: {
        const laneType = live.quest.getLaneType(deckPosition)
        if (laneType === AttributeType.Vocal) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.PositionAttributeDance: {
        const laneType = live.quest.getLaneType(deckPosition)
        if (laneType === AttributeType.Dance) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.PositionAttributeVisual: {
        const laneType = live.quest.getLaneType(deckPosition)
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

      case SkillTriggerType.ComboLessEqual: {
        const combo = tra.getTriggerLastNum(trigger.id)
        const userStat = current.userStatuses[
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
          if (actable.length && actable[0].index === deckPosition) {
            triggeredList.push(actable[0].index)
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
