import { LiveAbility, LiveBonus, LiveBonusGroup, Music, MusicChartPattern, Quest } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"
import { QuestBase } from "../../types/quest_types"

import protoQuest from "../../database/Quest.json"
import protoMusic from "../../database/Music.json"
import protoMusicChartPattern from "../../database/MusicChartPattern.json"
import protoLiveBonusGroup from "../../database/LiveBonusGroup.json"
import protoLiveBonus from "../../database/LiveBonus.json"
import protoliveAbility from "../../database/LiveAbility.json"

import pvpQuest from "../../database/PvpQuest.json"
import gvgQuest from "../../database/GvgQuest.json"
import LeagueQuest from "../../database/LeagueQuest.json"


const rawQuest: QuestBase[] = protoQuest
const rawMusic: Music[] = protoMusic
const rawMusicChartPattern: MusicChartPattern[] = protoMusicChartPattern
const rawLiveBonusGroup: LiveBonusGroup[] = protoLiveBonusGroup
const rawLiveBonus: LiveBonus[] = protoLiveBonus
const rawLiveAbility: LiveAbility[] = protoliveAbility
const rawPvpQuest: QuestBase[] = pvpQuest
const rawGvgQuest: QuestBase[] = gvgQuest
const rawLeagueQuest: QuestBase[] = LeagueQuest

const allRawQuest: QuestBase[] = [
  ...rawQuest,
  ...rawPvpQuest,
  ...rawGvgQuest,
  ...rawLeagueQuest,
]

const getRawInsideDbQuests = (
  reg: string
): QuestBase[] => {
  return rawQuest.filter(it => it.areaId ? it.areaId.match(reg) : false)
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

const getRawMusicChartPattern = (
  id: string
): MusicChartPattern[] => {
  return rawMusicChartPattern.filter(it => it.id === id)
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
  getRawQuest,
  getRawMusic,
  getRawMusicChartPattern,
  getRawLiveBonusGroup,
  getRawLiveBonus,
  getRawLiveAbility,
  getRawInsideDbQuests,
  getRawPvpQuests,
  getRawGvgQuests,
  getRawLeagueQuests,
}
