import _setting from "./user_settings.json"

type UserSettings = {
  allCardLevel: number,
  allCardRarity: number,
  allSkillLevel1: number,
  allSkillLevel2: number,
  allSkillLevel3: number,
  userCardInfos: {
    cardId: string,
    level: number,
    rarity: number,
    skillLevel1: number,
    skillLevel2: number,
    skillLevel3: number,
    liveAbilityLevel?: number,
    activityAbilityLevel?: number,
  }[],
}

export const setting: UserSettings = _setting
export function getCardInfo(id: string) {
  var cardInfo = setting.userCardInfos.find(it => it.cardId === id)
  if (!cardInfo) {
    cardInfo = {
      cardId: id,
      level: setting.allCardLevel,
      rarity: setting.allCardRarity,
      skillLevel1: setting.allSkillLevel1,
      skillLevel2: setting.allSkillLevel2,
      skillLevel3: setting.allSkillLevel3,
    }
  }
  return cardInfo
}
export function getMental(): number {
  return 100
}
export function getTechnique(): number {
  return 100
}
