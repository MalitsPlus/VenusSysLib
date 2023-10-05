import { AttributeType } from "../../types/proto/proto_enum";
import { Music } from "../../types/proto/proto_master";
import { Custmap, WapMusicChartPattern, WapQuest } from "../../types/wap/quest_waps";
import { getLaneTypeByIndex } from "../../utils/chart_utils";
import { getAllRawMusicChartPattern, getRawMusic, getRawMusicChartPattern } from "../dao/quest_dao";
import { getWapMusicChartPatterns, getWapQuest } from "../wrapper/quest_wrapper";

export const getQuest = (
  id: string
): WapQuest | undefined => {
  return wapQuestRepo[id] ?? (() => {
    const quest = getWapQuest(id)
    if (quest) {
      wapQuestRepo[id] = quest
    }
    return quest
  })()
}

export const getCustmap = (
  musicId: string,
  musicChartPatternId: string,
): Custmap => {
  const wapPtn = getWapMusicPatterns(musicChartPatternId)
  const musicName = getRawMusic(musicId)?.name ?? ""
  return {
    musicId: musicId,
    musicName: musicName,
    musicChartPatternId: musicChartPatternId,
    musicChartPatterns: wapPtn ?? [],
    position1AttributeType: AttributeType.Unknown,
    position2AttributeType: AttributeType.Unknown,
    position3AttributeType: AttributeType.Unknown,
    position4AttributeType: AttributeType.Unknown,
    position5AttributeType: AttributeType.Unknown,
    getLaneType: getLaneTypeByIndex,
  }
}

export const getAllPlayableMusic = (): { [key: string]: Music } => {
  if (Object.keys(musicRepo).length === 0) {
    Array.from(new Set(getAllRawMusicChartPattern().map(x => x.id)))
      .filter(x => /^chart-(\w+-\d{3})-\d{3}$/.test(x))
      .map(x => "music-" + x.match(/^chart-(\w+-\d{3})-\d{3}$/)![1])
      .forEach(x => {
        if (!musicRepo[x]) {
          const music = getRawMusic(x)
          if (music) {
            musicRepo[x] = music
          }
        }
      })
  }
  return musicRepo
}

export const getMusicPatternIds = (
  musicId: string
): string[] => {
  const ids: string[] = []
  const rst = /^music-(\w+-\d{3}$)/.exec(musicId)
  if (rst) {
    const md = rst[1]
    for (const idx of ["001", "002"]) {
      const id = `${md}-${idx}`
      const patterns = getRawMusicChartPattern(id)
      if (patterns.length > 0) {
        ids.push(id)
      }
    }
  }
  return ids
}

export const getWapMusicPatterns = (
  id: string
): WapMusicChartPattern[] | undefined => {
  return wapMusicPatternRepo[id] ?? (() => {
    const ptns = getWapMusicChartPatterns(id)
    if (ptns) {
      wapMusicPatternRepo[id] = ptns
    }
    return ptns
  })()
}

const wapQuestRepo: {
  [key: string]: WapQuest
} = {}

const musicRepo: {
  [key: string]: Music
} = {}

const wapMusicPatternRepo: {
  [key: string]: WapMusicChartPattern[]
} = {}
