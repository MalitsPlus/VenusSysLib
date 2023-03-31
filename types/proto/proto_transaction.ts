// Generated from ProtoTransaction.proto

import type {
  CardDisplayType,
  HomePositionType,
  MessageStatusType,
  MissionStatusType,
  PhotoImageType,
  ProfileBackgroundType,
  ProfileLayoutType,
  ProfileInformationType,
  ProfileColorType,
  ResultRankType,
  StoryStatusType,
  TelephoneStatusType,
  ResourceType,
  NotificationType,
  PointType,
  ParameterType,
  TutorialType,
} from './proto_enum'

export type Payslip = {
  managerLevel: number
  loginDays: number
  absenceDays: number
  basicSalary: number
  activityHours: number
  activityBonus: number
  gvgHighestPoint: string
  gvgHighestPointBonus: number
  totalCardLevel: number
  cardLevelBonus: number
  totalFanAmount: string
  fanAmountBonus: number
  totalFanEventScore: string
  fanEventScoreBonus: number
  totalContestScore: string
  contestScoreBonus: number
  loginTimes: string[]
  mostGrownCharacterId: string
  hierarchyDetailGradeId: string
  hierarchyPoint: string
  hierarchyGradeBonus: number
  hierarchyRank: number
  year: number
  month: number
}

export type User = {
  name: string
  managerExp: string
  deckSequence: string
  guildId: string
  lastGuildCheckTime: string
  divisionId: string
  firstDivisionId: string
  emblemId: string
  deckMaxOverallValue: string
  lastCreatedForumThreadDatetime: string
  gameStartTime: string
  lastLoginTime: string
  cardSupportLevel: number
  cardSupportReleaseCount: number
  nextPhotoImageId: string
  divisionMovedTime: string
  isReviewed: boolean
  questMainAreaLastClearCharacterIds: string[]
  highestSalary: number
  tutorialClearedTime: string
  comebackStartTime: string
  photoLimitExtendedCount: number
  inviteHostUserId: string
  buddyCardId: string
  nextPhotoImageIds: string[]
  managerLevel: number
  cardSupportMaxNumber: number
}

export type UserAccessory = {
  accessoryId: string
  amount: string
}

export type UserArea = {
  areaId: string
  clearQuestCount: number
  dailyClearCount: number
  lastClearedTime: string
}

export type UserCard = {
  cardId: string
  totalExp: string
  rarityTotalExp: number
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  liveAbilityLevel: number
  activityAbilityLevel: number
  obtainedTime: string
  supported: boolean
  lastEnhanceTime: string
  rankTotalExp: number
  displayType: CardDisplayType
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillId1: string
  skillId2: string
  skillId3: string
  liveAbilityId: string
  activityAbilityId: string
  photoEquipableCount: number
  baseLevel: number
  baseVocal: string
  baseDance: string
  baseVisual: string
  baseStamina: string
  baseSkillLevel1: number
  baseSkillLevel2: number
  baseSkillLevel3: number
  baseLiveAbilityLevel: number
  baseActivityAbilityLevel: number
  baseSkillId1: string
  baseSkillId2: string
  baseSkillId3: string
  baseLiveAbilityId: string
  baseActivityAbilityId: string
  basePhotoEquipableCount: number
  rank: number
}

export type UserCharacter = {
  characterId: string
  activityExp: string
  activityStamina: number
  lightFanAmount: number
  middleFanAmount: number
  heavyFanAmount: number
  favoriteCostumeId: string
  staminaUpdatedTime: string
  inActivity: boolean
  reliability: number
  liveHighestScore: string
  characterOnlyPhotoAmount: number
  liveCostumeId: string
  favoriteHairId: string
  liveHairId: string
  activityLevel: number
  audienceCandidateAmount: number
}

export type UserCharacterMusic = {
  characterId: string
  musicId: string
  masteryPoint: number
  masteryLevel: number
}

export type UserCostume = {
  costumeId: string
  checked: boolean
  obtainedTime: string
}

export type UserDecoration = {
  decorationId: string
}

export type UserEmblem = {
  emblemId: string
}

export type UserHair = {
  hairId: string
  checked: boolean
}

export type UserHierarchy = {
  bestDetailGradeId: string
  currentFixedPoint: string
  currentVariablePoint: string
  bestTotalPoint: string
  currentPointUpdateDatetime: string
  receivedRewardIds: string[]
  receivedDivisionRewardIds: string[]
}

export type UserHomePosition = {
  homePositionType: HomePositionType
  characterId: string
  isCharacterRandom: boolean
  isCostumeRandom: boolean
}

export type UserHomeTalk = {
  homeTalkId: string
}

export type UserItem = {
  itemId: string
  expiredTime: string
  amount: string
}

export type UserLoginBonus = {
  loginBonusId: string
  lastLoginTime: string
  loginCount: number
  receiveCount: number
  loginBonusTextId: string
}

