import _ from "lodash"
import { Actable, Chart, Effect, Live } from "../types/concert_types";
import { MusicChartType, SkillEfficacyType } from "../types/proto/proto_enum";
import { WapMusicChartPattern } from "../types/wap/quest_waps";
import * as util from "../utils/chart_utils";
import * as _init from "./partial/init_concert"
import migration from "./partial/a_migration";
import checkActSkillExistence from "./partial/b_check_existence";
import { LiveDeck } from "../types/card_types";
import checkActSkillStamina from "./partial/c_check_act_skill_stamina";
import checkActSkillCoolTime from "./partial/d_check_act_skill_cool_time";
import determineActSkillPrivilege from "./partial/f_determine_act_skill_privilege";
import { performASPSkill, performPSkill, performStageSkill, _performSkill } from "./partial/perform_skill";
import { implementEfficacy } from "./partial/impl_efficacy";
import { preparePSkill } from "./partial/prepare_p_skill";
import checkActSkillPossibility from "./partial/e_check_act_skill_possibility";
import { rotateCT } from "./partial/rotate_ct";
import { rotateRemains } from "./partial/rotate_remains";
import { performBeat } from "./partial/perform_beat";
import { ComboType, handleCombo } from "./partial/handle_combo";
import { applyContinuousEffects } from "./partial/apply_continuous_effects";
import { Chart2SkillType, Index2Lane } from "./consts/chart_consts";
import getActableIndexes from "./partial/get_actable_indexes";

export class Concert {

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
    this.snapshot = live.snapshot
    this.liveDeck = live.liveDeck
  }

  // properties
  live: Live
  charts: Chart[]
  snapshot: Chart[]
  liveDeck: LiveDeck
  protected previous!: Chart;
  current!: Chart;
  protected order!: number;
  protected actables!: Actable[];
  pSkills!: { cardIndex: number; skillIndex: number; }[];
  pSkillPerformed!: { cardIndex: number; skillIndex: number; }[];
  migratedEffs!: {
    index: number;
    type: SkillEfficacyType.StrengthEffectMigrationBeforeActiveSkill |
    SkillEfficacyType.StrengthEffectMigrationBeforeSpecialSkill;
    effs: Effect[];
    fromOrder: number;
    sourceIndex: number;
    sourceSkillIndex: number;
  }[];

  // methods
  go() {
    this.init()
    this.live.quest.musicChartPatterns.forEach(musicPtn => {
      // if type = 0, dismiss
      if (musicPtn.type !== MusicChartType.Unknown) {
        this.prepare(musicPtn)
        this.rotate()
      }
    })
  }

  private prepare(musicPtn: WapMusicChartPattern) {
    if (musicPtn.sequence != 1) {
      // this.previous = this.charts[this.charts.length - 1]
      this.previous = this.current
    }
    this.actables = []
    this.pSkillPerformed = []
    this.current = {
      chartType: musicPtn.type,
      sequence: musicPtn.sequence,
      actPosition: musicPtn.position,
      originalActPosition: musicPtn.position,
      actPSkills: [],
      cardStatuses: _.cloneDeep(this.previous.cardStatuses),
      userStatuses: _.cloneDeep(this.previous.userStatuses),
      stageSkillStatuses: _.cloneDeep(this.previous.stageSkillStatuses),
      getCardStatus: util.getCardStatusByIndex,
      getUserStatus: util.getUserStatusByIndex,
      getStageStatus: util.getStageStatusByIndexes,
    }
    // remove effects which have no remain count
    // also, at this point, all effects shall be in effect,
    // change `include` to `true`.
    this.current.cardStatuses.forEach(cardStat => {
      const removeList: string[] = []
      cardStat.effects.forEach(
        eff => {
          eff.include = true
          if (eff.remain === 0) {
            removeList.push(eff.id)
          }
        }
      )
      removeList.forEach(effId => cardStat.removeEffect(effId))
    })
  }

  private rotate() {
    this.migration()
    if (this.current.chartType != MusicChartType.Beat) {
      const nodeType = Chart2SkillType[this.current.chartType]
      for (const actIdx of this.getActableIndexes(this.live.isBattle)) {
        // keep each side has only 1 actable
        if (actIdx <= 5 && this.actables.some(act => act.index <= 5)) {
          continue
        }
        if (actIdx >= 6 && this.actables.some(act => act.index >= 6)) {
          continue
        }
        // from here on, current.actPosition will not be used
        this.checkActSkillExistence(actIdx, nodeType)
        this.checkActSkillStamina()
        if (this.current.chartType === MusicChartType.ActiveSkill) {
          this.checkActSkillCoolTime()
        }
      }
      this.checkActSkillPossibility()
      this.determineActSkillPrivilege()

      if (this.actables.length > 0) {
        this.current.actPosition = Index2Lane[this.actables[0].index]
        if (this.current.actPosition <= 5) {
          this.current.failureFlag = undefined
        }
      }
    }

    // validate and perform P skills (p1)
    for (const idxes of this.preparePSkill(true)) {
      if (idxes.cardIndex > 100) {
        // performs stage skills
        this.performStageSkill(idxes.cardIndex, idxes.skillIndex, true)
      } else {
        // performs chara skills
        this.performPSkill(idxes.cardIndex, idxes.skillIndex, true)
      }
    }

    // TODO: save a snapshot at this point
    this.snapshot.push(_.cloneDeep(this.current))

    // perform A SP skill
    let flag = ComboType.AddBoth
    if (this.current.chartType === MusicChartType.ActiveSkill
      || this.current.chartType === MusicChartType.SpecialSkill
    ) {
      flag = this.performASPSkill(this.actables)
    } else if (this.current.chartType === MusicChartType.Beat) {
      this.performBeat()
    }

    // reset combo
    this.handleCombo(flag)
    this.rotateCT()
    this.rotateRemains()

    // validate and perform P skills (p2)
    for (const idxes of this.preparePSkill(false)) {
      if (idxes.cardIndex > 100) {
        this.performStageSkill(idxes.cardIndex, idxes.skillIndex, false)
      } else {
        this.performPSkill(idxes.cardIndex, idxes.skillIndex, false)
      }
    }

    this.applyContinuousEffects()

    // aftermath
    this.charts.push(this.current)
  }

  //#region partial imports
  init = _init.default
  initCardStatus = _init.initCardStatus
  initUserStatus = _init.initUserStatus
  initSkillStatus = _init.initSkillStatus
  initStageSkillStatus = _init.initStageSkillStatus

  migration = migration
  getActableIndexes = getActableIndexes
  checkActSkillExistence = checkActSkillExistence
  checkActSkillStamina = checkActSkillStamina
  checkActSkillCoolTime = checkActSkillCoolTime
  checkActSkillPossibility = checkActSkillPossibility
  determineActSkillPrivilege = determineActSkillPrivilege
  preparePSkill = preparePSkill
  performASPSkill = performASPSkill
  performBeat = performBeat
  performPSkill = performPSkill
  performStageSkill = performStageSkill
  _performSkill = _performSkill
  implementEfficacy = implementEfficacy

  handleCombo = handleCombo
  rotateCT = rotateCT
  rotateRemains = rotateRemains
  applyContinuousEffects = applyContinuousEffects
  //#endregion partial imports
}
