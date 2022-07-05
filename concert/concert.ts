CardStatus,
import {
  Chart,
  Live,
  LiveCard,
  SkillStatus,
} from "../types/live_types";
import {
  MusicChartType,
  SkillCategoryType,
  SkillFailureType,
  SkillTriggerType,
} from "../types/proto/proto_enum";
import {
  WapSkill,
  WapSkillLevel
} from "../types/wrapper_types";
import * as calcUt from "../utils/calc_utils";
import * as chartUt from "../utils/chart_utils";
import * as effUt from "../utils/eff_utils";
import * as effList from "./efficacy_list";
import * as tra from "./trigger_analyze"

type Actable = {
  index: number,
  skills: number[],
}

type ConcertSkill = {
  deckPosition: number,
  skillIndex: number,
  skillLevel: number,
  wapSkillLevel: WapSkillLevel,
  isFirstTime: boolean,
  remainCount: number,
  isOpponentSide: boolean,
}

export class Concert {
  live: Live
  private charts: Chart[]
  private previous: Chart
  private current: Chart

  private actables?: Actable[]
  private pSkillLiveBonus?: ConcertSkill[]
  private pSkills: ConcertSkill[]
  private pSkillPerformed: number[]

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
    this.initPSkills()
  }

  /// push all P-skills to a list
  private initPSkills() {
    let newConcertSkill = (
      card: {
        index: number,
        liveCard: LiveCard,
      },
      skillIndex: number,
    ): ConcertSkill => {
      let level: number
      let wapSkillLevel: WapSkillLevel
      switch (skillIndex) {
        case 1:
          level = card.liveCard.skillLevel1
          wapSkillLevel = chartUt.getSkillLevel(card.liveCard.skill1, level)
          break;
        case 2:
          level = card.liveCard.skillLevel2
          wapSkillLevel = chartUt.getSkillLevel(card.liveCard.skill2, level)
          break;
        case 3:
          level = card.liveCard.skillLevel3
          wapSkillLevel = chartUt.getSkillLevel(card.liveCard.skill3, level)
          break;
      }
      return {
        deckPosition: card.index,
        skillIndex: skillIndex,
        skillLevel: level,
        wapSkillLevel: wapSkillLevel,
        isFirstTime: true,
        remainCount: wapSkillLevel.limitCount ? wapSkillLevel.limitCount : 999,
        isOpponentSide: effUt.indexIsOpponentSide(card.index),
      }
    }
    // a list used to determine p-skills activate order 
    let tmpPskills: { mental: number, skill: ConcertSkill }[] = []
    this.live.liveDeck.liveCards.forEach(card => {
      if (card.liveCard.skill1.categoryType === SkillCategoryType.Passive) {
        tmpPskills.push({ mental: card.liveCard.deckMental, skill: newConcertSkill(card, 1) })
      }
      if (card.liveCard.skill2.categoryType === SkillCategoryType.Passive) {
        tmpPskills.push({ mental: card.liveCard.deckMental, skill: newConcertSkill(card, 2) })
      }
      if (card.liveCard.skill3.categoryType === SkillCategoryType.Passive) {
        tmpPskills.push({ mental: card.liveCard.deckMental, skill: newConcertSkill(card, 3) })
      }
    })
    this.pSkills = tmpPskills
      // lower index first
      .sort((a, b) => a.skill.deckPosition - b.skill.deckPosition)
      // higher mental first
      .sort((a, b) => b.mental - a.mental)
      .map(it => it.skill)
    
    this.live.quest.liveBonuses?.forEach((liveAb, index) => {
      if (!this.pSkillLiveBonus) {
        this.pSkillLiveBonus = []
      }
      let skLv = chartUt.getSkillLevel(liveAb.skill, liveAb.level)
      this.pSkillLiveBonus.push({
        deckPosition: 999,
        isFirstTime: true,
        remainCount: skLv.limitCount ? skLv.limitCount : 999,
        skillIndex: 999 - index * 2,
        skillLevel: liveAb.level,
        wapSkillLevel: skLv,
        isOpponentSide: false,
      })
      // if is live battle
      if (this.live.isBattle) {
        this.pSkillLiveBonus.push({
          deckPosition: 999,
          isFirstTime: true,
          remainCount: skLv.limitCount ? skLv.limitCount : 999,
          skillIndex: 999 - index * 2 - 1,
          skillLevel: liveAb.level,
          wapSkillLevel: skLv,
          isOpponentSide: true,
        })
      }
    })
  }

  public perform() {
    // TODO: push initial chart 

    this.live.quest.musicChartPatterns.forEach(musicPtn => {
      // init current chart
      this.previous = this.charts[this.charts.length - 1]
      this.pSkillPerformed = []
      this.current = {
        chartType: musicPtn.type,
        sequence: musicPtn.sequence,
        actPosition: musicPtn.position,
        cardStatuses: this.previous.cardStatuses,
        userStatuses: this.previous.userStatuses,
        stageSkillStatuses: this.previous.stageSkillStatuses,
      }
      
      // 0️⃣ pre-processes
      this.turnPreprocess()

      // A & SP node
      if (this.current.chartType > MusicChartType.Beat) {
        // 1️⃣
        this.checkActSkillExistence()
        // 2️⃣
        this.checkActSkillStamina()
        // A node
        if (this.current.chartType === MusicChartType.ActiveSkill) {
          // 3️⃣
          this.checkActSkillCoolTime()
        }
        // battle
        if (this.live.isBattle) {
          // 4️⃣
          this.determineActSkillPrivilege()
        }
      }

      // 5️⃣ passive skills performances (before-phase)
      this.performStagePSkillsPhase1()
      this.performCharaPSkillsPhase1()

      // 6️⃣ beat
      this.beatAct()

      // 7️⃣ 
      this.rotateCoolTime()

      // 8️⃣
      this.rotateEffTime()

      // 9️⃣
      this.stagePassiveSkillActAfter()
      this.passiveSkillActAfter()

      // 🔟
      this.turnAftermath()
    })
  }
  private checkActSkillExistence() {
    this.actables = []
    this._checkActSkillExistence(false)
    if (this.live.isBattle) {
      this._checkActSkillExistence(true)
    }
  }
  private _checkActSkillExistence(isOpponent: boolean) {
    let position = isOpponent ? this.current.actPosition + 5 : this.current.actPosition
    let deckCard = chartUt.getLiveCardByIndex(position, this.live)
    let _actables: Actable = {
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
      _actables.skills.push(1)
    }
    if (deckCard.skill2.categoryType === nodeType) {
      _actables.skills.push(2)
    }
    if (deckCard.skill3.categoryType === nodeType) {
      _actables.skills.push(3)
    }
    if (_actables.skills.length > 0) {
      this.actables.push(_actables)
    } else {
      if (!isOpponent) {
        this.current.failureFlag = SkillFailureType.CategoryMismatch
      }
    }
  }

  private checkActSkillStamina() {
    if (!this.actables || this.actables.length === 0) {
      return
    }
    let _actables: Actable[] = this.actables.map(({ index, skills }) => {
      let card = chartUt.getLiveCardByIndex(index, this.live)
      let cardStatus = this.current.cardStatuses[index]
      let skillNums = skills.map(skillIndex => {
        let skillLevel = chartUt.getCardSkillLevel(skillIndex, card)
        let currentSt = cardStatus.stamina
        // calculate buffed stamina consumption
        let consumeSt = calcUt.calcStaminaConsume(skillLevel, card, cardStatus)
        // if stamina is sufficient
        if (consumeSt <= currentSt) {
          return skillIndex
        }
      }).filter(it => it)
      // if ally side no skills available 
      if (skillNums.length < 1 && index <= 5) {
        this.current.failureFlag = SkillFailureType.StaminaShortage
      }
      if (skillNums.length > 0) {
        return {
          index: index,
          skills: skillNums,
        }
      }
    }).filter(it => it)
    this.actables = _actables
  }

  private checkActSkillCoolTime() {
    if (!this.actables || this.actables.length === 0) {
      return
    }
    let _actables: Actable[] = this.actables.map(({ index, skills }) => {
      // let card = chut.getLiveCardByIndex(index, this.live)
      let cardStatus = this.current.cardStatuses[index]
      let skillNums = skills.map(skillIndex => {
        let skillStatus = cardStatus.skillStatuses.find(it => it.skillIndex === skillIndex)
        if (skillStatus.coolTime === 0) {
          return skillIndex
        }
      }).filter(it => it)
      if (skillNums.length < 1 && index <= 5) {
        this.current.failureFlag = SkillFailureType.InCoolTime
      }
      if (skillNums.length > 0) {
        return {
          index: index,
          skills: skillNums,
        }
      }
    }).filter(it => it)
    this.actables = _actables
  }

  private determineActSkillPrivilege() {
    if (!this.actables || this.actables.length <= 1) {
      return
    }
    let _actables: Actable[] = []
    let laneType = chartUt.getLaneAttributeByPosition(this.live.quest, this.current.actPosition)
    let privileges: {
      index: number,
      power: number,
    }[] = this.actables.map(({ index }) => {
      let card = chartUt.getLiveCardByIndex(index, this.live)
      let cardStatus = this.current.cardStatuses[index]
      return {
        index: index,
        power: calcUt.calcActSkillPrivilege(laneType, card, cardStatus),
      }
    })
    // sort privileges (higher first)
    privileges.sort((a, b) => {
      return b.power - a.power
    })
    // if oppenent wins, set failure flag
    if (privileges[0].index > 5) {
      this.current.failureFlag = SkillFailureType.OpponentActivation
    }
    _actables.push(this.actables.find(it => it.index === privileges[0].index))
    this.actables = _actables
  }

  private validateThenPerformPSkill(
    pSkills: ConcertSkill[],
    isCharaSkill: boolean,
  ) {
    for (let skill of pSkills) {
      // if in trigger-before list
      if ((skill.wapSkillLevel.trigger.type in effList.TriggerBefore ||  
        // or has no trigger conditions and is first time activated
        (skill.isFirstTime && !skill.wapSkillLevel.trigger)) &&
        // and must has remain count
        skill.remainCount
      ) {
        if (isCharaSkill) {
          // and the same card haven't performed p-skills in this turn
          if (skill.deckPosition in this.pSkillPerformed) {
            continue
          }
          let cardStat = chartUt.getCardStatusByIndex(skill.deckPosition, this.current)
          // ⚠️check possibility
          if (effUt.isSkillImpossible(cardStat)) {
            continue
          }
          let skillStat = chartUt.getCardSkillStatus(cardStat, skill.skillIndex)
          // ⚠️cool time should be checked in order after each previous skill activated in the same turn 
          if (skillStat.coolTime > 0) {
            continue
          }
          // conditions all satisfied
          this.performPSkill(skill, skillStat, cardStat)
        } else {
          let skillStat = this.current.stageSkillStatuses.find(it =>
            it.skillIndex === skill.skillIndex
          )
          if (skillStat.coolTime <= 0) {
            this.performPSkill(skill, skillStat)
          }
        }
      }
    }
  }

  // this 
  private performPSkill(
    skill: ConcertSkill,
    skillStatus: SkillStatus,
    cardStatus?: CardStatus
  ) {
    // rolling dice!
    if (!effUt.roll(skill.wapSkillLevel.probabilityPermil)) {
      return
    }
    let current = this.current
    let live = this.live
    for (let skillDetail of skill.wapSkillLevel.wapSkillDetails) {
      // if skill has trigger
      let trigger = skill.wapSkillLevel.trigger
      if (trigger) {
        // who triggered this
        let triggeredList: number[] = []
        // check if trigger conditions are met according to skill's trigger type
        switch (skill.wapSkillLevel.trigger.type) {
          case SkillTriggerType.Beat:
            triggeredList.push(skill.deckPosition)
            break
          case SkillTriggerType.LiveStart:
            if (current.sequence === 1) {
              triggeredList.push(skill.deckPosition)
            }
            break
          case SkillTriggerType.Combo:
            let combo = tra.getTriggerLastNum(trigger.id)
            let userStat = current.userStatuses[
              skill.isOpponentSide ? 1 : 0
            ]
            if (userStat.combo >= combo) {
              triggeredList.push(skill.deckPosition)
            }
            break
          case SkillTriggerType.MoreThanCharacterCount:
            throw Error("'SkillTriggerType.MoreThanCharacterCount' hasn't been implemented.")
          case SkillTriggerType.BeforeActiveSkillBySomeone:
            if (current.chartType === MusicChartType.ActiveSkill) {
              let position = current.actPosition
              if (this.actables?.some(it => it.index === position)) {
                
              }
            }
        }
      }
    }
  }

  private performStagePSkillsPhase1() {
    this.validateThenPerformPSkill(this.pSkillLiveBonus, false)
  }

  private performCharaPSkillsPhase1() {
    this.validateThenPerformPSkill(this.pSkills, true)
  }
}
