import { assert } from "console";
import {
  ActSkill,
  CardStatus,
  Chart,
  EfficacyDetail,
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
import * as skUt from "../utils/skill_utils";
import * as act from "./action";
import { Index2Lane } from "./consts/chart_consts";
import * as effList from "./consts/efficacy_list";
import { getTargetIndexes } from "./target_proc";
import * as tra from "./trigger_analyze"
import { getTriggeredIndexes } from "./trigger_proc";

export type Actable = {
  index: number,
  skills: number[],
}

// export type ConcertSkill = WapSkill & {
//   skill: WapSkillLevel
//   deckPosition: number
//   skillIndex: number
//   isFirstTime: boolean
//   isOpponentSide: boolean
// }

// export type ConcertCard = Omit<DeckCard, "skill1" | "skill2" | "skill3"> & {
//   skill1: ConcertSkill
//   skill2: ConcertSkill
//   skill3: ConcertSkill
// }

export type ConcertPSkillLevel = WapSkillLevel & {
  deckPosition: number,
  skillIndex: number,
  isFirstTime: boolean,
  isOpponentSide: boolean,
}

export class Concert {
  live: Live
  private charts: Chart[]
  private previous: Chart
  private current: Chart
  private order: number

  private actables?: Actable[]
  private pSkillLiveBonus?: ConcertPSkillLevel[]
  private pSkills: ConcertPSkillLevel[]
  private pSkillPerformed: number[]

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
    this.initPSkills()
    this.order = 0
  }

  /// push all P-skills to a list
  private initPSkills() {
    let newConcertSkill = (
      card: {
        index: number,
        liveCard: LiveCard,
      },
      skillIndex: number,
    ): ConcertPSkillLevel => {
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
        default:
          throw Error(`Card skillIndex '${skillIndex}' can never be arised.`)
      }
      return {
        ...wapSkillLevel,
        deckPosition: card.index,
        skillIndex: skillIndex,
        isFirstTime: true,
        isOpponentSide: chartUt.indexIsOpponentSide(card.index),
      }
    }
    // a list used to determine p-skills activate order 
    let tmpPskills: { mental: number, skill: ConcertPSkillLevel }[] = []
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
        ...skLv,
        deckPosition: 999,
        isFirstTime: true,
        skillIndex: 3001 + index,
        isOpponentSide: false,
      })
      // if is live battle
      if (this.live.isBattle) {
        this.pSkillLiveBonus.push({
          ...skLv,
          deckPosition: 1000,
          isFirstTime: true,
          skillIndex: 3001 + index,
          isOpponentSide: true,
        })
      }
    })
  }

  public goes1Turn() {
    // TODO: push initial chart 

    this.live.quest.musicChartPatterns.forEach(musicPtn => {
      // init current chart
      this.previous = this.charts[this.charts.length - 1]
      this.actables = undefined
      this.pSkillPerformed = []
      this.current = {
        chartType: musicPtn.type,
        sequence: musicPtn.sequence,
        actPosition: musicPtn.position,
        cardStatuses: this.previous.cardStatuses,
        userStatuses: this.previous.userStatuses,
        stageSkillStatuses: this.previous.stageSkillStatuses,
        beats: [],
      }

      //0️⃣ pre-processes
      this.turnPreprocess()

      // A & SP node
      if (this.current.chartType > MusicChartType.Beat) {
        this.actables = []
        //1️⃣
        this.checkActSkillExistence()
        //2️⃣
        this.checkActSkillStamina()
        // A node
        if (this.current.chartType === MusicChartType.ActiveSkill) {
          //3️⃣
          this.checkActSkillCoolTime()
        }
        // battle
        if (this.live.isBattle) {
          //4️⃣
          this.determineActSkillPrivilege()
        }
        // at this point, actables's length shall be less equal than 1 
        assert(this.actables?.length ?? 0 <= 1)
      }



      //5️⃣ passive skills performances (before-phase)
      this.performStagePSkillsPhase1()
      this.performCharaPSkillsPhase1()

      //6️⃣ beat
      this.nodeAct()

      //7️⃣ 
      this.rotateCoolTime()

      //8️⃣
      this.rotateEffTime()

      //9️⃣
      this.performStagePSkillsPhase2()
      this.performCharaPSkillsPhase2()

      //🔟
      this.turnAftermath()
    })
  }

  //0️⃣ pre-processes
  private turnPreprocess() {
    // remove effects which have no remain count
    this.current.cardStatuses.forEach(cardStat => {
      cardStat.effects = cardStat.effects?.filter(eff => eff.remain !== 0)
    })

  }

  //1️⃣
  private checkActSkillExistence() {
    this._checkActSkillExistence(false)
    if (this.live.isBattle) {
      this._checkActSkillExistence(true)
    }
  }
  private _checkActSkillExistence(isOpponent: boolean) {
    let position = Index2Lane[this.current.actPosition]
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
      this.actables?.push(_actables)
    } else {
      if (!isOpponent) {
        this.current.failureFlag = SkillFailureType.CategoryMismatch
      }
    }
  }

  //2️⃣
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
        let consumeSt = calcUt.calcStaminaConsume(
          skillLevel, card, cardStatus, this.live.quest.skillStaminaWeightPermil)
        // if stamina is sufficient
        if (consumeSt <= currentSt) {
          return skillIndex
        }
      }).filter(it => it) as number[]
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
    }).filter(it => it) as Actable[]
    this.actables = _actables
  }

  //3️⃣
  private checkActSkillCoolTime() {
    if (!this.actables || this.actables.length === 0) {
      return
    }
    let _actables: Actable[] = this.actables.map(({ index, skills }) => {
      // let card = chut.getLiveCardByIndex(index, this.live)
      let cardStatus = this.current.cardStatuses[index]
      let skillNums = skills.map(skillIndex => {
        let skillStatus = cardStatus.skillStatuses.find(it => it.skillIndex === skillIndex)
        if (skillStatus?.coolTime === 0) {
          return skillIndex
        }
      }).filter(it => it) as number[]
      if (skillNums.length < 1 && index <= 5) {
        this.current.failureFlag = SkillFailureType.InCoolTime
      }
      if (skillNums.length > 0) {
        return {
          index: index,
          skills: skillNums,
        }
      }
    }).filter(it => it) as Actable[]
    this.actables = _actables
  }

  //4️⃣
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
    // if opponent wins, set failure flag
    if (privileges[0].index > 5) {
      this.current.failureFlag = SkillFailureType.OpponentActivation
    }
    _actables.push(this.actables?.find(it => it.index === privileges[0].index) as Actable)
    this.actables = _actables
  }

  //5️⃣
  private performStagePSkillsPhase1() {
    this.pSkillLiveBonus &&
      this._validateThenPerformPSkill(this.pSkillLiveBonus, false, true)
  }
  //5️⃣
  private performCharaPSkillsPhase1() {
    this._validateThenPerformPSkill(this.pSkills, true, true)
  }
  private _validateThenPerformPSkill(
    pSkills: ConcertPSkillLevel[],
    isCharaSkill: boolean,
    isBefore: boolean
  ) {
    for (let skill of pSkills) {
      // 判断是否为当前技能的发动时间点（p1 or p2）
      // if in trigger-before list or just is after turn
      if (!isBefore ||
        (effList.TriggerBefore.includes(skill.trigger?.type ?? SkillTriggerType.Unknown) ||
          // or has no trigger conditions and is first time activated
          (skill.isFirstTime && !skill.trigger))
      ) {
        // 判断是角色技能还是 Live 固定技能
        if (isCharaSkill) {
          //🚩 is chara skill
          // 判断同一张卡本回合是否已经发动过技能
          if (this.pSkillPerformed.includes(skill.deckPosition)) {
            continue
          }
          let cardStat = chartUt.getCardStatusByIndex(skill.deckPosition, this.current)
          // 判断是否处于 SkillImpossible 状态
          if (skUt.isSkillImpossible(cardStat)) {
            continue
          }
          let skillStat = chartUt.getCardSkillStatus(cardStat, skill.skillIndex)
          // 判断是否处于 CT
          //⚠️ cool time should be checked in order after each previous skill activated in the same turn 
          if (skillStat.coolTime > 0 &&
            // 判断是否还有剩余次数
            skUt.skillHasRemainCount(skill, skillStat)) {
            continue
          }
          // conditions all satisfied
          this._performPSkill(skill, skillStat, true)
        } else {
          //🚩 is not chara skill
          let skillStat = this.current.stageSkillStatuses?.find(it =>
            it.skillIndex === skill.skillIndex
          )
          if (skillStat) {
            if (skillStat.coolTime > 0 &&
              skUt.skillHasRemainCount(skill, skillStat)) {
              continue
            }
            this._performPSkill(skill, skillStat, false)
          }
        }
      }
    }
  }
  private _performPSkill(
    skill: ConcertPSkillLevel,
    skillStatus: SkillStatus,
    isCharaSkill: boolean
  ) {
    //🟠 roll the dice!
    if (!skUt.roll(skill.probabilityPermil)) {
      return
    }

    // get the card which performs the skill
    let cardStatus: CardStatus | undefined
    let deckCard: LiveCard | undefined
    if (isCharaSkill) {
      cardStatus = chartUt.getCardStatusByIndex(skill.deckPosition, this.current)
      deckCard = chartUt.getLiveCardByIndex(skill.deckPosition, this.live)
      //⚠️ check stamina
      let stamina = calcUt.calcStaminaConsume(
        skill, deckCard, cardStatus, this.live.quest.skillStaminaWeightPermil)
      if (cardStatus.stamina < stamina) {
        return
      }
    }

    //🟠 get triggered indexes
    let triggeredIndexes = getTriggeredIndexes(
      skill.trigger,
      skill.categoryType,
      skillStatus,
      this.live,
      this.current,
      skill.deckPosition,
      skill.isOpponentSide,
      this.actables?.at(0),
      cardStatus,
      deckCard
    )
    if (!triggeredIndexes) {
      // TODO: notify new triggers
      console.error("Hasn't been implemented.")
      return
    }
    if (triggeredIndexes.length === 0) {
      // not triggered
      return
    }

    // set skill activation
    if (!this.current.actPSkills) {
      this.current.actPSkills = []
    }

    // increase order
    this.order += 1

    // calculate critical or not 
    let isCritical = chartUt.getCritical(
      cardStatus?.technique ?? 0, this.live.quest.difficultyLevel)

    // calculate consumption of stamina
    var stamina = 0
    if (isCharaSkill && deckCard && cardStatus) {
      stamina = calcUt.calcStaminaConsume(
        skill, deckCard, cardStatus, this.live.quest.skillStaminaWeightPermil)
    }

    //🟠 create a new ActSkill
    let actPSkill: ActSkill = {
      cardIndex: skill.deckPosition,
      skillIndex: skill.skillIndex,
      isCritical: isCritical,
      isComboBreak: false,
      order: this.order,
      stamina: stamina,
      details: [],
    }

    //🟠 iterate skill details
    for (let [index, detail] of skill.wapSkillDetails.entries()) {
      //✅ get detail triggered indexes
      let detailTriggeredIndexes = getTriggeredIndexes(
        detail.trigger,
        skill.categoryType,
        skillStatus,
        this.live,
        this.current,
        skill.deckPosition,
        skill.isOpponentSide,
        this.actables?.at(0)
      )
      if (!detailTriggeredIndexes) {
        // TODO: notify new triggers
        console.error("Hasn't been implemented.")
        continue
      }
      if (detailTriggeredIndexes.length === 0) {
        // not triggered
        continue
      }

      //🟠 get target indexes
      let targetIndexes = getTargetIndexes(
        detail.efficacy.skillTarget,
        skillStatus,
        this.live,
        this.current,
        skill.deckPosition,
        skill.isOpponentSide,
        triggeredIndexes,
        detailTriggeredIndexes
      )

      //🟠 perform skill
      act.performP()

      // push efficacyDetail to ActSkill
      // ？？？这不都已经搞定了吗，还perform个啥
      actPSkill.details.push({
        efficacyIndex: index,
        efficacyType: detail.efficacy.type,
        targetIndexes: targetIndexes,
        value: ?,
      })
    }

    //🟠 set skillStatus
    //❓ TODO: can this operation change this.xxx directly? 
    skillStatus.coolTime = skill.coolTime
    skillStatus.remainCount && skillStatus.remainCount--
  }

  //6️⃣
  private nodeAct() {
    this.current.chartType === MusicChartType.Beat
      ? this._beatAct()
      : this._activeSkillAct()
  }
  // common beat 
  private _beatAct() {
    if (!this.current.beats) {
      this.current.beats = []
    }
    this.current.cardStatuses.forEach(cardStat => {
      this.order += 1
      this.current.beats!.push({
        cardIndex: cardStat.cardIndex,
        order: this.order,
        isCritical: chartUt.getCritical(
          cardStat.technique, this.live.quest.difficultyLevel),
        score: calcUt.calcBeatScore(),
      })
    })
  }
  // A or SP skill 
  private _activeSkillAct() {
    this.order += 1
    if (this.actables && this.actables.length > 0) {
      let actable = this.actables[0]
      let deckCard = chartUt.getLiveCardByIndex(actable.index, this.live)
      let cardStatus = chartUt.getCardStatusByIndex(actable.index, this.current)
      let skill = chartUt.getSkillByIndex(actable.skills[0], deckCard)
      let skillStatus = chartUt.getCardSkillStatus(cardStatus, actable.skills[0])
      let skillLevel = chartUt.getCardSkillLevel(actable.skills[0], deckCard)

      //⚠️ check stamina
      // note despite this has been checked once in the pre-checking phase,
      // stamina still could be insufficient if any P-skills are performed in 
      // the P-skill Performance Phase 1 
      let staminaConsumption = calcUt.calcStaminaConsume(
        skillLevel, deckCard, cardStatus, this.live.quest.skillStaminaWeightPermil)

      // if stamina is sufficient
      if (staminaConsumption <= cardStatus.stamina) {
        let isCritical = chartUt.getCritical(
          cardStatus.technique, this.live.quest.difficultyLevel)

        let actSkill: ActSkill = {
          cardIndex: actable.index,
          skillIndex: actable.skills[0],
          order: this.order,
          stamina: staminaConsumption,
          isCritical: isCritical,
          isComboBreak: false,
          details: [],
          score: 0, // TODO: implement score calculation
        }

        // TODO
        this._performASPSkill(trh)

        // set skillStatus
        //❓ TODO: can this operation change this.xxx directly? 
        skillStatus.coolTime = skillLevel.coolTime

        //❓ A | SP skills have no limitation (currently), so this is probably redundant
        // if (skillStatus.remainCount) {
        //   skillStatus.remainCount -= 1
        // }

        this.current.actSkill = actSkill
        return
      }
    }
    // no skills available
    this.current.actSkill = {
      cardIndex: 0,
      skillIndex: 0,
      order: this.order,
      stamina: 0,
      isCritical: false,
      isComboBreak: true,
      details: [],
    }
  }
  private _performASPSkill() {

  }

  //7️⃣ 
  private rotateCoolTime() {
    // card skill
    this.current.cardStatuses.forEach(cardStat => {
      cardStat.skillStatuses.forEach(skillStat => {
        skillStat.coolTime && skillStat.coolTime--
      })
    })
    // live bonus skill
    this.current.stageSkillStatuses?.forEach(stageSkill => {
      stageSkill.coolTime && stageSkill.coolTime--
    })
  }

  //8️⃣
  //⚠️ NOTE: this method will NOT remove effects have no remain count,
  // instead, they will be removed at the beginning of each turn.
  private rotateEffTime() {
    this.current.cardStatuses.forEach(cardStat => {
      cardStat.effects?.forEach(eff => {
        eff.remain && eff.remain--
      })
    })
  }

  //9️⃣
  private performStagePSkillsPhase2() {
    this.pSkillLiveBonus &&
      this._validateThenPerformPSkill(this.pSkillLiveBonus, false, false)
  }
  //9️⃣
  private performCharaPSkillsPhase2() {
    this._validateThenPerformPSkill(this.pSkills, true, false)
  }

  //🔟
  private turnAftermath() {

  }
}