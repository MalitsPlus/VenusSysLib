import { AttributeType } from "../proto/proto_enum"
import { MusicChartPattern, Quest } from "../proto/proto_master"
import { WapLiveAbility } from "./skill_waps"

export type WapQuest = Quest & {
  musicName: string
  musicChartPatterns: WapMusicChartPattern[]
  liveBonuses?: WapLiveAbility[]

  // index can be 1~10
  getLaneType: (index: number) => AttributeType
}

export type WapMusicChartPattern = MusicChartPattern & {
  sequence: number
}
