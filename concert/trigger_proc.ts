import {
  CardStatus,
  Chart,
  Live,
  SkillStatus,
} from "../types/live_types";
import {
  MusicChartType,
  SkillCategoryType,
  SkillTriggerType
} from "../types/proto/proto_enum";
import { SkillTrigger } from "../types/proto/proto_master";
import { WapSkillLevel } from "../types/wrapper_types";
import { getCardStatusByIndex, getLiveCardByIndex } from "../utils/chart_utils";
import { isEffect } from "../utils/skill_utils";
import {
  Actable,
  ConcertPSkillLevel,
} from "./concert";
import {
  index2Lane, str2EfficacyType
} from "./consts/chart_consts";
import * as tra from "./trigger_analyze"

// returns undefined if has no trigger 
// returns empty array if has trigger but not triggered
export function getTriggeredIndexes(
  trigger: SkillTrigger,
  skillType: SkillCategoryType,
  skillStatus: SkillStatus,
  live: Live,
  current: Chart,
  deckPosition: number,
  isOpponentSide: boolean,
  actables?: Actable[],
): number[] | undefined {
  let result = _getTriggeredIndexes(
    trigger,
    skillType,
    skillStatus,
    live,
    current,
    deckPosition,
    isOpponentSide,
    actables,
  )
  return isOpponentSide
    ? result.filter(it => it > 5)
    : result.filter(it => it <= 5)
}

// ⚠️ be careful that return list may contains opponent side indexes
function _getTriggeredIndexes(
  trigger: SkillTrigger,
  skillType: SkillCategoryType,
  skillStatus: SkillStatus,
  live: Live,
  current: Chart,
  deckPosition: number,
  isOpponentSide: boolean,
  actables?: Actable[],
  // cardStatus?: CardStatus
): number[] | undefined {
  // if skill has trigger
  if (trigger) {
    let cardStatus = getCardStatusByIndex(deckPosition, current)
    let deckCard = getLiveCardByIndex(deckPosition, live)
    // who triggered this
    let triggeredList: number[] = []
    // check if trigger conditions are met according to skill's trigger type
    switch (trigger.type) {

      case SkillTriggerType.Beat: {
        triggeredList.push(deckPosition)
        break
      }

      case SkillTriggerType.LiveStart: {
        if (current.sequence === 1) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.Combo: {
        let combo = tra.getTriggerLastNum(trigger.id)
        let userStat = current.userStatuses[
          isOpponentSide ? 1 : 0
        ]
        if (userStat.combo >= combo) {
          triggeredList.push(deckPosition)
        }
        break
      }

      case SkillTriggerType.MoreThanCharacterCount: {
        throw Error("'SkillTriggerType.MoreThanCharacterCount' hasn't been implemented.")
      }

      case SkillTriggerType.BeforeActiveSkillBySomeone: {
        if (current.chartType === MusicChartType.ActiveSkill) {
          actables?.forEach(act => {
            triggeredList.push(act.index)
          })
        }
        break
      }

      case SkillTriggerType.BeforeSpecialSkillBySomeone: {
        if (current.chartType === MusicChartType.SpecialSkill) {
          actables?.forEach(act => {
            triggeredList.push(act.index)
          })
        }
        break
      }

      case SkillTriggerType.BeforeCritical: // probably not correct (currently no card)
      case SkillTriggerType.Critical: {
        if (skillType === SkillCategoryType.Passive) {
          // case: passive skills
          let beat = current.beats?.find(it => it.cardIndex === deckPosition)
          if (beat.isCritical) {
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
        if (cardStatus.effects?.some(eff => isEffect(eff, efficacyType))) {
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
        if (threshold) {
          let rate = cardStatus.stamina / deckCard.deckStamina
          if (rate <= threshold / 100) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

      case SkillTriggerType.StaminaHigher: {
        let threshold = tra.getTriggerLastNum(trigger.id)
        if (threshold) {
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
          current.cardStatuses
          // 并列遍历
          let bingo = live.liveDeck.liveCards.find(card => {

          })

          if (rate >= threshold / 100) {
            triggeredList.push(deckPosition)
          }
        }
        break
      }

    }
    return triggeredList
  } else {
    return undefined
  }
}