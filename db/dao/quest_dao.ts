import { LiveAbility, LiveBonus, LiveBonusGroup, Music, MusicChartPattern, Quest } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"

import protoQuest from "../../database/Quest.json"
import protoMusic from "../../database/Music.json"
import protoMusicChartPattern from "../../database/MusicChartPattern.json"
import protoLiveBonusGroup from "../../database/LiveBonusGroup.json"
import protoLiveBonus from "../../database/LiveBonus.json"
import protoliveAbility from "../../database/LiveAbility.json"


const rawQuest: Quest[] = protoQuest
const rawMusic: Music[] = protoMusic
const rawMusicChartPattern: MusicChartPattern[] = protoMusicChartPattern
const rawLiveBonusGroup: LiveBonusGroup[] = protoLiveBonusGroup
const rawLiveBonus: LiveBonus[] = protoLiveBonus
const rawLiveAbility: LiveAbility[] = protoliveAbility

const getRawQuest = (
  id: string
): Quest | undefined => {
  return rawQuest.find(it => it.id === id)
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
}
