import { MusicChartType } from "../../types/proto/proto_enum"
import { WapMusicChartPattern, WapQuest } from "../../types/wap/quest_waps"
import { WapLiveAbility } from "../../types/wap/skill_waps"
import { getLaneTypeByIndex } from "../../utils/chart_utils"
import { getRawLiveAbility, getRawLiveBonus, getRawLiveBonusGroup, getRawMusic, getRawMusicChartPattern, getRawQuest } from "../dao/quest_dao"
import { getRawSkill } from "../dao/skill_dao"
import { getWapSkillLevel } from "./skill_wrapper"

export const getWapQuest = (
  id: string
): WapQuest | undefined => {
  const original = getRawQuest(id)
  if (!original) return undefined
  const music = getRawMusic(original.musicId)
  return {
    ...original,
    musicName: music?.name ?? "Unknown",
    musicChartPatterns: getWapMusicChartPatterns(original.musicChartPatternId)!,  // FIXME: potential error
    liveBonuses: getWapLiveAbility(original.liveBonusGroupId ?? ""),
    getLaneType: getLaneTypeByIndex,
  }
}

const getWapMusicChartPatterns = (
  id: string
): WapMusicChartPattern[] | undefined => {
  const original = getRawMusicChartPattern(id)
  if (!original) return undefined
  return original
    .filter(ptn => ptn.type !== MusicChartType.Unknown)
    .sort((a, b) => a.number - b.number)
    .map((pattern, idx) => {
      return {
        ...pattern,
        sequence: idx + 1,
      }
    })
}

const getWapLiveAbility = (
  liveBonusGroupId: string
): WapLiveAbility[] | undefined => {
  if (!liveBonusGroupId) return undefined
  const group = getRawLiveBonusGroup(liveBonusGroupId)
  const bonuses = group?.liveBonusIds.flatMap(id =>
    getRawLiveBonus(id) ?? []
  )
  const abilities = bonuses?.flatMap(bonus => {
    const abilityLevel = getRawLiveAbility(bonus.liveAbilityId)
      ?.levels.find(it => it.level === bonus.liveAbilityLevel)
    const skill = getRawSkill(abilityLevel?.skillId ?? "")
    const skLevel = skill?.levels.find(sk => sk.level === abilityLevel?.level)
    if (abilityLevel && skill && skLevel) {
      const wapSkillLevel = getWapSkillLevel(skill, skLevel)
      return {
        ...abilityLevel,
        skill: wapSkillLevel,
      }
    }
    return []
  })
  return abilities
}
