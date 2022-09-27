import { MusicChartPattern, Quest } from "../proto/proto_master"
import { WapLiveAbility } from "./skill_waps"

export type WapQuest = Quest & {
  musicName: string
  musicChartPatterns: WapMusicChartPattern[]
  liveBonuses?: WapLiveAbility[]
}

export type WapMusicChartPattern = MusicChartPattern & {
  sequence: number
}
