import {
  Chart,
  Live,
} from "../types/live_types";
import { MusicChartType, SkillCategoryType } from "../types/proto/proto_enum";
import * as chut from "../utils/chart_utils";

export function checkSkillExistence(
  live: Live,
  previous: Chart,
  current: Chart
) {
  _checkSkillExistence(live, previous, current, false)
  if (live.isBattle) {
    _checkSkillExistence(live, previous, current, true)
  }
}
function _checkSkillExistence(
  live: Live,
  previous: Chart,
  current: Chart,
  isOpponent: boolean
) {
  let position = isOpponent ? current.actPosition + 5 : current.actPosition
  let deckCard = chut.getLiveCardByIndex(position, live)
  let actables = {
    index: position,
    skills: [],
  }
  let nodeType: SkillCategoryType
  switch (current.chartType) {
    case MusicChartType.ActiveSkill:
      nodeType = SkillCategoryType.Active; break;
    case MusicChartType.SpecialSkill:
      nodeType = SkillCategoryType.Special; break;
    default:
      throw new TypeError("chart.chartType can only be either [ActiveSkill | SpecialSkill].")
  }
  if (deckCard.skill1.categoryType === nodeType) {
    actables.skills.push(1)
  }
  if (deckCard.skill2.categoryType === nodeType) {
    actables.skills.push(2)
  }
  if (deckCard.skill3.categoryType === nodeType) {
    actables.skills.push(3)
  }
  // if (!current.actables) {
  //   current.actables = []
  // }
  // if (actables.skills.length > 0) {
  //   current.actables.push(actables)
  // }
}

function _checkSkillStamina(
  live: Live,
  previous: Chart,
  current: Chart
) {
  // if (!current.actables || current.actables.length === 0) {
  //   return
  // }
  // current.actables.forEach(({ index, skills }) => {
  //   skills.forEach(skillIndex => {
  //     acut.getSkillByIndex(skillIndex, undefined, index, live)
  //   })
  // })
}
