import { AttributeType } from "../proto/proto_enum"
import { MusicChartPattern } from "../proto/proto_master"
import { QuestBase } from "../quest_types"
import { WapLiveAbility } from "./skill_waps"

export type WapQuest = QuestBase & {
  musicName: string
  musicChartPatterns: WapMusicChartPattern[]
  liveBonuses?: WapLiveAbility[]

  // index can be 1~10
  getLaneType: (index: number) => AttributeType
}

export type WapMusicChartPattern = MusicChartPattern & {
  sequence: number
}

export type Custmap = Pick<WapQuest,
  "musicId" |
  "musicName" |
  "musicChartPatternId" |
  "musicChartPatterns" |
  "position1AttributeType" |
  "position2AttributeType" |
  "position3AttributeType" |
  "position4AttributeType" |
  "position5AttributeType" |
  "getLaneType"
>