export type UserMessage = {
  messageId: string
  messageStatusType: MessageStatusType
  selectMessageDetailIds: string[]
  arrivedTime: string
}

export type UserMessageSchedule = {
  messageId: string
  scheduledTime: string
}

export type UserMission = {
  missionId: string
  currentThreshold: string
  progress: string
  statusType: MissionStatusType
  lastUpdateTime: string
}

export type UserMusic = {
  musicId: string
}

export type UserPhoto = {
  photoId: string
  assetId: string
  imageType: PhotoImageType
  characterIds: string[]
  name: string
  rarity: number
  placeName: string
  eventName: string
  locked: boolean
  level: number
  rerollable: boolean
  abilities: UserPhotoAbility[]
  shootingTime: string
  focusCharacterId: string
  photoRecipeId: string
}

export type UserPhotoAbility = {
  photoAbilityId: string
  effectValue: string
  missionId: string
  grade: number
  isAvailable: boolean
}

export type UserPhotoRecipe = {
  photoRecipeId: string
  amount: string
}

export type UserProfile = {
  favoriteCardId: string
  favoritePhotoId: string
  favoriteCharacterIds: string[]
  message: string
  birthMonth: string
  birthDay: string
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  twitterInfo: TwitterInfo
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  favoriteCardDisplayType: CardDisplayType
}

export type UserQuest = {
  questId: string
  dailyClearCount: number
  lastClearedTime: string
  highestScore: string
  highestScoreTime: string
  highestRank: string
  currentRankingHighestScore: string
  currentRankingHighestScoreTime: string
  currentRankingHighestRank: string
  currentRankingSeasonID: string
  highestScoreRank: ResultRankType
}

export type UserStory = {
  storyId: string
  statusType: StoryStatusType
  isInvalid: boolean
}

export type UserTelephone = {
  telephoneId: string
  unlockedTime: string
  scheduledTime: string
  telephoneStatusType: TelephoneStatusType
}

export type ConsumptionResult = {
  resourceType: ResourceType
  resourceId: string
  amount: number
  beforeAmount: string
  afterAmount: string
}

export type MasterTag = {
  version: string
  masterTagPacks: MasterTagPack[]
}

export type MasterTagPack = {
  type: string
  fileName: string
  fileSize: number
  cryptoKey: string
  downloadUrl: string
}

export type Reward = {
  resourceType: ResourceType
  resourceId: string
  amount: string
}

export type RewardResult = {
  resourceType: ResourceType
  resourceId: string
  amount: number
  beforeAmount: string
  afterAmount: string
  isNew: boolean
  isTruncate: boolean
  isGift: boolean
  duplicateRewardResults: RewardResult[]
  additionalGifts: Reward[]
}

export type UserActivityFanEventProgress = {
  bestScoreRankType: ResultRankType
  bestScoreRankPlus: string
}

export type UserBalance = {
  freeBalance: number
  paidBalance: number
}

export type UserBuddy = {
  dailyRentalAmount: string
}

export type UserCardSupport = {
  number: number
  cardId: string
  removableTime: string
}

export type UserDeck = {
  number: number
  name: string
}

export type UserDeckPosition = {
  number: number
  position: number
  cardId: string
  part1AccessoryId: string
  part2AccessoryId: string
  photoIds: string[]
  costumeId: string
  hairId: string
}

export type UserGachaButton = {
  gachaButtonId: string
  drawTime: string
  todayCount: number
  totalCount: number
}

export type UserGift = {
  giftId: string
  resourceType: ResourceType
  resourceId: string
  amount: string
  message: string
  postedTime: string
  limitTime: string
  photoGift: PhotoGift
}

export type PhotoGift = {
  name: string
}

export type UserGiftHistory = {
  giftId: string
  resourceType: ResourceType
  resourceId: string
  amount: string
  message: string
  postedTime: string
  receivedTime: string
  photoGift: PhotoGiftHistory
}

export type PhotoGiftHistory = {
  name: string
}

export type UserInvite = {
  inviteCode: string
  receivedHostRewardTotalAmount: string
}

export type UserNotification = {
  notificationType: NotificationType
  valid: boolean
  startTime: string
}

export type UserPhotoReport = {
  photos: UserPhoto[]
  received: boolean
}

export type UserPoint = {
  pointType: PointType
  amount: string
}

export type TwitterInfo = {
  twitterUserID: string
  twitterScreenName: string
}

export type UserPublic = {
  serverUserId: string
  publicUserId: string
}

export type UserStaff = {
  parameterType: ParameterType
  level: number
}

export type UserTotalCount = {
  loginCount: string
  marketExchangeCount: string
  photoShootCount: string
  staffTrainCount: string
  pointGoldAmount: string
  forumLikeCount: string
  forumCreateReplyCount: string
  activityFanEventCount: string
  activityPromotionMinutes: string
  activityRefreshCount: string
  guildCheckInCount: string
  photoRetouchCount: string
}

export type UserTutorial = {
  tutorialType: TutorialType
  step: string
}
