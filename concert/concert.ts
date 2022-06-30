import {
  Chart,
  Live,
} from "../types/live_types";
import {
  MusicChartType,
  SkillCategoryType,
  SkillFailureType,
} from "../types/proto/proto_enum";
import * as acut from "./act_utils";

export class Concert {

  live: Live
  private charts: Chart[]
  private previous: Chart
  private current: Chart

  private actables?: {
    index: number,
    skills: number[],
  }[]

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
  }

  public perform() {
    // TODO: push initial chart 

    this.live.quest.musicChartPatterns.forEach(musicPtn => {
      // init current chart
      this.previous = this.charts[-1]
      this.current = {
        chartType: musicPtn.type,
        sequence: musicPtn.sequence,
        position: musicPtn.position,
        cardStatuses: [],
        userStatuses: [],
      }

      if (this.current.chartType > MusicChartType.Beat) {
        this.checkSkillExistence()

      }

    })
  }
  private checkSkillExistence() {
    this.actables = []
    this._checkSkillExistence(false)
    if (this.live.isBattle) {
      this._checkSkillExistence(true)
    }
  }
  private _checkSkillExistence(isOpponent: boolean) {
    let position = isOpponent ? this.current.position + 5 : this.current.position
    let deckCard = acut.getDeckCardByIndex(position, this.live)
    let actables = {
      index: position,
      skills: [],
    }
    let nodeType: SkillCategoryType
    switch (this.current.chartType) {
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
    if (actables.skills.length > 0) {
      this.actables.push(actables)
    } else {
      if (!isOpponent) {
        this.current.failureFlag = SkillFailureType.CategoryMismatch
      }
    }
  }
  private checkSkillStamina() {
    if (!this.actables || this.actables.length === 0) {
      return
    }
    let _actables = []
    this.actables.forEach(({ index, skills }) => {
      let card = acut.getDeckCardByIndex(index, this.live)
      skills.forEach(skillIndex => {
        let skillLevel = acut.getCardSkillLevel(skillIndex, card)
        let currentSt = this.current.cardStatuses[index].stamina
        var consumeSt = skillLevel.staminaPermil
          ? Math.floor(card.deckStamina * skillLevel.staminaPermil / 1000)
          : skillLevel.stamina
        // if target possesses stamina consuming adjustment effects
        consumeSt = 

        // if stamina is sufficient
        if (consumeSt <= currentSt) {
          if (!_actables.some(it => it.index === index)) {
            _actables.push({ index: index, skills: [] })
          }
          // push skillIndex to actables 
          _actables.find(it => it.index === index).skills.push(skillIndex)
        }
      })
      if (_actables.length < 1 && index <= 5) {
        this.current.failureFlag = SkillFailureType.StaminaShortage
      }
    })
  }
}