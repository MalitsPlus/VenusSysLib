import { LiveAbility, LiveBonus, LiveBonusGroup, Music, MusicChartPattern } from "../../types/proto/proto_master"
import { QuestBase } from "../../types/quest_types"
import { logIdNotFound } from "../../utils/console_utils"

import protoliveAbility from "../../database/LiveAbility.json"
import protoLiveBonus from "../../database/LiveBonus.json"
import protoLiveBonusGroup from "../../database/LiveBonusGroup.json"
import protoMarathonQuest from "../../database/MarathonQuest.json"
import protoMusic from "../../database/Music.json"
import protoMusicChartPattern from "../../database/MusicChartPattern.json"
import protoQuest from "../../database/Quest.json"

import gvgQuest from "../../database/GvgQuest.json"
import LeagueQuest from "../../database/LeagueQuest.json"
import pvpQuest from "../../database/PvpQuest.json"
import RaidQuest from "../../database/RaidQuest.json"


const rawQuest: QuestBase[] = protoQuest
const rawMarathonQuest: QuestBase[] = protoMarathonQuest
const rawMusic: Music[] = protoMusic
const rawMusicChartPattern: MusicChartPattern[] = protoMusicChartPattern
const rawLiveBonusGroup: LiveBonusGroup[] = protoLiveBonusGroup
const rawLiveBonus: LiveBonus[] = protoLiveBonus
const rawLiveAbility: LiveAbility[] = protoliveAbility
const rawPvpQuest: QuestBase[] = pvpQuest
const rawGvgQuest: QuestBase[] = gvgQuest
const rawLeagueQuest: QuestBase[] = LeagueQuest
const rawRaidQuest: QuestBase[] = RaidQuest

const allRawQuest: QuestBase[] = [
  ...rawQuest,
  ...rawMarathonQuest,
  ...rawPvpQuest,
  ...rawGvgQuest,
  ...rawLeagueQuest,
  ...rawRaidQuest,
]

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
  getAllRawMusic, getAllRawMusicChartPattern, getRawGvgQuests, getRawInsideDbQuests, getRawLeagueQuests, getRawLiveAbility, getRawLiveBonus, getRawLiveBonusGroup, getRawMarathonQuests, getRawMusic, getRawMusicChartPattern, getRawPvpQuests, getRawQuest, getRawRaidQuests
}

