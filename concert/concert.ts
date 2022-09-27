import { CardStatus, Chart, Effect, Live, SkillStatus, StageSkillStatus, UserStatus } from "../types/concert_types";
import { LiveAbilityType, MusicChartType, SkillEfficacyType } from "../types/proto/proto_enum";
import { WapMusicChartPattern } from "../types/wap/quest_waps";
import * as util from "../utils/chart_utils";
import migration from "./partial/a_migration";
import * as _init from "./partial/init_concert"
import * as step1 from "./partial/x_check_existence";

export class Concert {

  constructor(live: Live) {
    this.live = live
    this.charts = live.charts
  }

  // properties
  live: Live
  charts: Chart[]
  protected previous: Chart
  protected current: Chart
  protected order: number
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
      this.prepare(musicPtn)
      this.rotate()
    })
  }

  private prepare(musicPtn: WapMusicChartPattern) {
    this.previous = this.charts[this.charts.length - 1]
    this.actables = undefined
    this.pSkillPerformed = []
    this.current = {
      chartType: musicPtn.type,
      sequence: musicPtn.sequence,
      actPosition: musicPtn.position,
      cardStatuses: this.previous.cardStatuses.slice(),
      直接用前一个状态，在修改时会影响前一状态？
      userStatuses: this.previous.userStatuses,
      stageSkillStatuses: this.previous.stageSkillStatuses,
      getCardStatus: util.getCardStatusByIndex
    }
    // remove effects which have no remain count
    this.current.cardStatuses.forEach(cardStat => {
      cardStat.effects = cardStat.effects.filter(eff => eff.remain !== 0)
    })
  }

  private rotate() {
    this.
    this.checkActSkillExistence()
    // ...
  }

  //#region partial imports
  init = _init.default
  initCardStatus = _init.initCardStatus
  initUserStatus = _init.initUserStatus
  initSkillStatus = _init.initSkillStatus
  initStageSkillStatus = _init.initStageSkillStatus
  migration = migration
  checkActSkillExistence = step1.default
  //#endregion partial imports
}
