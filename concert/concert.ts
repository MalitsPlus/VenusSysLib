import { Actable, CardStatus, Chart, Effect, Live, SkillStatus, StageSkillStatus, UserStatus } from "../types/concert_types";
import { LiveAbilityType, MusicChartType, SkillEfficacyType } from "../types/proto/proto_enum";
import { WapMusicChartPattern } from "../types/wap/quest_waps";
import * as util from "../utils/chart_utils";
import * as _init from "./partial/init_concert"
import migration from "./partial/a_migration";
import checkActSkillExistence from "./partial/b_check_existence";
import { LiveDeck } from "../types/card_types";
import checkActSkillStamina from "./partial/c_check_act_skill_stamina";
import checkActSkillCoolTime from "./partial/d_check_act_skill_cool_time";
import determineActSkillPrivilege from "./partial/e_determine_act_skill_privilege";
import { performASPSkill, performPSkill } from "./partial/perform_skill";


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
  protected current: Chart
  protected order: number
  protected actables: Actable[]
  protected pSkillPerformed: number[]
  protected migratedEffs: {
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
    this.current = {
      chartType: musicPtn.type,
      sequence: musicPtn.sequence,
      actPosition: musicPtn.position,
      // FIXME: https://github.com/MalitsPlus/VenusSysLib/issues/2
      cardStatuses: this.previous.cardStatuses,
      userStatuses: this.previous.userStatuses,
      stageSkillStatuses: this.previous.stageSkillStatuses,
      getCardStatus: util.getCardStatusByIndex,
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
      this.determineActSkillPrivilege()
    }

    // validate and perform P skills
    // ...

    // perform A SP skill
    if (this.current.chartType != MusicChartType.Beat) {
      this.performASPSkill(this.actables)
    }
    
    // ...
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
  determineActSkillPrivilege = determineActSkillPrivilege
  performASPSkill = performASPSkill
  performPSkill = performPSkill
  //#endregion partial imports
}
