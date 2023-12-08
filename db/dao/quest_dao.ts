import { LiveAbility, LiveBonus, LiveBonusGroup, Music, MusicChartPattern } from "../../types/proto/proto_master"
import { QuestBase } from "../../types/quest_types"
import { logIdNotFound } from "../../utils/console_utils"
import { Unpromise } from "./typeUtils"

import { getRaw, isAllInitialzed } from "./utils"


let rawQuest: QuestBase[]
let rawMarathonQuest: QuestBase[]
let rawMusic: Music[]
let rawMusicChartPattern: MusicChartPattern[]
let rawLiveBonusGroup: LiveBonusGroup[]
let rawLiveBonus: LiveBonus[]
let rawLiveAbility: LiveAbility[]
let rawPvpQuest: QuestBase[]
let rawGvgQuest: QuestBase[]
let rawLeagueQuest: QuestBase[]
let rawRaidQuest: QuestBase[]

let allRawQuest: QuestBase[]


async function initQuest() {
  if (isAllInitialzed(
    rawQuest,
    rawMarathonQuest,
    rawMusic,
    rawMusicChartPattern,
    rawLiveBonusGroup,
    rawLiveBonus,
    rawLiveAbility,
    rawPvpQuest,
    rawGvgQuest,
    rawLeagueQuest,
    rawRaidQuest
  )) {
    return
  }
  const results = await Promise.all([
    getRaw<QuestBase[]>("Quest"),
    getRaw<QuestBase[]>("MarathonQuest"),
    getRaw<Music[]>("Music"),
    getRaw<MusicChartPattern[]>("MusicChartPattern"),
    getRaw<LiveBonusGroup[]>("LiveBonusGroup"),
    getRaw<LiveBonus[]>("LiveBonus"),
    getRaw<LiveAbility[]>("LiveAbility"),
    getRaw<QuestBase[]>("PvpQuest"),
    getRaw<QuestBase[]>("GvgQuest"),
    getRaw<QuestBase[]>("LeagueQuest"),
    getRaw<QuestBase[]>("RaidQuest"),
  ])
  setInitQuest(results)
  return results
}

function setInitQuest(data: Unpromise<ReturnType<typeof initQuest>>) {
  if (data === undefined) {
    throw new Error("Initialize Card failed")
  }
  rawQuest = data[0]
  rawMarathonQuest = data[1]
  rawMusic = data[2]
  rawMusicChartPattern = data[3]
  rawLiveBonusGroup = data[4]
  rawLiveBonus = data[5]
  rawLiveAbility = data[6] 
  rawPvpQuest = data[7]
  rawGvgQuest = data[8]
  rawLeagueQuest = data[9]
  rawRaidQuest = data[10]
  allRawQuest = [
    ...rawQuest,
    ...rawMarathonQuest,
    ...rawPvpQuest,
    ...rawGvgQuest,
    ...rawLeagueQuest,
    ...rawRaidQuest,
  ]
}


const getRawInsideDbQuests = (
  reg: string
): QuestBase[] => {
  return rawQuest.filter(it => it.areaId ? it.areaId.match(reg) : false)
}

const getRawMarathonQuests = (): QuestBase[] => {
  return rawMarathonQuest
}

const getRawPvpQuests = (): QuestBase[] => {
  return rawPvpQuest
}

const getRawGvgQuests = (): QuestBase[] => {
  return rawGvgQuest
}

const getRawLeagueQuests = (): QuestBase[] => {
  return rawLeagueQuest
}

const getRawRaidQuests = (): QuestBase[] => {
  return rawRaidQuest
}

const getRawQuest = (
  id: string
): QuestBase | undefined => {
  return allRawQuest.find(it => it.id === id)
    ?? logIdNotFound("Quest", id)
}

const getRawMusic = (
  id: string
): Music | undefined => {
  return rawMusic.find(it => it.id === id)
    ?? logIdNotFound("Music", id)
}

const getAllRawMusic = (): Music[] => {
  return rawMusic
}

const getRawMusicChartPattern = (
  id: string
): MusicChartPattern[] => {
  return rawMusicChartPattern.filter(it => it.id === id)
}

const getAllRawMusicChartPattern = (): MusicChartPattern[] => {
  return rawMusicChartPattern
}

const getRawLiveBonusGroup = (
  groupId: string
): LiveBonusGroup | undefined => {
  return rawLiveBonusGroup.find(it => it.groupId === groupId)
    ?? logIdNotFound("LiveBonusGroup", groupId)
}

const getRawLiveBonus = (
  id: string
): LiveBonus | undefined => {
  return rawLiveBonus.find(it => it.id === id)
    ?? logIdNotFound("LiveBonus", id)
}

const getRawLiveAbility = (
  id: string
): LiveAbility | undefined => {
  return rawLiveAbility.find(it => it.id === id)
    ?? logIdNotFound("LiveAbility", id)
}

export {
  getAllRawMusic,
  getAllRawMusicChartPattern,
  getRawGvgQuests,
  getRawInsideDbQuests,
  getRawLeagueQuests,
  getRawLiveAbility,
  getRawLiveBonus,
  getRawLiveBonusGroup,
  getRawMarathonQuests,
  getRawMusic,
  getRawMusicChartPattern,
  getRawPvpQuests,
  getRawQuest,
  getRawRaidQuests,
  initQuest,
  setInitQuest,
}

