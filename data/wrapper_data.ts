import {
  getAccessories,
  getCards,
  getQuests,
  getSkill,
} from "./wrapper"
import {
  WapCard,
  WapLiveAbility,
  WapMusicChartPattern,
  WapQuest,
} from "../types/wrapper_types"
import {
  QuestBase
} from "../types/base_types"
import {
  Accessory,
  CardParameter,
  CardRarity,
  LiveAbility,
  LiveBonusGroup,
  MusicChartPattern,
} from "../types/proto/proto_master"
import {
  rawCardParameter,
  rawCardRarity,
  rawLiveAbility,
  rawLiveBonus,
  rawLiveBonusGroup,
  rawMusic,
  rawMusicChartPattern,
} from "../data/master"
import {
  MusicChartType,
} from "../types/proto/proto_enum"

export const cards = getCards()
export const accessories = getAccessories()
// TODO: add event lives & venus battles & union lives
export const quests = getQuests()

export function getCard(id: string): WapCard {
  return cards.find(it => it.id === id)
}

function getQuestBase(id: string): QuestBase {
  return quests.find(it => it.id === id)
}

function getMusicChartPatterns(original: MusicChartPattern[]): WapMusicChartPattern[] {
  original = original.filter(it => it.type !== MusicChartType.Unknown)
  original.sort((a, b) => a.number - b.number)
  let wapped: WapMusicChartPattern[] = []
  original.forEach((element, index) => {
    wapped.push({
      ...element,
      sequence: index + 1,
    })
  });
  return wapped
}

function getLiveBonusGroup(liveBonusGroupId: string): LiveBonusGroup {
  return rawLiveBonusGroup.find(it => it.groupId === liveBonusGroupId)
}

function getLiveAbility(liveBonusId: string): WapLiveAbility {
  let liveBonus = rawLiveBonus.find(it => it.id === liveBonusId)
  let liveAbility = rawLiveAbility.find(it => it.id === liveBonus.liveAbilityId)
  let liveAbilityLevel = liveAbility.levels.find(it => it.level === liveBonus.liveAbilityLevel)
  return {
    ...liveAbilityLevel,
    skill: getSkill(liveAbilityLevel.skillId)
  }
}

export function getQuest(id: string): WapQuest {
  let questBase = getQuestBase(id)
  let _music = rawMusic.find(it => it.id === questBase.musicId)
  let _musicChartPatterns = rawMusicChartPattern.filter(
    it => it.id === questBase.musicChartPatternId
  )
  let _liveBonuses: WapLiveAbility[]
  if (questBase.liveBonusGroupId) {
    _liveBonuses = []
    let bonusGroup = getLiveBonusGroup(questBase.liveBonusGroupId)
    bonusGroup.liveBonusIds.forEach(it => {
      _liveBonuses.push(getLiveAbility(it))
    })
  }
  return {
    ...questBase,
    musicName: _music.name,
    musicChartPatterns: getMusicChartPatterns(_musicChartPatterns),
    liveBonuses: _liveBonuses,
  }
}

export function getAccessory(id: string): Accessory {
  return accessories.find(it => it.id === id)
}

export function getCardParameter(id: string, level: number): CardParameter {
  return rawCardParameter.find(it => it.level === level && it.id === id)
}

export function getCardRarity(rarity: number): CardRarity {
  return rawCardRarity.find(it => it.rarity === rarity)
}


