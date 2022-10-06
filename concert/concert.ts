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

export class Concert {

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
    this.liveDeck = live.liveDeck
  }

  // properties
  live: Live
  charts: Chart[]
  liveDeck: LiveDeck
  protected previous: Chart
  current: Chart
  protected order: number
  protected actables: Actable[]
  pSkills: { cardIndex: number, skillIndex: number }[]
  pSkillPerformed: { cardIndex: number, skillIndex: number }[]
  migratedEffs: {
    index: number
    type: SkillEfficacyType.StrengthEffectMigrationBeforeActiveSkill
    | SkillEfficacyType.StrengthEffectMigrationBeforeSpecialSkill
    effs: Effect[]
    fromOrder: number
    sourceIndex: number
    sourceSkillIndex: number
  }[]

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
    this.previous = this.charts[this.charts.length - 1]
    this.actables = []
    this.pSkillPerformed = []
    this.current = {
      chartType: musicPtn.type,
      sequence: musicPtn.sequence,
      actPosition: musicPtn.position,
      actPSkills: [],
      // 🚨FIXME: https://github.com/MalitsPlus/VenusSysLib/issues/2
      cardStatuses: this.previous.cardStatuses,
      userStatuses: this.previous.userStatuses,
      stageSkillStatuses: this.previous.stageSkillStatuses,
      getCardStatus: util.getCardStatusByIndex,
      getUserStatus: util.getUserStatusByIndex,
      getStageStatus: util.getStageStatusByIndexes,
    }
    // remove effects which have no remain count
    this.current.cardStatuses.forEach(cardStat => {
      cardStat.effects = cardStat.effects.filter(eff => eff.remain !== 0)
    })
  }

  private rotate() {
    this.migration()
    if (this.current.chartType != MusicChartType.Beat) {
      this.checkActSkillExistence()
      this.checkActSkillStamina()
      if (this.current.chartType === MusicChartType.ActiveSkill) {
        this.checkActSkillCoolTime()
      }
      this.checkActSkillPossibility()
      this.determineActSkillPrivilege()
    }

    // validate and perform P skills (p1)
    for (const idxes of this.preparePSkill(true)) {
      if (idxes.cardIndex > 100) {
        this.performStageSkill(idxes.cardIndex, idxes.skillIndex, true)
      } else {
        this.performPSkill(idxes.cardIndex, idxes.skillIndex, true)
      }
    }

    // TODO: save a snapshot at this point
    // ...

    // perform A SP skill
    let flag = 99
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
    // aftermath
    // ...seems no aftermath need to be done at present
  }

  //#region partial imports
  init = _init.default
  initCardStatus = _init.initCardStatus
  initUserStatus = _init.initUserStatus
  initSkillStatus = _init.initSkillStatus
  initStageSkillStatus = _init.initStageSkillStatus

  migration = migration
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
  rotateCT = rotateCT
  rotateRemains = rotateRemains
  //#endregion partial imports
}
