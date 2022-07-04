import {
  Chart,
  Live,
  LiveCard,
} from "../types/live_types";
import {
  MusicChartType,
  SkillCategoryType,
  SkillFailureType,
} from "../types/proto/proto_enum";
import {
  WapSkill,
  WapSkillLevel
} from "../types/wrapper_types";
import {
  calcActSkillPrivilege,
  calcStaminaConsume
} from "../utils/calc_utils";
import * as chut from "../utils/chart_utils";
import { TriggerBefore } from "./efficacy_list";

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
}

export class Concert {
  live: Live
  private charts: Chart[]
  private previous: Chart
  private current: Chart

  private actables?: Actable[]
  private pSkills: ConcertSkill[]

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
    this.initPSkills()
  }

  /// push all P-skills to a list
  private initPSkills() {
    this.pSkills = []
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
          wapSkillLevel = chut.getSkillLevel(card.liveCard.skill1, level)
          break;
        case 2:
          level = card.liveCard.skillLevel2
          wapSkillLevel = chut.getSkillLevel(card.liveCard.skill2, level)
          break;
        case 3:
          level = card.liveCard.skillLevel3
          wapSkillLevel = chut.getSkillLevel(card.liveCard.skill3, level)
          break;
      }
      return {
        deckPosition: card.index,
        skillIndex: skillIndex,
        skillLevel: level,
        wapSkillLevel: wapSkillLevel,
        isFirstTime: true,
        remainCount: wapSkillLevel.limitCount ? wapSkillLevel.limitCount : 999,
      }
    }
    this.live.liveDeck.liveCards.forEach(card => {
      if (card.liveCard.skill1.categoryType === SkillCategoryType.Passive) {
        this.pSkills.push(newConcertSkill(card, 1))
      }
      if (card.liveCard.skill2.categoryType === SkillCategoryType.Passive) {
        this.pSkills.push(newConcertSkill(card, 2))
      }
      if (card.liveCard.skill3.categoryType === SkillCategoryType.Passive) {
        this.pSkills.push(newConcertSkill(card, 3))
      }
    })
  }

  public perform() {
    // TODO: push initial chart 

    this.live.quest.musicChartPatterns.forEach(musicPtn => {
      // init current chart
      this.previous = this.charts[-1]
      this.current = {
        chartType: musicPtn.type,
        sequence: musicPtn.sequence,
        actPosition: musicPtn.position,
        cardStatuses: this.previous.cardStatuses,
        userStatuses: this.previous.userStatuses,
      }

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
    let deckCard = chut.getLiveCardByIndex(position, this.live)
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
      let card = chut.getLiveCardByIndex(index, this.live)
      let cardStatus = this.current.cardStatuses[index]
      let skillNums = skills.map(skillIndex => {
        let skillLevel = chut.getCardSkillLevel(skillIndex, card)
        let currentSt = cardStatus.stamina
        // calculate buffed stamina consumption
        let consumeSt = calcStaminaConsume(skillLevel, card, cardStatus)
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
    // this.actables.forEach(({ index, skills }) => {
    //   let card = chut.getLiveCardByIndex(index, this.live)
    //   let cardStatus = this.current.cardStatuses[index]
    //   skills.forEach(skillIndex => {
    //     let skillLevel = chut.getCardSkillLevel(skillIndex, card)
    //     let currentSt = cardStatus.stamina
    //     // calculate buffed stamina consumption
    //     let consumeSt = calcStaminaConsume(skillLevel, card, cardStatus)
    //     // if stamina is sufficient
    //     if (consumeSt <= currentSt) {
    //       // check whether _actables contains current cardIndex first
    //       if (!_actables.some(it => it.index === index)) {
    //         _actables.push({ index: index, skills: [] })
    //       }
    //       // push skillIndex to actables 
    //       _actables.find(it => it.index === index).skills.push(skillIndex)
    //     }
    //   })
    //   // if ally side no skills available 
    //   if (_actables.length < 1 && index <= 5) {
    //     this.current.failureFlag = SkillFailureType.StaminaShortage
    //   }
    // })
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
    // this.actables.forEach(({ index, skills }) => {
    //   let card = chut.getLiveCardByIndex(index, this.live)
    //   let cardStatus = this.current.cardStatuses[index]
    //   skills.forEach(skillIndex => {
    //     let skillStatus = cardStatus.skillStatuses.find(it => it.skillIndex === skillIndex)
    //     if (skillStatus.coolTime === 0) {
    //       // check whether _actables contains current cardIndex first
    //       if (!_actables.some(it => it.index === index)) {
    //         _actables.push({ index: index, skills: [] })
    //       }
    //       // push skillIndex to _actables 
    //       _actables.find(it => it.index === index).skills.push(skillIndex)
    //     }
    //   })
    //   // if ally side no skills available 
    //   if (_actables.length < 1 && index <= 5) {
    //     this.current.failureFlag = SkillFailureType.InCoolTime
    //   }
    // })
    this.actables = _actables
  }

  private determineActSkillPrivilege() {
    if (!this.actables || this.actables.length <= 1) {
      return
    }
    let _actables: Actable[] = []
    let laneType = chut.getLaneAttributeByPosition(this.live.quest, this.current.actPosition)
    let privileges: {
      index: number,
      power: number,
    }[] = this.actables.map(({ index }) => {
      let card = chut.getLiveCardByIndex(index, this.live)
      let cardStatus = this.current.cardStatuses[index]
      return {
        index: index,
        power: calcActSkillPrivilege(laneType, card, cardStatus),
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

  private passiveSkillActP1() {
    let actPskills = this.pSkills.filter(skill => {
      if ((skill.wapSkillLevel.trigger.type in TriggerBefore ||  // if in trigger before list
        // or has no trigger conditions and is first time activated
        (skill.isFirstTime && !skill.wapSkillLevel.trigger)) &&  
        // and must has remain count
        skill.remainCount
      ) {
        let skillStat = chut.getCardSkillStatusByIndex(skill.deckPosition, skill.skillIndex, this.current)
        // ❌ cool time should be checking after every skill activated 
        if (skillStat.coolTime <= 0) {
          return true
        }
      }
      return false
    })

  }
}
