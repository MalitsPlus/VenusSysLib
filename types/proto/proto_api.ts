// Generated from ProtoApi.proto

import type {
  GachaContinuousResultType,
  ResultRankType,
  LinkType,
  BoxGachaItemType,
  DokanType,
  ShopType,
  ResourceType,
  ResetTimingType,
  ActivityFanEventType,
  GachaType,
  GvgMatchResultType,
  LadderPanelType,
  AttributeType,
  MoodType,
  SkillPossessionType,
  AccessoryCategoryType,
  PhotoContestEvaluationRankType,
  ProfileBackgroundType,
  ProfileLayoutType,
  ProfileInformationType,
  ProfileColorType,
  ShopConditionRewardStatusType,
  ActivityFanEventHappeningType,
  ItemType,
  BacksideType,
  BacksideAreaType,
  BacksideDifficultyType,
  BacksidePracticeRankType,
  BacksideStageType,
  BacksidePanelType,
  BacksidePanelAttributeType,
  MusicChartType,
  SkillFailureType,
  StatusEffectType,
  SkillEfficacyType,
  PhotoImageType,
  ActivityCampaignEffectType,
  DeckEditType,
  DivisionCannotMoveReasonType,
  ForumListReplyRequestType,
  GachaRewardPatternType,
  GachaAnimationEmbeddedType,
  GiftSortType,
  GiftFilterType,
  GvgChallengeConsumptionType,
  GraphicType,
  HomePositionType,
  FunctionMaintenanceType,
  ProviderType,
  ErrorCode,
  PhotoImageRequestType,
  PhotoShootingActionType,
  PhotoContestBaseEvaluationType,
  PhotoContestBaseGuideRankType,
  ParameterType,
  TourType,
  TourEnemyType,
  TourAreaType,
  TourStepType,
  TutorialType,
} from './proto_enum'
import type {
  Accessory,
  HelpCategory,
} from './proto_master'
import type {
  UserPhoto,
  UserMission,
  Reward,
  Payslip,
  RewardResult,
  UserPublic,
  UserCharacter,
  User,
  UserItem,
  UserCard,
  UserCostume,
  UserAccessory,
  UserDeck,
  UserStory,
  UserPoint,
  UserStaff,
  UserMessage,
  UserTelephone,
  UserProfile,
  UserEmblem,
  UserCharacterMusic,
  UserBalance,
  UserTotalCount,
  UserArea,
  UserQuest,
  UserGachaButton,
  UserHomeTalk,
  UserPhotoReport,
  UserCardSupport,
  UserMessageSchedule,
  UserNotification,
  UserHierarchy,
  UserTutorial,
  UserHomePosition,
  UserMusic,
  UserDecoration,
  UserPhotoRecipe,
  UserBuddy,
  UserInvite,
  ConsumptionResult,
  UserGift,
  UserGiftHistory,
  UserLoginBonus,
  MasterTag,
} from './proto_transaction'

export type GachaContinuousInfo = {
  totalDrawCount: number
  cardIds: string[]
  isFinished: boolean
  externalRewardInfo: ExternalRewardInfo
}

export type GachaContinuousResult = {
  totalDrawCount: number
  cardIds: string[]
  resultType: GachaContinuousResultType
  externalRewardInfo: ExternalRewardInfo
}

export type ActiveFanEvent = {
  characterIds: string[]
  name: string
  subName: string
  level: number
  finishTime: string
  currentCheerPoint: number
}

export type ActivePromotion = {
  characterIds: string[]
  name: string
  subName: string
  level: number
  finishTime: string
  campaignEffects: ActivityCampaignEffect[]
}

export type ActiveRefresh = {
  characterIds: string[]
  name: string
  subName: string
  finishTime: string
}

export type ActivityCharacterInfo = {
  characterId: string
  costumeId: string
}

export type ActivityLessonProgress = {
  stepRewardGold: number
  stepRewardManagerExp: number
  stepRewardCardEnhanceItem: number
  rewardGoldAmount: number
  rewardManagerExpAmount: number
  rewardCardEnhanceItemAmount: number
  lastReceiveTime: string
  maxRewardTime: string
  dailyPromoteCount: number
  currentAreaId: string
}

export type BacksideCardLiveAbilityInfo = {
  cardId: string
  level: number
  rarity: number
  liveAbilityLevel: string
  liveAbilityId: string
}

export type BacksideDeckCardDetailInfo = {
  position: number
  cardId: string
  displayCharacterId: string
  displayCostumeId: string
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  liveAbilityLevel: number
  part1Accessory: Accessory
  part2Accessory: Accessory
  photos: UserPhoto[]
  staminaPermil: number
  supported: boolean
}

export type BacksideDeckCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
}

export type BacksideDeckCardStaminaInfo = {
  cardId: string
  currentMaxStamina: string
  currentRemainingStamina: string
}

export type BacksideDifficultyInfo = {
  backsideDifficultyNumber: number
  managerLevel: number
  cleared: boolean
  unlockConditionId: string
  unlocked: boolean
  stageTotalResultInfo: BacksidePracticeStageTotalResultInfo
  practiceStageInfos: BacksidePracticeStageInfo[]
  finalStageInfo: BacksideFinalStageInfo
  rewardReceivedRankType: ResultRankType
  rewardReceivedRankPlus: number
}

export type BacksideFinalStageInfo = {
  number: number
  name: string
  maxActionCount: number
  backsidePanelGoalSettingId: string
  stageResultInfo: BacksideFinalStageResultInfo
  stageHalfwayInfo: BacksideFinalStageHalfwayInfo
  pickupCharacterIDs: string[]
}

export type BacksideLiveBonus = {
  liveBonusId: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type BacksidePanelGoalInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  backsideQuestSettingId: string
  mentalThreshold: number
}

export type BacksidePanelLiveInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  backsideQuestSettingId: string
  mentalThreshold: number
}

export type BacksidePanelPvpInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  opponentInfo: BacksideOpponentInfo
  backsideQuestSettingId: string
  mentalThreshold: number
}

export type BacksidePracticeStageInfo = {
  number: number
  name: string
  maxActionCount: number
  backsidePanelGoalSettingId: string
  stageResultInfo: BacksidePracticeStageResultInfo
  stageHalfwayInfo: BacksidePracticeStageHalfwayInfo
  pickupCharacterIDs: string[]
}

export type BacksideRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  totalPracticeScore: string
  finalScore: string
  rank: number
  emblemId: string
  deckCardInfos: BacksideDeckCardInfo[]
}

export type BacksideRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type Banner = {
  id: string
  assetId: string
  text: string
  linkType: LinkType
  linkDetail: string
  order: number
  viewConditionId: string
}

export type BoxGachaItem = {
  order: number
  itemType: BoxGachaItemType
  rewardId: string
  liveBonusGroupId: string
  initialStock: number
  stock: number
  isLimited: boolean
  assetId: string
  description: string
}

export type BuddyCardInfo = {
  cardId: string
  rarity: number
  level: number
}

export type DivisionInfo = {
  id: string
  levelAvg: number
}

export type DokanInfo = {
  id: string
  type: DokanType
  advAssetId: string
  noticeInfo: NoticeInfo
  shopItem: ShopItem
  assetId: string
  description: string
  name: string
  shopType: ShopType
  storyId: string
}

export type EventButtonDisplayInfo = {
  conditionId: string
  priority: number
  assetId: string
}

export type EventMissionInfo = {
  id: string
  unlocked: boolean
  userMissions: UserMission[]
}

export type EventStoryInfo = {
  id: string
  episodes: EventStoryEpisodeInfo[]
}

export type ExchangeBooth = {
  id: string
  name: string
  bannerAssetId: string
  requiredResourceType: ResourceType
  requiredResourceId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlocked: boolean
  endTime: string
  linkType: LinkType
  linkDetail: string
  order: number
  limited: boolean
  colorCode: string
  backgroundColorCode: string
  exchanges: ExchangeItem[]
  costumeId: string
  iconAssetId: string
  viewConditionId: string
  unlockConditionId: string
}

export type ExchangeItem = {
  id: string
  assetId: string
  rewardId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlocked: boolean
  name: string
  description: string
  exchangeLimit: number
  leftCount: number
  requiredResourceAmount: string
  order: number
  viewConditionId: string
  unlockConditionId: string
}

export type ExternalRewardInfo = {
  externalRewardId: string
  rewardId: string
  isReceived: boolean
}

export type FanEvent = {
  id: string
  name: string
  subName: string
  type: ActivityFanEventType
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  level: number
  exp: number
  nextLevelRequiredExp: number
  requiredStamina: number
  nextLevelUnlockConditionId: string
  isNextLevelUnlocked: boolean
  stepConsumptionStamina: number
  fixedRewardId: string
  additionalRewardId: string
  rankSRewardId: string
  rankARewardId: string
  rankBRewardId: string
  rankCRewardId: string
  rankDRewardId: string
  viewConditionId: string
  campaignDropRewardIds: string[]
}

export type FanEventCharacterInfo = {
  characterId: string
  costumeId: string
  activityStamina: number
  completedStep: number
  finishTime: string
  activityPoint: number
  maxStep: number
  lastSavedActivityPoint: number
}

export type FanEventProgress = {
  activityFanEventId: string
  activityFanEventName: string
  activityFanEventSubName: string
  activityFanEventType: ActivityFanEventType
  activityFanEventLevel: number
  characters: FanEventCharacterInfo[]
  startTime: string
  stepConsumptionStamina: number
  stepActivityPointCoefficientPermil: number
  rankPatterns: FanEventRankPattern[]
  usedSuperModeItem: boolean
  activityPerformanceId: string
  maleNpcSpineId: string
  femaleNpcSpineId: string
  specialFanCheerPoint: number
  currentCheerPoint: number
  newSpecialFansCount: number
  speedRate: number
}

export type FanEventRankingInfo = {
  rank: string
  score: string
  userId: string
  name: string
  managerLevel: number
  characterIds: string[]
  emblemId: string
}

export type FavoriteCardInfo = {
  cardId: string
  rarity: number
}

export type GachaButtonInfo = {
  id: string
  todayCount: number
  totalCount: number
  drawTime: string
}

export type GachaExchangeInfo = {
  id: string
  exchangedCount: number
  exchangedTime: string
}

export type GachaHistory = {
  gachaType: GachaType
  drawTime: string
  gachaId: string
  resourceType: ResourceType
  resourceId: string
  amount: number
}

export type GachaInfo = {
  id: string
  unlocked: boolean
  buttons: GachaButtonInfo[]
  exchanges: GachaExchangeInfo[]
  itemGachaRewards: Reward[]
  noticeInfo: NoticeInfo
  selectedCardIds: string[]
  premiumInfo: GachaPremiumInfo
  continuousInfo: GachaContinuousInfo
}

export type GachaPremiumInfo = {
  fixedPremiumRewardRequiredDrawCount: number
  premiumRewardIds: string[]
  featuredRewards: Reward[]
}

export type GuildGvgMatchRankInfo = {
  name: string
  managerLevel: number
  point: string
  rank: number
  emblemId: string
}

export type GuildGvgSeasonInfo = {
  name: string
  matchNumber: number
  matchEndTime: string
  guildRank: number
  ranks: GuildGvgRankInfo[]
  aggregateEndTime: string
  isAggregate: boolean
  preMatchResult: GuildGvgSeasonMatchResult
  isRemainingChallenge: boolean
  winRewardId: string
  isCurrentMatchWin: boolean
}

export type GuildGvgSeasonMatchResult = {
  matchNumber: number
  opponentGuildId: string
  point: string
  opponentPoint: string
  resultType: GvgMatchResultType
  mvpInfo: GuildGvgMatchRankInfo
}

export type GuildParam = {
  id: string
  weaknessRank: number
  memberAmountRank: number
  prevSeasonResult: GuildGvgSeasonResult
}

export type GvgCurrentSeasonMatchInfo = {
  matchNumber: number
  endTime: string
  opponentGuildId: string
  opponentRank: number
  opponentPoint: string
  opponentWinCount: number
  opponentLoseCount: number
  opponentDrawCount: number
}

export type GvgGuildRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type GvgRankingRewardInfo = {
  order: number
  rankRateFromPercent: number
  rankFrom: number
  rewardId: string
  hierarchyVariablePoint: string
}

export type GvgSeasonInfo = {
  id: string
  name: string
  startTime: string
  aggregateEndTime: string
  challengeRewardId: string
  challengeItemId: string
  winRewardId: string
}

export type GvgSeasonMatchInfo = {
  matchNumber: number
  opponentGuildId: string
  point: string
  opponentPoint: string
  resultType: GvgMatchResultType
  memberAmountWeightPermil: number
  opponentMemberAmountWeightPermil: number
}

export type HierarchyChangeInfo = {
  addHierarchyPoint: string
  oldDetailGradeId: string
  newDetailGradeId: string
  currentRank: number
}

export type HierarchyDivisionRewardInfo = {
  hierarchyDivisionRewardId: string
  canReceive: boolean
  haveReceived: boolean
  firstUserInfo: ProfileInfo
}

export type HierarchyNotiInfo = {
  rewardIds: string[]
  divisionRewardIds: string[]
  currentDetailGradeId: string
  currentRank: number
}

export type HierarchyProfileInfo = {
  detailGradeId: string
  rank: number
}

export type HierarchyRankUserInfo = {
  userId: string
  currentRank: number
  managerName: string
  managerLevel: number
  currentDetailGradeId: string
  currentPoint: string
  emblemId: string
  deckName: string
  cardInfos: LastCardInfo[]
}

export type HierarchyRewardInfo = {
  hierarchyRewardId: string
  canReceive: boolean
  haveReceived: boolean
}

export type HomeBacksideInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
}

export type HomeEnterResponse = {
  gachaInfos: GachaInfo[]
  fanEventInfo: FanEventInfo
  promotionInfo: PromotionInfo
  refreshInfo: RefreshInfo
  lessonProgress: ActivityLessonProgress
  functionMaintenanceInfos: FunctionMaintenanceInfo[]
  bannerInfo: BannerInfo
  lastFriendApprovedTime: string
  gvgInfo: CurrentGvgInfo
  shopIds: string[]
  exchangeBoothIds: string[]
  isRemainingDiary: boolean
  notiStoneShopItem: NotiShopItem
  notiNormalShopItem: NotiShopItem
  payslip: Payslip
  currentMainAreaId: string
  eventInfo: HomeEventInfo
  pvpInfo: HomePvpInfo
  hierarchyNotiInfo: HierarchyNotiInfo
  isDailyQuestPlayable: boolean
  currentTowerQuestId: string
  hasUnplayedContest: boolean
  eventStoryInfos: EventStoryInfo[]
  photoActivities: PhotoActivity[]
  photoMusics: PhotoMusic[]
  photoStages: PhotoStage[]
  friendAppliedCount: number
  purchasedConditionRewardShopInfo: PurchasedConditionRewardShopInfo[]
  lessonInfo: LessonInfo
  eventButtonDisplayInfos: EventButtonDisplayInfo[]
  hasCanReceiveInviteHostRewards: boolean
  pvpRewardResultInfo: PvpRewardResultInfo
  gvgRewardResultInfo: GvgRewardResultInfo
  tourRewardResultInfos: TourRewardResultInfo[]
  backsideRewardResultInfos: BacksideRewardResultInfo[]
  photoContestRewardResultInfos: PhotoContestRewardResultInfo[]
  raceRewardResultInfos: RaceRewardResultInfo[]
  raceDailyRewardResultInfos: RaceDailyRewardResultInfo[]
  buddyUsedRewardResultInfo: BuddyUsedRewardResultInfo
  commonResponse: CommonResponse
}

export type HomeEventMissionInfo = {
  id: string
  unlocked: boolean
}

export type HomeLadderInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  messageGroupId: string
  hasReachablePanel: boolean
}

export type HomeMarathonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isMaxStamina: boolean
}

export type HomePhotoContestInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  hasReceivableSectionReward: boolean
}

export type HomeRaceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isLessenRewardMax: boolean
}

export type HomeTourInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
}

export type InviteGuestInfo = {
  userId: string
  name: string
  receivedHostRewardIds: string[]
  buddyCardInfo: BuddyCardInfo
  clearQuestMainAreaCount: string
  invitedTime: string
}

export type LadderInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  eventMissionInfo: EventMissionInfo
  messageGroupId: string
  costumeIds: string[]
  ladderPointItemId: string
  assetId: string
  topColorCode: string
  bottomColorCode: string
  bgmAssetId: string
}

export type LadderPanel = {
  type: LadderPanelType
  messageId: string
  rewardId: string
  requiredPointItemAmount: number
  unlockConditionId: string
  unlocked: boolean
  reached: boolean
  reachable: boolean
}

export type LastCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
}

export type LessonInfo = {
  lessonProgress: ActivityLessonProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewardIds: string[]
}

export type LiveBattleCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
  lightFanAmount: number
  middleFanAmount: number
  heavyFanAmount: number
}

export type LiveBattleQuestInfo = {
  id: string
  stageId: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  maxCapacity: number
  mentalThreshold: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  liveBonusGroupId: string
}

export type LiveCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
}

export type LiveCardResult = {
  cardId: string
  totalScore: string
}

export type LiveCharacterAssetInfo = {
  characterId: string
  costumeId: string
}

export type LiveDeckCard = {
  index: number
  cardId: string
  displayCharacterId: string
  displayCostumeId: string
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  startStamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  audienceAmount: number
  skills: LiveDeckCardSkill[]
  isBuddy: boolean
  isFriendBuddy: boolean
}

export type LiveDeckCardSkill = {
  index: number
  skillId: string
  skillLevel: number
  possessionType: SkillPossessionType
  liveAbilityId: string
  liveAbilityLevel: number
  rewrittenEfficacyIds: string[]
}

export type LiveRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  cardInfos: LiveCardInfo[]
  emblemId: string
  deckName: string
}

export type LiveUserInfo = {
  index: number
  userId: string
  name: string
  emblemId: string
  userDeck: LiveUserDeck
  userResult: LiveUserResult
  isNpc: boolean
}

export type MarathonAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type MarathonBoxGachaInfo = {
  boxGachaId: string
  boxGachaItems: BoxGachaItem[]
  isFull: boolean
  currentMarathonPoint: number
  unlocked: boolean
  remainResetCount: number
}

export type MarathonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  initialStamina: number
  staminaRecoveryMinutes: number
  assetId: string
  boxGachaGroupId: string
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  noticeInfo: NoticeInfo
  staminaRecoveryItemId: string
  questUnlockItemId: string
}

export type MarathonLiveBonusInfo = {
  liveBonusId: string
  amount: number
}

export type MarathonPhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type MarathonQuestInfo = {
  marathonQuestId: string
  unlocked: boolean
  difficultyLevelInfos: MarathonQuestDifficultyLevelInfo[]
  lastChallengeDifficultyNumber: number
  isUnlockable: boolean
  isPlayable: boolean
  playableCount: number
}

export type MarathonQuestStartResponse = {
  marathonId: string
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  result: LiveResult
  reward: QuestReward
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  highestClearRankType: ResultRankType
  highestScore: string
  addMarathonPoint: number
  commonResponse: CommonResponse
}

export type MarketItem = {
  number: number
  consumptionResourceType: ResourceType
  baseAmount: number
  discountAmount: number
  rewardId: string
  discountRatePermil: number
  soldOut: boolean
  unlockConditionId: string
}

export type MessageGroupInfo = {
  messageGroupId: string
  latestTimelineInfo: TimelineInfo
}

export type PhotoActivity = {
  photoActivityId: string
  isUnlocked: boolean
}

export type PhotoContestActivity = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo
  eventExchangeBoothInfo: EventExchangeBoothInfo
  noticeInfo: NoticeInfo
  totalBestShootEvaluationPoint: string
  totalBestShootEvaluationPointTime: string
  rank: string
  rankingRewardInfos: PhotoContestRankingRewardInfo[]
  sectionInfos: PhotoContestSectionInfo[]
  activities: PhotoContestActivity[]
  musics: PhotoContestQuestMusic[]
  stages: PhotoContestQuestStage[]
  dailyRewardResults: RewardResult[]
  onceShootingSubmitLimitCount: number
  currentPhotoAmount: string
  submittingItemId: string
  creatingItemId: string
}

export type PhotoContestPhotoInfo = {
  assetId: string
  sectionId: string
  evaluationPoint: string
  isBest: boolean
  shootingTime: string
  fixedCreatePhotoRarity: string
  evaluationRankType: PhotoContestEvaluationRankType
}

export type PhotoContestQuestMusic = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestQuestStage = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  totalBestShootEvaluationPoint: string
  rank: number
  emblemId: string
  bestPhotoInfos: PhotoContestPhotoInfo[]
}

export type PhotoContestRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type PhotoContestSectionInfo = {
  id: string
  sectionRewardInfos: PhotoContestSectionRewardInfo[]
  bestShootAssetId: string
  bestShootEvaluationPoint: string
  totalSectionEvaluationPoint: string
  isUnlocked: boolean
  advanceGuideInfos: PhotoContestSectionAdvanceGuideInfo[]
}

export type PhotoContestSectionRewardInfo = {
  sectionRewardId: string
  canReceive: boolean
  haveReceived: boolean
}

export type PhotoContestSubmitShootingResponse = {
  evaluationPoint: string
  isBest: boolean
  totalSectionEvaluationPoint: string
  totalBestShotEvaluationPoint: string
  nextPhotoImageId: string
  newCanReceiveSectionRewardIds: string[]
  rank: string
  evaluationRankType: PhotoContestEvaluationRankType
  baseGuideInfos: PhotoContestSectionBaseGuideInfo[]
  advanceGuideInfos: PhotoContestSectionAdvanceGuideInfo[]
  fixedCreatePhotoRarity: string
  commonResponse: CommonResponse
}

export type PhotoMusic = {
  musicId: string
  isUnlocked: boolean
}

export type PhotoStage = {
  stageId: string
  isUnlocked: boolean
}

export type ProfileFindUserResponse = {
  userId: string
  name: string
  managerExp: string
  managerLevel: number
  divisionId: string
  guildId: string
  emblemId: string
  favoriteCard: FavoriteCardInfo
  favoritePhoto: FavoritePhotoInfo
  favoriteCharacterIds: string[]
  message: string
  birthMonth: number
  birthDay: number
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  hierarchyCurrentDetailGradeId: string
  hierarchyCurrentRank: number
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  commonResponse: CommonResponse
}

export type ProfileInfo = {
  userId: string
  name: string
  managerExp: string
  managerLevel: number
  emblemId: string
  favoriteCard: FavoriteCardInfo
  favoritePhoto: FavoritePhotoInfo
  favoriteCharacterIds: string[]
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  lastLoginTime: string
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  buddyCardInfo: BuddyCardInfo
}

export type ProfileTopResponse = {
  hierarchyCurrentDetailGradeId: string
  hierarchyCurrentRank: number
  friendProfiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type Promotion = {
  id: string
  name: string
  subName: string
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  level: number
  exp: number
  nextLevelRequiredExp: number
  requiredStamina: number
  nextLevelUnlockConditionId: string
  isNextLevelUnlocked: boolean
  stepConsumptionStamina: number
  stepRewardGold: number
  stepRewardCardEnhanceItem: number
  stepAdditionalRewardId: string
  multiStepRewardId: string
  maxFanAmount: number
  viewConditionId: string
  subGenre: string
  multiStepCampaignDropRewardIds: string[]
}

export type PromotionProgress = {
  activityPromotionId: string
  activityPromotionName: string
  activityPromotionSubName: string
  activityPromotionLevel: number
  characters: ActivityCharacterInfo[]
  startTime: string
  finishTime: string
  stepConsumptionStamina: number
  completedStep: number
  stepRewardGold: number
  stepRewardManagerExp: number
  stepRewardActivityExp: number
  stepRewardCharacterActivityExp: number
  stepAdditionalRewardId: string
  multiStepRewardId: string
  stepRewardCardEnhanceItem: number
  rewardGoldAmount: number
  rewardCardEnhanceItemAmount: number
  rewards: ActivityPromotionReward[]
  nextActivityLevelUpTime: string
  campaignEffects: ActivityCampaignEffect[]
  activityPerformanceId: string
  subGenre: string
  multiStepCampaignDropRewardIds: string[]
}

export type PvpRewardInfo = {
  rankFrom: string
  rankingRewardId: string
  challengeRewardId: string
  hierarchyVariablePoint: string
}

export type QuestAreaGroupInfo = {
  areaGroupId: string
  areas: QuestAreaInfo[]
}

export type QuestAreaInfo = {
  areaId: string
  unlocked: boolean
  quests: QuestInfo[]
}

export type QuestClearInfo = {
  score: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
  rankType: ResultRankType
  plus: number
}

export type QuestContestRankInfo = {
  rank: number
  isNPC: boolean
  score: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
}

export type QuestInfo = {
  questId: string
  cleared: boolean
  highestScore: string
  rankType: ResultRankType
  plus: number
  highestRank: number
  isPlayable: boolean
  playableCount: number
  opponentInfo: QuestOpponentInfo
  campaignDropRewardIds: string[]
}

export type QuestListTowerRankingResponse = {
  selfHighestRank: number
  selfQuestId: string
  ranks: QuestTowerRankInfo[]
  totalQuestNum: number
  commonResponse: CommonResponse
}

export type QuestRewardCard = {
  cardId: string
  funAmount: string
  exp: number
  isExpTruncated: boolean
}

export type QuestStartResponse = {
  questId: string
  result: LiveResult
  reward: QuestReward
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  highestRank: number
  highestScore: string
  hierarchyChangeInfo: HierarchyChangeInfo
  friendApplyToBuddyInfo: FriendApplyToBuddyInfo
  commonResponse: CommonResponse
}

export type QuestTopResponse = {
  mainAreaGroups: QuestAreaGroupInfo[]
  contestTotalScore: string
  hasUnplayedContest: boolean
  pvpInfo: QuestTopPvpInfo
  currentTowerQuestId: string
  isDailyPlayable: boolean
  gvgInfo: CurrentGvgInfo
  hierarchyNotiInfo: HierarchyNotiInfo
  dailyAreas: QuestAreaInfo[]
  towerArea: QuestAreaInfo
  contestArea: QuestAreaInfo
  isTowerTopUnlocked: boolean
  commonResponse: CommonResponse
}

export type QuestTowerAreaInfo = {
  area: QuestAreaInfo
  currentTowerQuestId: string
}

export type QuestTowerRankInfo = {
  rank: number
  questId: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
}

export type RaceAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type RaceDailyRankingUserInfo = {
  userId: string
  userName: string
  score: string
  emblemId: string
  rank: number
}

export type RaceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  aggregateEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  noticeInfo: NoticeInfo
  racePointItemId: string
  raceMedalItemId: string
  raceLiveBonusResetItemId: string
  raceAreaInfos: RaceAreaInfo[]
  requiredCardCoolTimeRacePointAmount: number
  raceRankGradeInfos: RaceRankGradeInfo[]
  livePanelDifficultyNumber: number
  cardCoolTimeMinutes: number
  raceLiveBonusGroupId: string
}

export type RaceLiveBonusInfo = {
  liveBonusId: string
  level: number
}

export type RaceLiveQuestInfo = {
  raceQuestId: string
  currentClearDifficultyNumber: number
  beforeClearDifficultyNumber: number
  difficultyLevelInfos: RaceLiveQuestDifficultyLevelInfo[]
}

export type RaceOpponentProgressInfo = {
  userId: string
  name: string
  displayCharacterId: string
  clearPanelCount: number
  rank: number
  liveBonusInfos: RaceLiveBonusInfo[]
}

export type RacePhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type RaceRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  clearPanelCount: number
  rank: number
  emblemId: string
}

export type RaceUserCardCoolTimeInfo = {
  cardId: string
  coolTime: string
}

export type Refresh = {
  id: string
  name: string
  requiredMinutes: number
  unlockConditionId: string
  isUnlocked: boolean
  level: number
  exp: number
  nextLevelRequiredExp: number
  levels: RefreshLevel[]
  viewConditionId: string
}

export type RefreshLevel = {
  level: number
  name: string
  requiredGold: number
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  recoveryAmount: number
  viewConditionId: string
  subGenre: string
}

export type RefreshProgress = {
  activityRefreshId: string
  activityRefreshName: string
  activityRefreshSubName: string
  activityRefreshLevel: number
  characters: ActivityCharacterInfo[]
  startTime: string
  finishTime: string
  requiredMinutes: number
  recoveryAmount: number
  activityPerformanceId: string
  subGenre: string
}

export type ShopConditionReward = {
  number: number
  conditionId: string
  rewardId: string
  statusType: ShopConditionRewardStatusType
}

export type ShopInfo = {
  id: string
  name: string
  type: ShopType
  order: number
  colorCode: string
  backgroundColorCode: string
  noticeInfo: NoticeInfo
  viewConditionId: string
  thumbnailAssetId: string
  costumeId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  isPurchased: boolean
  progress: number
  maxProgress: number
  bannerAssetId: string
}

export type ShopItem = {
  id: string
  name: string
  description: string
  productId: string
  consumptionId: string
  rewardId: string
  thumbnailAssetId: string
  purchaseLimit: number
  leftCount: number
  order: number
  viewConditionId: string
  pushSegment: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlockConditionId: string
  unlocked: boolean
  colorCode: string
  backgroundColorCode: string
}

export type ShopLoginBonus = {
  day: number
  rewardId: string
  isReceived: boolean
}

export type TimelineInfo = {
  messageGroupId: string
  timelineId: string
  messageId: string
  arrivedTime: string
  selectMessageDetailIds: string[]
  lastMessageDetailId: string
  lastMessageDetailTime: string
  finished: boolean
}

export type TourDifficultyInfo = {
  tourDifficultyId: string
  tourDifficultyNumber: number
  managerLevel: number
  unlockConditionId: string
  unlocked: boolean
}

export type TourEffectActivity = {
  itemId: string
  amount: number
  activityPerformanceId: string
  activityPromotionSubGenre: string
}

export type TourEffectLive = {
  musicId: string
  name: string
  stageId: string
  musicChartPatternId: string
  maxCapacity: number
  mentalThreshold: number
  clearScore: string
  rewardId: string
  difficultyLevel: number
  tourQuestSettingId: string
}

export type TourEffectPvp = {
  musicId: string
  name: string
  stageId: string
  musicChartPatternId: string
  maxCapacity: number
  mentalThreshold: number
  clearScore: string
  opponentInfo: TourOpponentInfo
  scoutInfo: TourScoutInfo
  rewardId: string
  tourQuestSettingId: string
}

export type TourEffectRefresh = {
  amountPermil: number
  activityPerformanceId: string
  activityRefreshSubGenre: string
}

export type TourLiveBonusInfo = {
  liveBonusId: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type TourRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  emblemId: string
}

export type TourRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type UserHierarchyInfo = {
  currentDetailGradeId: string
  currentRank: number
  currentPoint: string
}

export type AccessoryEnhanceRequest = {
  accessoryId: string
  count: number
}

export type AccessoryEnhanceResponse = {
  commonResponse: CommonResponse
}

export type AccessoryLimitBreakRequest = {
  accessoryId: string
  isInUse: boolean
}

export type AccessoryLimitBreakResponse = {
  commonResponse: CommonResponse
}

export type AccessorySellRequest = {
  accessoryId: string
  count: number
}

export type AccessorySellResponse = {
  commonResponse: CommonResponse
}

export type ActivityStartFanEventRequest = {
  activityFanEventId: string
  characterIds: string[]
  costumeIds: string[]
  itemIds: string[]
}

export type ActivityStartFanEventResponse = {
  progress: FanEventProgress
  commonResponse: CommonResponse
}

export type ActivityLoadFanEventResponse = {
  progress: FanEventProgress
  commonResponse: CommonResponse
}

export type ActivityFetchFanEventStepsRequest = {
  steps: number[]
}

export type ActivityFetchFanEventStepsResponse = {
  characterSteps: FanEventCharacterSteps[]
  commonResponse: CommonResponse
}

export type ActivitySaveFanEventRequest = {
  characterResults: FanEventCharacterResult[]
  useItemId: string
  execCheer: boolean
}

export type ActivitySaveFanEventResponse = {
  characterSteps: FanEventCharacterSteps[]
  commonResponse: CommonResponse
}

export type ActivityFinishFanEventResponse = {
  activityPoint: number
  rankType: ResultRankType
  plus: number
  rewards: Reward[]
  rankPatterns: FanEventRankPattern[]
  activityLevelProgress: ActivityLevelProgress
  characters: ActivityCharacterInfo[]
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityGetFanEventRankingRequest = {
  activityFanEventId: string
}

export type ActivityGetFanEventRankingResponse = {
  selfRank: string
  selfScore: string
  rankInfos: FanEventRankingInfo[]
  commonResponse: CommonResponse
}

export type ActivityStartPromotionRequest = {
  activityPromotionId: string
  characterIds: string[]
  costumeIds: string[]
}

export type ActivityStartPromotionResponse = {
  progress: PromotionProgress
  commonResponse: CommonResponse
}

export type ActivityLoadPromotionResponse = {
  progress: PromotionProgress
  commonResponse: CommonResponse
}

export type ActivityUsePromotionItemRequest = {
  itemId: string
  amount: number
}

export type ActivityUsePromotionItemResponse = {
  progress: PromotionProgress
  commonResponse: CommonResponse
}

export type ActivityReceivePromotionRewardResponse = {
  rewards: Reward[]
  bonusRewards: Reward[]
  completedStep: number
  progress: PromotionProgress
  activityLevelProgress: ActivityLevelProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityFetchPromotionStepsRequest = {
  step: number
}

export type ActivityFetchPromotionStepsResponse = {
  steps: PromotionStep[]
  commonResponse: CommonResponse
}

export type ActivityFinishPromotionResponse = {
  rewards: Reward[]
  bonusRewards: Reward[]
  activityLevelProgress: ActivityLevelProgress
  totalSteps: number
  characters: ActivityCharacterInfo[]
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityStartRefreshRequest = {
  activityRefreshId: string
  activityRefreshLevel: number
  characterIds: string[]
  costumeIds: string[]
}

export type ActivityStartRefreshResponse = {
  progress: RefreshProgress
  commonResponse: CommonResponse
}

export type ActivityLoadRefreshResponse = {
  progress: RefreshProgress
  commonResponse: CommonResponse
}

export type ActivityUseRefreshItemRequest = {
  itemId: string
  amount: number
}

export type ActivityUseRefreshItemResponse = {
  progress: RefreshProgress
  commonResponse: CommonResponse
}

export type ActivityFinishRefreshResponse = {
  activityLevelProgress: ActivityLevelProgress
  characters: ActivityCharacterInfo[]
  commonResponse: CommonResponse
}

export type ActivityReceiveLessonRewardResponse = {
  rewards: Reward[]
  progress: ActivityLessonProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityPromoteLessonRequest = {
  isFree: boolean
}

export type ActivityPromoteLessonResponse = {
  rewards: Reward[]
  progress: ActivityLessonProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type FanEventCharacterSteps = {
  characterId: string
  steps: FanEventStep[]
}

export type FanEventStep = {
  step: number
  happenings: FanEventHappening[]
  itemEffects: FanEventItemEffect[]
}

export type FanEventHappening = {
  type: ActivityFanEventHappeningType
  characterId: string
}

export type FanEventItemEffect = {
  type: ItemType
  value: number
}

export type FanEventCharacterResult = {
  characterId: string
  stepResults: FanEventStepResult[]
}

export type FanEventStepResult = {
  step: number
  reductionMilliSeconds: string
  activityPoint: number
}

export type PromotionStep = {
  step: number
  rewards: ActivityPromotionReward[]
}

export type AuthCreateRequest = {
  firebaseUID: string
}

export type AuthCreateResponse = {
  firebaseCustomToken: string
}

export type AuthLoginRequest = {
  firebaseIDToken: string
}

export type AuthLoginResponse = {
  gameAuthToken: string
  userPublic: UserPublic
  requiredFirebaseReauthenticate: boolean
}

export type BacksideTopRequest = {
  backsideId: string
}

export type BacksideTopResponse = {
  backsideInfo: BacksideInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type BacksideRankingRequest = {
  backsideId: string
}

export type BacksideRankingResponse = {
  rankingInfos: BacksideRankingInfo[]
  selfFinalScore: string
  selfRank: number
  commonResponse: CommonResponse
}

export type BacksideStageStartRequest = {
  backsideId: string
  number: number
  deckNumber: string
  difficultyNumber: number
}

export type BacksideStageStartResponse = {
  stageInfo: BacksideStageInfo
  execPanelLocationInfo: BacksideExecPanelLocationInfo
  halfwayLiveBonusChoices: BacksideLiveBonus[]
  halfwaySurpriseInfo: BacksideSurpriseInfo
  halfwayPracticeClearInfo: BacksidePracticeStageClearInfo
  isForceRetired: boolean
  commonResponse: CommonResponse
}

export type BacksideStageActionRequest = {
  backsideId: string
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
  isSkip: boolean
}

export type BacksideStageActionResponse = {
  stageProgressInfo: BacksideStageProgressInfo
  liveBonusChoices: BacksideLiveBonus[]
  isScheduled: boolean
  liveInfo: BacksideLiveInfo
  practiceClearInfo: BacksidePracticeStageClearInfo
  finalClearInfo: BacksideFinalStageClearInfo
  surpriseInfo: BacksideSurpriseInfo
  isForceRetired: boolean
  commonResponse: CommonResponse
}

export type BacksideStageLiveBonusRequest = {
  backsideId: string
  liveBonusId: string
}

export type BacksideStageLiveBonusResponse = {
  stageProgressInfo: BacksideStageProgressInfo
  commonResponse: CommonResponse
}

export type BacksideStagePracticeUpdateRequest = {
  backsideId: string
  isUpdate: boolean
}

export type BacksideStagePracticeUpdateResponse = {
  commonResponse: CommonResponse
}

export type BacksideStageResetRequest = {
  backsideId: string
  isInGame: boolean
}

export type BacksideStageResetResponse = {
  commonResponse: CommonResponse
}

export type BacksideStageSurpriseFinishRequest = {
  backsideId: string
}

export type BacksideStageSurpriseFinishResponse = {
  stageProgressInfo: BacksideStageProgressInfo
  commonResponse: CommonResponse
}

export type BacksideStageDeckPositionChangeRequest = {
  backsideId: string
  deckPositionInfos: BacksideDeckPositionInfo[]
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
}

export type BacksideStageDeckPositionChangeResponse = {
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  deckUserCharacters: UserCharacter[]
  baseDeckOverallValue: string
  commonResponse: CommonResponse
}

export type BacksideStageDeckGetRequest = {
  backsideId: string
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
}

export type BacksideStageDeckGetResponse = {
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  deckUserCharacters: UserCharacter[]
  baseDeckOverallValue: string
  commonResponse: CommonResponse
}

export type BacksideInfo = {
  id: string
  name: string
  type: BacksideType
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  eventExchangeBoothInfo: EventExchangeBoothInfo
  noticeInfo: NoticeInfo
  areaInfo: BacksideAreaInfo
  rankingRewardInfos: BacksideRankingRewardInfo[]
  realScore: string
  realScoreTime: string
  rank: string
  stageStamina: string
  stageStaminaUpdatedTime: string
  stageStaminaRecoveryMinutes: number
}

export type BacksideAreaInfo = {
  areaId: string
  name: string
  type: BacksideAreaType
  assetId: string
  backsideDifficultyInfos: BacksideDifficultyInfo[]
  currentDifficultyNumber: number
  lastChallengeDifficultyNumber: number
  difficultyType: BacksideDifficultyType
}

export type BacksidePracticeStageTotalResultInfo = {
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  practiceLiveBonusInfos: BacksideLiveBonusInfo[]
}

export type BacksidePracticeStageResultInfo = {
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideFinalStageResultInfo = {
  totalPracticeRankType: BacksidePracticeRankType
  totalPracticeRankPlus: number
  totalPracticeScore: string
  finalRankType: ResultRankType
  finalRankPlus: number
  finalScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  practiceScore: string
}

export type BacksidePracticeStageHalfwayInfo = {
  passedActionCount: number
  practiceScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideFinalStageHalfwayInfo = {
  passedActionCount: number
  deckCardInfos: BacksideDeckCardInfo[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  practiceScore: string
  totalPracticeScore: string
}

export type BacksideLiveBonusInfo = {
  stageNumber: number
  stageType: BacksideStageType
  stageName: string
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideStageInfo = {
  panelInfos: BacksidePanelInfo[]
  scheduleInfos: BacksideScheduleInfo[]
  nextActionCount: string
  practiceScore: string
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  liveBonuses: BacksideLiveBonus[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  cardLiveAbilityInfos: BacksideCardLiveAbilityInfo[]
  totalPracticeScore: string
  deckUserCharacters: UserCharacter[]
  baseDeckOverallValue: string
}

export type BacksideStageProgressInfo = {
  panelInfos: BacksidePanelInfo[]
  nextActionCount: string
  practiceScore: string
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  liveBonuses: BacksideLiveBonus[]
  execPanelLocationInfo: BacksideExecPanelLocationInfo
  totalPracticeScore: string
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
}

export type BacksidePanelInfo = {
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
  panelType: BacksidePanelType
  panelAttributeType: BacksidePanelAttributeType
  panelRank: number
  panelGoalInfo: BacksidePanelGoalInfo
  panelLiveInfo: BacksidePanelLiveInfo
  panelPvpInfo: BacksidePanelPvpInfo
  panelStaminaInfo: BacksidePanelStaminaInfo
  haveExecuted: boolean
  canAction: boolean
}

export type BacksideOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type BacksidePanelStaminaInfo = {
  staminaConsumptionAmount: number
  staminaRecoveryAmount: number
}

export type BacksideScheduleInfo = {
  actionCount: number
  panelType: BacksidePanelType
}

export type BacksideLiveInfo = {
  result: LiveResult
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
}

export type BacksidePracticeStageClearInfo = {
  name: string
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  lastPracticeRankType: BacksidePracticeRankType
  lastPracticeRankPlus: number
  lastPracticeScore: string
  lastLiveBonuses: BacksideLiveBonus[]
  firstClearRewardResults: RewardResult[]
  firstPracticeRankRewardResults: RewardResult[]
  loopPracticeRankRewardResults: RewardResult[]
}

export type BacksideFinalStageClearInfo = {
  name: string
  finalRankType: ResultRankType
  finalRankPlus: number
  finalScore: string
  firstClearRewardResults: RewardResult[]
  firstFinalRankRewardResults: RewardResult[]
  isBest: boolean
  newRank: string
  practiceScore: string
  totalPracticeScore: string
  loopFinalRankRewardResults: RewardResult[]
  difficultyAreaRewardResults: RewardResult[]
}

export type BacksideSurpriseInfo = {
  advAssetId: string
  liveBonus: BacksideLiveBonus
}

export type BacksideExecPanelLocationInfo = {
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
}

export type BacksideDeckPositionInfo = {
  cardId: string
  newPosition: number
}

export type CardEnhanceRequest = {
  cardId: string
  level: number
}

export type CardEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardLimitBreakRequest = {
  cardId: string
  rarity: number
}

export type CardLimitBreakResponse = {
  commonResponse: CommonResponse
}

export type CardSkillEnhanceRequest = {
  cardId: string
  skillId: string
}

export type CardSkillEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardLiveAbilityEnhanceRequest = {
  cardId: string
  abilityId: string
}

export type CardLiveAbilityEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardActivityAbilityEnhanceRequest = {
  cardId: string
  abilityId: string
}

export type CardActivityAbilityEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardResetRequest = {
  cardId: string
}

export type CardResetResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type CardSetSupportRequest = {
  number: number
  cardId: string
}

export type CardSetSupportResponse = {
  commonResponse: CommonResponse
}

export type CardRemoveSupportRequest = {
  number: number
}

export type CardRemoveSupportResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type CardReleaseSupportRequest = {
  useStone: boolean
}

export type CardReleaseSupportResponse = {
  commonResponse: CommonResponse
}

export type LoginBonusPackageItem = {
  shopItem: ShopItem
  loginBonuses: ShopLoginBonus[]
  isPurchased: boolean
}

export type ConditionRewardPackageItem = {
  shopItem: ShopItem
  conditionRewards: ShopConditionReward[]
  isPurchased: boolean
}

export type LiveResult = {
  userInfos: LiveUserInfo[]
  activatedPassiveSkills: LiveSkill[]
  charts: LiveChart[]
  totalAudienceAmount: number
  cleared: boolean
}

export type LiveUserDeck = {
  deckName: string
  cards: LiveDeckCard[]
  bonusSkills: LiveDeckCardSkill[]
}

export type LiveChart = {
  number: number
  chartType: MusicChartType
  attributeType: AttributeType
  beats: LiveBeat[]
  activatedSkill: LiveSkill
  activatedPassiveSkills: LiveSkill[]
  userStatuses: LiveUserStatus[]
  cardStatuses: LiveCardStatus[]
}

export type LiveBeat = {
  order: number
  cardIndex: number
  score: string
  isCritical: boolean
}

export type LiveSkill = {
  order: number
  cardIndex: number
  skillIndex: number
  activated: boolean
  stamina: string
  score: string
  isCritical: boolean
  details: LiveSkillDetail[]
  failures: LiveSkillFailure[]
  isComboBreak: boolean
  descriptions: LiveLogDescription[]
}

export type LiveSkillFailure = {
  cardIndex: number
  type: SkillFailureType
  eachFailureTypes: SkillFailureType[]
}

export type LiveSkillDetail = {
  efficacyIndex: number
  value: string
  statusType: StatusEffectType
  targetCardIndexes: number[]
}

export type LiveLogDescription = {
  message: string
}

export type LiveUserStatus = {
  userIndex: number
  currentComboCount: number
  totalScore: string
}

export type LiveCardStatus = {
  cardIndex: number
  stamina: string
  dance: string
  vocal: string
  visual: string
  effects: LiveCardStatusEffect[]
  skillStatuses: LiveSkillStatus[]
}

export type LiveCardStatusEffect = {
  statusType: StatusEffectType
  skillEfficacyType: SkillEfficacyType
  value: string
  grade: number
  remainEffectedChartCount: number
  maxGrade: number
  value2: string
}

export type LiveSkillStatus = {
  skillIndex: number
  remainCount: number
  coolTime: number
}

export type LiveUserResult = {
  score: string
  criticalCount: number
  hitCount: number
  missCount: number
  maxComboCount: number
  cardResults: LiveCardResult[]
}

export type PvpOpponentInfo = {
  opponentId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  cardInfos: LiveBattleCardInfo[]
}

export type GvgOpponentInfo = {
  opponentId: string
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type QuestRankPattern = {
  rankType: ResultRankType
  plus: number
  thresholdScore: string
}

export type ActivityPromotionReward = {
  resourceType: ResourceType
  resourceId: string
  amount: string
  isRare: boolean
}

export type AllProfileInfo = {
  profile: ProfileInfo
  hierarchy: HierarchyProfileInfo
}

export type FavoritePhotoInfo = {
  photoId: string
  assetId: string
  imageType: PhotoImageType
}

export type NoticeInfo = {
  id: string
  title: string
  bannerAssetId: string
  linkType: LinkType
  linkDetail: string
  displayNotification: boolean
  startTime: string
  listTitle: string
}

export type PaidJpy = {
  amount: number
}

export type FanEventRankPattern = {
  rankType: ResultRankType
  plus: number
  thresholdPoint: number
}

export type ActivityLevelProgress = {
  maxActivityLevel: number
  before: ActivityLevelInfo
  after: ActivityLevelInfo
}

export type ActivityLevelInfo = {
  exp: number
  level: number
  nextLevelLocked: boolean
}

export type ActivityCampaignEffect = {
  type: ActivityCampaignEffectType
  value: number
  endTime: string
}

export type EventStoryEpisodeInfo = {
  episode: number
  unlocked: boolean
}

export type EventExchangeBoothInfo = {
  id: string
  name: string
  bannerAssetId: string
  requiredResourceType: ResourceType
  requiredResourceId: string
}

export type PvpSeasonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  challengeCount: number
  nextStartTime: string
}

export type CurrentGvgInfo = {
  gvgSeason: GvgSeasonInfo
  isRemainingChallenge: boolean
}

export type HomeEventInfo = {
  eventMissionInfos: HomeEventMissionInfo[]
  tourInfos: HomeTourInfo[]
  backsideInfos: HomeBacksideInfo[]
  marathonInfos: HomeMarathonInfo[]
  photoContestInfos: HomePhotoContestInfo[]
  raceInfos: HomeRaceInfo[]
  ladderInfos: HomeLadderInfo[]
}

export type QuestReward = {
  clearRewards: RewardResult[]
  scoreRankRewards: RewardResult[]
  scoreRankAdditionalRewards: RewardResult[]
  musicMasteryRewards: Reward[]
  achievedRankRewards: Reward[]
  rewardCards: QuestRewardCard[]
  campaignDropRewards: RewardResult[]
}

export type QuestOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type BoxGachaDrawResult = {
  itemType: BoxGachaItemType
  rewards: Reward[]
  liveBonusId: string
}

export type UserDeckPosition = {
  position: number
  cardId: string
  part1AccessoryId: string
  part2AccessoryId: string
  photoIds: string[]
  costumeId: string
  buddyUserId: string
}

export type CommonResponse = {
  updatedData: UpdatedData
  deletedData: DeletedData
}

export type UpdatedData = {
  user: User
  items: UserItem[]
  cards: UserCard[]
  characters: UserCharacter[]
  costumes: UserCostume[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition[]
  stories: UserStory[]
  points: UserPoint[]
  staffs: UserStaff[]
  messages: UserMessage[]
  telephones: UserTelephone[]
  missions: UserMission[]
  profile: UserProfile
  emblems: UserEmblem[]
  characterMusics: UserCharacterMusic[]
  balance: UserBalance
  totalCount: UserTotalCount
  areas: UserArea[]
  quests: UserQuest[]
  gachaButtons: UserGachaButton[]
  homeTalks: UserHomeTalk[]
  photoReport: UserPhotoReport
  cardSupports: UserCardSupport[]
  messageSchedules: UserMessageSchedule[]
  notifications: UserNotification[]
  hierarchy: UserHierarchy
  tutorials: UserTutorial[]
  homePositions: UserHomePosition[]
  musics: UserMusic[]
  decorations: UserDecoration[]
  photoRecipes: UserPhotoRecipe[]
  buddy: UserBuddy
  invite: UserInvite
}

export type DeletedData = {
  items: UserItem[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition[]
  points: UserPoint[]
  messageSchedules: UserMessageSchedule[]
  stories: UserStory[]
  photoRecipes: UserPhotoRecipe[]
}

export type CostumeSetRequest = {
  costumeId: string
}

export type CostumeSetResponse = {
  commonResponse: CommonResponse
}

export type CostumeLiveSetRequest = {
  costumeId: string
}

export type CostumeLiveSetResponse = {
  commonResponse: CommonResponse
}

export type CostumeCheckRequest = {
  costumeId: string
}

export type CostumeCheckResponse = {
  commonResponse: CommonResponse
}

export type DeckSaveRequest = {
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  deckEditType: DeckEditType
  questId: string
}

export type DeckSaveResponse = {
  commonResponse: CommonResponse
}

export type DeckDeleteRequest = {
  number: number
}

export type DeckDeleteResponse = {
  commonResponse: CommonResponse
}

export type DeckBuddyListResponse = {
  friendBuddyUserCardInfos: DeckBuddyUserCardInfo[]
  notFriendBuddyUserCardInfos: DeckBuddyUserCardInfo[]
  commonResponse: CommonResponse
}

export type DeckBuddyUserCardInfo = {
  userId: string
  userCard: UserCard
  managerName: string
}

export type DiaryGetInfosResponse = {
  infos: DiaryInfo[]
  commonResponse: CommonResponse
}

export type DiaryReadRequest = {
  diaryIds: string[]
}

export type DiaryReadResponse = {
  commonResponse: CommonResponse
}

export type DiaryInfo = {
  id: string
  year: number
  month: number
  day: number
  assetId: string
  isRead: boolean
}

export type DivisionListResponse = {
  divisions: DivisionInfo[]
  reasonType: DivisionCannotMoveReasonType
  commonResponse: CommonResponse
}

export type DivisionMoveRequest = {
  divisionId: string
}

export type DivisionMoveResponse = {
  commonResponse: CommonResponse
}

export type DokanListResponse = {
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type DokanSetWatchedRequest = {
  dokanIds: string[]
  skippedDokanIds: string[]
}

export type DokanSetWathcedResponse = {
  commonResponse: CommonResponse
}

export type ExchangeListResponse = {
  booths: ExchangeBooth[]
  commonResponse: CommonResponse
}

export type ExchangeExecuteRequest = {
  exchangeId: string
  count: number
}

export type ExchangeExecuteResponse = {
  results: RewardResult[]
  afterExchangeItem: ExchangeItem
  booth: ExchangeBooth
  commonResponse: CommonResponse
}

export type ForumListThreadReplyRequest = {
  threadId: string
  requestType: ForumListReplyRequestType
  replyId: number
}

export type ForumCreateThreadRequest = {
  title: string
  firstReplyContent: string
}

export type ForumSendThreadReplyRequest = {
  threadId: string
  replyContent: string
}

export type ForumLikeReplyRequest = {
  threadId: string
  replyId: number
}

export type ForumDislikeReplyRequest = {
  threadId: string
  replyId: number
}

export type ForumBookmarkThreadRequest = {
  threadId: string
}

export type ForumUnbookmarkThreadRequest = {
  threadId: string
}

export type ForumBlockUserRequest = {
  userId: string
}

export type ForumListThreadResponse = {
  threads: ForumThreadInfo[]
  commonResponse: CommonResponse
}

export type ForumListThreadReplyResponse = {
  threadReplies: ForumThreadReplyInfo[]
  thread: ForumThreadInfo
  commonResponse: CommonResponse
}

export type ForumCreateThreadResponse = {
  threadId: string
  commonResponse: CommonResponse
}

export type ForumSendThreadReplyResponse = {
  commonResponse: CommonResponse
}

export type ForumLikeReplyResponse = {
  commonResponse: CommonResponse
}

export type ForumDislikeReplyResponse = {
  commonResponse: CommonResponse
}

export type ForumBookmarkThreadResponse = {
  commonResponse: CommonResponse
}

export type ForumUnbookmarkThreadResponse = {
  commonResponse: CommonResponse
}

export type ForumBlockUserResponse = {
  commonResponse: CommonResponse
}

export type ForumThreadInfo = {
  id: string
  title: string
  replyCount: number
  isBookmarked: boolean
  lastUpdatedTime: string
  power: number
}

export type ForumThreadReplyInfo = {
  id: number
  threadId: string
  userId: string
  userName: string
  repliedTime: string
  content: string
  likeCount: number
  isLiked: boolean
  isBlocked: boolean
  isDeleted: boolean
}

export type FriendListResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type FriendDeleteRequest = {
  userIds: string[]
}

export type FriendDeleteResponse = {
  commonResponse: CommonResponse
}

export type FriendApplyRequest = {
  userId: string
}

export type FriendApplyResponse = {
  isTargetOfferedLimit: boolean
  isAlreadyFriend: boolean
  isAlreadyOffering: boolean
  isAlreadyOffered: boolean
  isAccountBan: boolean
  applied: boolean
  commonResponse: CommonResponse
}

export type FriendApproveRequest = {
  userId: string
}

export type FriendApproveResponse = {
  isFriendLimit: boolean
  isTargetFriendLimit: boolean
  isOfferDeleted: boolean
  isAccountBan: boolean
  approved: boolean
  commonResponse: CommonResponse
}

export type FriendCancelRequest = {
  userId: string
}

export type FriendCancelResponse = {
  commonResponse: CommonResponse
}

export type FriendCancelAllResponse = {
  commonResponse: CommonResponse
}

export type FriendRejectRequest = {
  userId: string
}

export type FriendRejectResponse = {
  isOfferDeleted: boolean
  commonResponse: CommonResponse
}

export type FriendListApplyingResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type FriendListAppliedResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type FriendSearchResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type GachaListResponse = {
  gachas: GachaInfo[]
  commonResponse: CommonResponse
}

export type GachaDrawRequest = {
  gachaButtonId: string
  execCount: number
}

export type GachaDrawResponse = {
  button: GachaButtonInfo
  rewards: Reward[]
  consumptionResults: ConsumptionResult[]
  rewardResults: RewardResult[]
  drawRewardResults: RewardResult[]
  bonusRewards: Reward[]
  gachaMovie: GachaMovie
  cardRewards: Reward[]
  continuousResult: GachaContinuousResult
  commonResponse: CommonResponse
}

export type GachaExchangeRequest = {
  gachaExchangeId: string
  count: number
}

export type GachaExchangeResponse = {
  exchange: GachaExchangeInfo
  rewardResults: RewardResult[]
  consumptionResults: ConsumptionResult[]
  commonResponse: CommonResponse
}

export type GachaProbabilityRequest = {
  gachaId: string
}

export type GachaProbabilityResponse = {
  rarityProbabilityInfos: RarityProbabilityInfo[]
  fixProbabilityInfos: FixProbabilityInfo[]
  probabilityInfos: ProbabilityInfo[]
  commonResponse: CommonResponse
}

export type GachaHistoryRequest = {
  gachaType: GachaType
}

export type GachaHistoryResponse = {
  histories: GachaHistory[]
  commonResponse: CommonResponse
}

export type GachaSelectCardRequest = {
  gachaId: string
  selectedCardIds: string[]
}

export type GachaSelectCardResponse = {
  commonResponse: CommonResponse
}

export type RarityProbabilityInfo = {
  rarity: number
  probability: number
  probabilityInfos: ProbabilityInfo[]
  gachaRewardPatternType: GachaRewardPatternType
  individualProbability: number
}

export type FixProbabilityInfo = {
  gachaButtonId: string
  rarityProbabilityInfos: RarityProbabilityInfo[]
}

export type ProbabilityInfo = {
  resourceType: ResourceType
  resourceId: string
  amount: string
  probability: number
  isRatioUp: boolean
}

export type GachaAnimation = {
  id: string
  embeddedType: GachaAnimationEmbeddedType
  assetId: string
}

export type GachaMovie = {
  assetId: string
  bgmAssetId: string
  isForce: boolean
}

export type GiftListRequest = {
  offset: number
  sortType: GiftSortType
  filters: GiftFilterType[]
  desc: boolean
}

export type GiftListResponse = {
  gifts: UserGift[]
  hasNext: boolean
  count: number
  commonResponse: CommonResponse
}

export type GiftCountRequest = {
  filters: GiftFilterType[]
}

export type GiftCountResponse = {
  count: number
  commonResponse: CommonResponse
}

export type GiftReceiveRequest = {
  giftIds: string[]
}

export type GiftReceiveResponse = {
  results: RewardResult[]
  hasUnreceivedGift: boolean
  receivedGiftIds: string[]
  unreceivedGiftIds: string[]
  hierarchyChangeInfo: HierarchyChangeInfo
  commonResponse: CommonResponse
}

export type GiftHistoryListResponse = {
  gifts: UserGiftHistory[]
  commonResponse: CommonResponse
}

export type GuildListResponse = {
  guilds: GuildParam[]
  commonResponse: CommonResponse
}

export type GuildGvgSeasonResult = {
  seasonRank: number
  seasonWinCount: number
  seasonLoseCount: number
  seasonDrawCount: number
  seasonTotalPoint: string
}

export type GuildTopResponse = {
  rewardGuildMedalAmount: number
  gvgSeasonInfo: GuildGvgSeasonInfo
  exchangeBoothId: string
  commonResponse: CommonResponse
}

export type GuildGvgRankInfo = {
  name: string
  point: string
  rank: number
}

export type GuildJoinRequest = {
  guildId: string
  isRecommended: boolean
}

export type GuildJoinResponse = {
  commonResponse: CommonResponse
}

export type GvgTopResponse = {
  topResult: GvgTopInfo
  commonResponse: CommonResponse
}

export type GvgTopInfo = {
  gvgSeason: GvgSeasonInfo
  currentMatch: GvgCurrentSeasonMatchInfo
  seasonMatches: GvgSeasonMatchInfo[]
  rankingRewards: GvgRankingRewardInfo[]
  guildRankingRewards: GvgGuildRankingRewardInfo[]
  gvgQuest: LiveBattleQuestInfo
  userGvgSeason: UserGvgSeasonInfo
  isSkipAvailable: boolean
}

export type UserGvgSeasonInfo = {
  points: string[]
  totalPoint: string
  rankRatePercent: number
  rank: number
  guildPoint: string
  guildRank: number
  hasChallenged: boolean
  winCount: number
  loseCount: number
  drawCount: number
  isCurrentMatchWin: boolean
}

export type GvgListOpponentRequest = {
  gvgSeasonId: string
}

export type GvgListOpponentResponse = {
  opponentInfos: GvgOpponentInfo[]
  commonResponse: CommonResponse
}

export type GvgListRankingRequest = {
  gvgSeasonId: string
}

export type GvgListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type GvgStartRequest = {
  gvgSeasonId: string
  opponentId: string
  deckNumber: number
  useStone: boolean
  isSkip: boolean
  matchNumber: number
  challengeConsumptionType: GvgChallengeConsumptionType
}

export type GvgStartResponse = {
  result: LiveResult
  point: string
  addPoint: string
  rank: number
  musicMasteryRewards: Reward[]
  challengeRewards: RewardResult[]
  guildPoint: string
  addGuildPoint: string
  totalPoint: string
  profile: AllProfileInfo
  opponentProfile: AllProfileInfo
  winRewards: RewardResult[]
  commonResponse: CommonResponse
}

export type GvgListAssetRequest = {
  gvgSeasonId: string
  opponentId: string
  deckNumber: number
  matchNumber: number
}

export type GvgListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type HealthCheckRequest = {
  service: string
}

export type HealthCheckResponse = {
}

export type HierarchyRewardsReceiveRequest = {
  hierarchyRewardIds: string[]
}

export type HierarchyDivisionRewardsReceiveRequest = {
  hierarchyDivisionRewardIds: string[]
}

export type HierarchyTopResponse = {
  userHierarchyInfo: UserHierarchyInfo
  rewardInfos: HierarchyRewardInfo[]
  divisionRewardInfos: HierarchyDivisionRewardInfo[]
  highestGradeUserNames: string[]
  commonResponse: CommonResponse
}

export type HierarchyRankingResponse = {
  rankUserInfos: HierarchyRankUserInfo[]
  commonResponse: CommonResponse
}

export type HierarchyRewardsReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type HierarchyDivisionRewardsReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type HomeEnterRequest = {
  skipUpdate: boolean
}

export type NotiShopItem = {
  shopId: string
  shopItemIds: string[]
}

export type HomeLoginRequest = {
  settingInfo: SettingInfo
}

export type SettingInfo = {
  soundBgm: number
  soundEffect: number
  soundVoice: number
  graphicType: GraphicType
  frameRate: number
  activityFinishNotification: boolean
  messageNotification: boolean
  nightMode: boolean
  notLoginNotification: boolean
}

export type HomeLoginResponse = {
  paidJpy: PaidJpy
  purchasedLoginBonusShopInfos: PurchasedLoginBonusShopInfo[]
  commonResponse: CommonResponse
}

export type HomeReadTalkRequest = {
  homeTalkId: string
}

export type HomeReadTalkResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse
}

export type HomeSetReviewResponse = {
  commonResponse: CommonResponse
}

export type HomeSetCharacterPositionRequest = {
  positions: HomeCharacterPosition[]
}

export type HomeCharacterPosition = {
  type: HomePositionType
  characterId: string
}

export type HomeSetCharacterPositionResponse = {
  commonResponse: CommonResponse
}

export type HomePvpInfo = {
  remainingChallengeCount: number
  latestPvpSeason: PvpSeasonInfo
}

export type PvpRewardResultInfo = {
  name: string
  point: string
  rank: string
  rankingRewards: Reward[]
  hierarchyChangeInfo: HierarchyChangeInfo
}

export type GvgRewardResultInfo = {
  name: string
  point: string
  rank: number
  rankRate: number
  guildRank: number
  rankingRewards: Reward[]
  guildRankingRewards: Reward[]
  hierarchyChangeInfo: HierarchyChangeInfo
}

export type TourRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type BacksideRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type PhotoContestRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type RaceRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type RaceDailyRewardResultInfo = {
  score: string
  rank: number
  rankingRewards: Reward[]
  rankingUserInfos: RaceDailyRankingUserInfo[]
  days: number
}

export type BuddyUsedRewardResultInfo = {
  usedCount: string
  rewards: Reward[]
}

export type HomeActiveFanEvent = {
  characterIds: string[]
  finishTime: string
  activityPoint: number
  rankType: ResultRankType
  rankPlus: number
  currentCheerPoint: number
}

export type HomeActivePromotion = {
  characterIds: string[]
  finishTime: string
  rewardGoldAmount: number
  rewardCardEnhanceItemAmount: number
  rewards: ActivityPromotionReward[]
  hasMoreRewards: boolean
}

export type HomeActiveRefresh = {
  characterIds: string[]
  finishTime: string
}

export type FunctionMaintenanceInfo = {
  type: FunctionMaintenanceType
  targetIds: string[]
  isTwitter: boolean
  websiteUrl: string
}

export type BannerInfo = {
  menuBanners: Banner[]
  messageBanners: Banner[]
  boardBanners: Banner[]
  questBanners: Banner[]
  inviteBanners: Banner[]
}

export type FanEventInfo = {
  fanEvents: FanEvent[]
  activeFanEvent: ActiveFanEvent
  campaignEffects: ActivityCampaignEffect[]
}

export type PromotionInfo = {
  promotions: Promotion[]
  activePromotion: ActivePromotion
  campaignEffects: ActivityCampaignEffect[]
}

export type RefreshInfo = {
  refreshes: Refresh[]
  activeRefresh: ActiveRefresh
  campaignEffects: ActivityCampaignEffect[]
}

export type PurchasedLoginBonusShopInfo = {
  shopInfo: ShopInfo
  loginBonusPackageItem: LoginBonusPackageItem
}

export type PurchasedConditionRewardShopInfo = {
  shopInfo: ShopInfo
  conditionRewardPackageItem: ConditionRewardPackageItem
}

export type InviteTopResponse = {
  inviteCode: string
  guestInfos: InviteGuestInfo[]
  noticeInfo: NoticeInfo
  receivedHostRewardTotalAmount: string
  exchangeBoothId: string
  commonResponse: CommonResponse
}

export type InviteReceiveHostRewardsRequest = {
  userIds: string[]
}

export type InviteReceiveHostRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type InviteEnterCodeRequest = {
  inviteCode: string
}

export type InviteEnterCodeResponse = {
  commonResponse: CommonResponse
}

export type ItemSellRequest = {
  itemId: string
  amount: string
}

export type ItemSellResponse = {
  commonResponse: CommonResponse
}

export type LadderTopRequest = {
  ladderId: string
}

export type LadderTopResponse = {
  ladderInfo: LadderInfo
  progressInfo: LadderProgressInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type LadderPanelReachRequest = {
  ladderId: string
  step: number
  lane: number
}

export type LadderPanelReachResponse = {
  rewardResults: RewardResult[]
  progressInfo: LadderProgressInfo
  commonResponse: CommonResponse
}

export type LadderProgressInfo = {
  steps: LadderStep[]
}

export type LadderStep = {
  step: number
  lane1Panel: LadderPanel
  lane2Panel: LadderPanel
  lane3Panel: LadderPanel
}

export type LoginBonusListResponse = {
  infos: LoginBonusInfo[]
  commonResponse: CommonResponse
}

export type LoginBonusReceiveRequest = {
  loginBonusId: string
}

export type LoginBonusReceiveResponse = {
  userLoginBonus: UserLoginBonus
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type LoginBonusInfo = {
  userLoginBonus: UserLoginBonus
  noticeInfo: NoticeInfo
}

export type MarathonTopRequest = {
  marathonId: string
}

export type MarathonTopResponse = {
  marathonInfo: MarathonInfo
  userMarathonInfo: UserMarathonInfo
  questInfos: MarathonQuestInfo[]
  boxGachaInfos: MarathonBoxGachaInfo[]
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type MarathonQuestUnlockRequest = {
  marathonQuestId: string
}

export type MarathonQuestUnlockResponse = {
  unlockedQuestInfo: MarathonQuestInfo
  commonResponse: CommonResponse
}

export type MarathonQuestStartRequest = {
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  deckNumber: number
  isSkip: boolean
  execCount: number
}

export type MarathonQuestListAssetRequest = {
  marathonQuestId: string
  deckNumber: number
}

export type MarathonQuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type MarathonUseQuestStaminaRecoveryItemRequest = {
  marathonId: string
  amount: number
}

export type MarathonUseQuestStaminaRecoveryItemResponse = {
  userMarathonInfo: UserMarathonInfo
  commonResponse: CommonResponse
}

export type MarathonListDeckRequest = {
  marathonId: string
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
}

export type MarathonListDeckResponse = {
  deckInfos: MarathonDeckInfo[]
}

export type MarathonDeckSaveRequest = {
  marathonQuestId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  marathonQuestDifficultyNumber: number
}

export type MarathonDeckSaveResponse = {
  deckInfo: MarathonDeckInfo
  commonResponse: CommonResponse
}

export type MarathonBoxGachaDrawRequest = {
  marathonId: string
  boxGachaId: string
  execCount: number
}

export type MarathonBoxGachaDrawResponse = {
  drawResults: BoxGachaDrawResult[]
  commonResponse: CommonResponse
}

export type MarathonBoxGachaResetRequest = {
  marathonId: string
  boxGachaId: string
}

export type MarathonBoxGachaResetResponse = {
  boxGachaInfo: MarathonBoxGachaInfo
  commonResponse: CommonResponse
}

export type UserMarathonInfo = {
  currentStamina: number
  staminaUpdatedTime: string
  liveBonusInfos: MarathonLiveBonusInfo[]
}

export type MarathonQuestDifficultyLevelInfo = {
  marathonQuestDifficultyNumber: number
  cleared: boolean
  rankType: ResultRankType
  plus: number
  opponentInfo: QuestOpponentInfo
  unlocked: boolean
  highestScore: string
}

export type MarathonDeckInfo = {
  number: number
  cardDetailInfo: MarathonDeckCardDetailInfo[]
  deckOverallValue: string
}

export type MarathonDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: MarathonAccessoryInfo[]
  photoInfos: MarathonPhotoInfo[]
}

export type MarathonPhotoInfo = {
  photoId: string
  level: number
  abilities: MarathonPhotoAbilityInfo[]
}

export type MarketListItemResponse = {
  marketItems: MarketItem[]
  nextResetTime: string
  freeResetRemainCount: number
  resetRemainCount: number
  requiredResetStoneAmount: number
  commonResponse: CommonResponse
}

export type MarketResetRequest = {
  isFree: boolean
}

export type MarketResetResponse = {
  marketItems: MarketItem[]
  freeResetRemainCount: number
  resetRemainCount: number
  requiredResetStoneAmount: number
  commonResponse: CommonResponse
}

export type MarketPurchaseRequest = {
  number: number
}

export type MarketPurchaseResponse = {
  marketItems: MarketItem[]
  commonResponse: CommonResponse
}

export type MasterGetResponse = {
  masterTag: MasterTag
}

export type MasterFaqResponse = {
  helpCategories: HelpCategory[]
}

export type MessageListGroupResponse = {
  infos: MessageGroupInfo[]
  commonResponse: CommonResponse
}

export type MessageTimelineRequest = {
  messageGroupId: string
  timelineId: string
}

export type MessageTimelineResponse = {
  infos: TimelineInfo[]
  hasNext: boolean
  commonResponse: CommonResponse
}

export type MessageReceiveRequest = {
  messageIds: string[]
}

export type MessageReceiveResponse = {
  commonResponse: CommonResponse
}

export type MessageSaveRequest = {
  messageGroupId: string
  timelineId: string
  messageDetailId: string
  selectMessageDetailIds: string[]
}

export type MessageSaveResponse = {
  commonResponse: CommonResponse
}

export type MessageFinishRequest = {
  messageGroupId: string
  timelineId: string
  selectMessageDetailIds: string[]
}

export type MessageFinishResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse
}

export type MessageSaveHistoryRequest = {
  messageId: string
  selectMessageDetailIds: string[]
}

export type MessageSaveHistoryResponse = {
  commonResponse: CommonResponse
}

export type MigrationListResponse = {
  apple: boolean
  google: boolean
  facebook: boolean
  twitter: boolean
  password: boolean
  commonResponse: CommonResponse
}

export type MigrationExecuteRequest = {
  onetimeToken: string
}

export type MigrationExecuteResponse = {
  token: string
}

export type MigrationSetPasswordRequest = {
  password: string
}

export type MigrationSetPasswordResponse = {
  commonResponse: CommonResponse
}

export type MigrationMigratePasswordRequest = {
  userId: string
  password: string
}

export type MigrationProviderAppleInfo = {
  idToken: string
}

export type MigrationLinkAppleRequest = {
  info: MigrationProviderAppleInfo
}

export type MigrationMigrateAppleRequest = {
  info: MigrationProviderAppleInfo
}

export type MigrationProviderGoogleInfo = {
  idToken: string
}

export type MigrationLinkGoogleRequest = {
  info: MigrationProviderGoogleInfo
}

export type MigrationMigrateGoogleRequest = {
  info: MigrationProviderGoogleInfo
}

export type RequestTwitterOAuthTokenRequest = {
  bundleId: string
}

export type RequestTwitterOAuthTokenResponse = {
  oauthToken: string
}

export type MigrationProviderTwitterInfo = {
  oauthToken: string
  oauthVerifier: string
}

export type MigrationLinkTwitterRequest = {
  info: MigrationProviderTwitterInfo
}

export type MigrationMigrateTwitterRequest = {
  info: MigrationProviderTwitterInfo
}

export type MigrationLinkResponse = {
  success: boolean
  linkedUserId: string
  linkedUser: User
  onetimeToken: string
  commonResponse: CommonResponse
}

export type MigrationMigrateResponse = {
  success: boolean
  linkedUserId: string
  linkedUser: User
  onetimeToken: string
}

export type MigrationUnlinkRequest = {
  providerType: ProviderType
}

export type MigrationUnlinkResponse = {
  commonResponse: CommonResponse
}

export type MissionListResponse = {
  userMissions: UserMission[]
  commonResponse: CommonResponse
}

export type MissionReceiveRequest = {
  missionIds: string[]
}

export type MissionReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type MissionURLTransitionRequest = {
  url: string
}

export type MissionURLTransitionResponse = {
  commonResponse: CommonResponse
}

export type MissionEventRequest = {
  eventMissionId: string
}

export type MissionEventResponse = {
  info: EventMissionInfo
  commonResponse: CommonResponse
}

export type CheckOption = {
  disableGameAuthToken: boolean
  disableMasterVersion: boolean
  enableResponseCache: boolean
  enableBodyHash: boolean
  disableCheckLoginToday: boolean
  disableCheckMaintenance: boolean
  disableCheckAppVersion: boolean
}

export type ErrorOption = {
  errorCodes: ErrorCode[]
}

export type NoticeListResponse = {
  notices: NoticeInfo[]
  malfunctionNotices: NoticeInfo[]
  prNotices: NoticeInfo[]
  noticeHasNext: boolean
  malfunctionNoticeHasNext: boolean
  prNoticeHasNext: boolean
  commonResponse: CommonResponse
}

export type NoticeFetchRequest = {
  noticeCategoryType: number
  offset: number
}

export type NoticeFetchResponse = {
  notices: NoticeInfo[]
  hasNext: boolean
  commonResponse: CommonResponse
}

export type NoticeGetRequest = {
  noticeId: string
}

export type NoticeGetResponse = {
  notice: NoticeInfo
  commonResponse: CommonResponse
}

export type PhotoSwitchLockRequest = {
  photoIds: string[]
}

export type PhotoSwitchLockResponse = {
  commonResponse: CommonResponse
}

export type PhotoDeleteRequest = {
  photoIds: string[]
}

export type PhotoDeleteResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type PhotoEnhanceRequest = {
  photoId: string
  level: number
}

export type PhotoEnhanceResponse = {
  commonResponse: CommonResponse
}

export type PhotoRerollRequest = {
  photoId: string
}

export type PhotoRerollResponse = {
  commonResponse: CommonResponse
}

export type PhotoRetouchRequest = {
  photoRecipeId: string
  photoId: string
}

export type PhotoRetouchResponse = {
  commonResponse: CommonResponse
}

export type PhotoUpdateRequest = {
  photoId: string
  name: string
}

export type PhotoUpdateResponse = {
  commonResponse: CommonResponse
}

export type PhotoReportResponse = {
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoGetImageUrlRequest = {
  type: PhotoImageRequestType
  assetIds: string[]
}

export type PhotoGetImageUrlResponse = {
  urlList: PhotoImageUrl[]
}

export type PhotoImageUrl = {
  assetId: string
  origUrl: string
  tmbUrl: string
}

export type PhotoCheckShootingRequest = {
  actionType: PhotoShootingActionType
  photoActivityId: string
  photoMusicId: string
  photoStageId: string
  characterIds: string[]
  costumeIds: string[]
}

export type PhotoCheckShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCreateShootingRequest = {
  itemId: string
  actionType: PhotoShootingActionType
  photoActivityId: string
  photoMusicId: string
  photoStageId: string
  mainCharacterId: string
  characterIds: string[]
  costumeIds: string[]
  manualCount: number
}

export type PhotoCreateShootingResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoListShootingResponse = {
  activities: PhotoActivity[]
  musics: PhotoMusic[]
  stages: PhotoStage[]
  commonResponse: CommonResponse
}

export type PhotoExtendLimitResponse = {
  commonResponse: CommonResponse
}

export type PhotoSaleRecipeRequest = {
  photoRecipeIds: string[]
}

export type PhotoSaleRecipeResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type PhotoContestTopRequest = {
  photoContestId: string
}

export type PhotoContestTopResponse = {
  photoContestInfo: PhotoContestInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type PhotoContestListPhotoRequest = {
  photoContestId: string
}

export type PhotoContestListPhotoResponse = {
  photoInfos: PhotoContestPhotoInfo[]
  commonResponse: CommonResponse
}

export type PhotoContestRankingRequest = {
  photoContestId: string
}

export type PhotoContestRankingResponse = {
  rankingInfos: PhotoContestRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type PhotoContestReceiveSectionRewardsRequest = {
  photoContestId: string
  sectionRewardIds: string[]
  sectionId: string
}

export type PhotoContestReceiveSectionRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type PhotoContestCheckShootingRequest = {
  photoContestId: string
  actionType: PhotoShootingActionType
  photoContestActivityId: string
  photoContestQuestMusicId: string
  photoContestQuestStageId: string
  selectedCharacterIds: string[]
  selectedCostumeIds: string[]
  sectionId: string
}

export type PhotoContestCheckShootingResponse = {
  nextPhotoImageId: string
  commonResponse: CommonResponse
}

export type PhotoContestSubmitShootingRequest = {
  photoContestId: string
  sectionId: string
  itemId: string
  actionType: PhotoShootingActionType
  photoContestActivityId: string
  photoContestQuestMusicId: string
  photoContestQuestStageId: string
  mainCharacterId: string
  characterIds: string[]
  costumeIds: string[]
  elapsedMilliSeconds: number
  sizeFullPermil: number
  sizeUpperPermil: number
  directionFrontPermil: number
  directionSidePermil: number
  positionPermil: number
  shootingMotionId: string
  selectedCharacterIds: string[]
  selectedCostumeIds: string[]
}

export type PhotoContestCreateShootingRequest = {
  photoContestId: string
  assetId: string
  itemId: string
}

export type PhotoContestCreateShootingResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoContestSectionBaseGuideInfo = {
  baseEvaluationType: PhotoContestBaseEvaluationType
  baseGuideRankType: PhotoContestBaseGuideRankType
}

export type PhotoContestSectionAdvanceGuideInfo = {
  number: number
  description: string
  isSatisfied: boolean
}

export type ProfileFindUserRequest = {
  userId: string
}

export type ProfileUpdateNameRequest = {
  name: string
}

export type ProfileUpdateNameResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateMessageRequest = {
  message: string
}

export type ProfileUpdateMessageResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateBackgroundRequest = {
  backgroundType: ProfileBackgroundType
  favoriteCardId: string
  favoritePhotoId: string
}

export type ProfileUpdateBackgroundResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateFavoriteCharactersRequest = {
  favoriteCharacterIds: string[]
}

export type ProfileUpdateFavoriteCharactersResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateDecorationRequest = {
  decorationId: string
}

export type ProfileUpdateDecorationResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateEmblemRequest = {
  emblemId: string
}

export type ProfileUpdateEmblemResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateLayoutRequest = {
  layoutType: ProfileLayoutType
  informationType: ProfileInformationType
  colorType: ProfileColorType
}

export type ProfileUpdateLayoutResponse = {
  commonResponse: CommonResponse
}

export type ProfileClearTwitterMissionResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateBuddyCardRequest = {
  cardId: string
}

export type ProfileUpdateBuddyCardResponse = {
  commonResponse: CommonResponse
}

export type PvpTopResponse = {
  topResult: PvpTopResultInfo
  opponentInfos: PvpOpponentInfo[]
  commonResponse: CommonResponse
}

export type PvpTopResultInfo = {
  pvpSeason: PvpSeasonInfo
  pvpRewards: PvpRewardInfo[]
  pvpQuest: LiveBattleQuestInfo
  userPvpSeason: UserPvpSeasonInfo
  rank: string
  isSkipAvailable: boolean
  pvpTicketAvailableAmount: number
}

export type UserPvpSeasonInfo = {
  point: string
  challengeCount: number
}

export type PvpListOpponentRequest = {
  pvpSeasonId: string
}

export type PvpListOpponentResponse = {
  opponentInfos: PvpOpponentInfo[]
  commonResponse: CommonResponse
}

export type PvpListRankingRequest = {
  pvpSeasonId: string
}

export type PvpListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type PvpStartRequest = {
  pvpSeasonId: string
  opponentId: string
  deckNumber: number
  usePvpTicket: boolean
  isSkip: boolean
}

export type PvpStartResponse = {
  result: LiveResult
  point: string
  addPoint: string
  rank: number
  musicMasteryRewards: Reward[]
  challengeRewards: RewardResult[]
  profile: AllProfileInfo
  opponentProfile: AllProfileInfo
  commonResponse: CommonResponse
}

export type PvpListAssetRequest = {
  pvpSeasonId: string
  opponentId: string
  deckNumber: number
}

export type PvpListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type QuestListMainResponse = {
  areaGroups: QuestAreaGroupInfo[]
  commonResponse: CommonResponse
}

export type QuestListDailyResponse = {
  areas: QuestAreaInfo[]
  commonResponse: CommonResponse
}

export type QuestListContestResponse = {
  area: QuestAreaInfo
  commonResponse: CommonResponse
}

export type QuestListTowerResponse = {
  area: QuestAreaInfo
  commonResponse: CommonResponse
}

export type QuestStartRequest = {
  questId: string
  deckNumber: number
  useDailyTicket: boolean
  isSkip: boolean
  playCount: number
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type QuestListTowerRankingRequest = {
  areaId: string
}

export type QuestListContestRankingRequest = {
  questId: string
}

export type QuestListContestRankingResponse = {
  selfHighestRank: number
  selfScore: string
  ranks: QuestContestRankInfo[]
  commonResponse: CommonResponse
}

export type QuestListLatestClearRequest = {
  questId: string
}

export type QuestListLatestClearResponse = {
  clears: QuestClearInfo[]
  commonResponse: CommonResponse
}

export type QuestListAssetRequest = {
  questId: string
  deckNumber: number
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type QuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type QuestGetLatestClearLiveResultRequest = {
  questId: string
  userId: string
}

export type QuestGetLatestClearLiveResultResponse = {
  result: LiveResult
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type QuestGetRankingLiveResultRequest = {
  questId: string
  userId: string
}

export type QuestGetRankingLiveResultResponse = {
  result: LiveResult
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type QuestTowerTopResponse = {
  towerArea: QuestTowerAreaInfo
  subTowerAreas: QuestTowerAreaInfo[]
  hierarchyNotiInfo: HierarchyNotiInfo
}

export type QuestTopPvpInfo = {
  rank: number
  remainingChallengeCount: number
  latestPvpSeason: PvpSeasonInfo
}

export type FriendApplyToBuddyInfo = {
  isActive: boolean
  isAlreadyOffered: boolean
}

export type RaceTopRequest = {
  raceId: string
}

export type RaceTopResponse = {
  raceInfo: RaceInfo
  userRaceInfo: UserRaceInfo
  liveQuestInfos: RaceLiveQuestInfo[]
  isInitialLogin: boolean
  dokanInfos: DokanInfo[]
  opponentProgressInfos: RaceOpponentProgressInfo[]
  isFirstLoginInDailyAggregationPeriod: boolean
  nextDailyAggregationTime: string
  commonResponse: CommonResponse
}

export type RaceMovePanelRequest = {
  raceId: string
}

export type RaceMovePanelResponse = {
  rewardResults: RewardResult[]
  userRaceInfo: UserRaceInfo
  opponentProgressInfos: RaceOpponentProgressInfo[]
  liveQuestInfos: RaceLiveQuestInfo[]
  commonResponse: CommonResponse
}

export type RaceReceiveActivityLessonRequest = {
  raceId: string
}

export type RaceReceiveActivityLessonResponse = {
  rewards: Reward[]
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceEnhanceLiveBonusRequest = {
  raceId: string
  liveBonusId: string
  level: number
}

export type RaceEnhanceLiveBonusResponse = {
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceResetLiveBonusRequest = {
  raceId: string
}

export type RaceResetLiveBonusResponse = {
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceStartLivePanelQuestRequest = {
  raceId: string
  deckNumber: number
  isSkip: boolean
}

export type RaceStartLivePanelQuestResponse = {
  result: LiveResult
  userRaceInfo: UserRaceInfo
  opponentProgressInfos: RaceOpponentProgressInfo[]
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type RaceStartLiveAreaQuestRequest = {
  raceId: string
  raceQuestId: string
  difficultyNumber: number
  deckNumber: number
  isSkip: boolean
}

export type RaceStartLiveAreaQuestResponse = {
  result: LiveResult
  userRaceInfo: UserRaceInfo
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type RaceQuestListAssetRequest = {
  raceId: string
  raceQuestId: string
  deckNumber: number
}

export type RaceQuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type RaceListDeckRequest = {
  raceId: string
  raceQuestId: string
  difficultyNumber: number
}

export type RaceListDeckResponse = {
  deckInfos: RaceDeckInfo[]
}

export type RaceSaveDeckRequest = {
  raceId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  raceQuestId: string
  difficultyNumber: number
}

export type RaceSaveDeckResponse = {
  deckInfo: RaceDeckInfo
  commonResponse: CommonResponse
}

export type RaceResetCardCoolTimeRequest = {
  raceId: string
  cardId: string
}

export type RaceResetCardCoolTimeResponse = {
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceRankingRequest = {
  raceId: string
}

export type RaceRankingResponse = {
  rankingInfos: RaceRankingInfo[]
  selfClearPanelCount: string
  selfRank: number
}

export type RaceAreaInfo = {
  raceAreaId: string
  order: number
  panelCount: number
}

export type RaceRankGradeInfo = {
  id: string
  hierarchyPointFrom: string
  name: string
  topColorCode: string
  bottomColorCode: string
}

export type UserRaceInfo = {
  rankGradeId: string
  rankGradeNumber: number
  currnentRank: number
  currentAreaId: string
  currentPanelNumber: number
  activityLessonProgress: RaceActivityLessonProgress
  liveBonusInfos: RaceLiveBonusInfo[]
  cardCoolTimeInfos: RaceUserCardCoolTimeInfo[]
  totalClearPanelCount: number
  currentLivePanelScore: string
}

export type RaceActivityLessonProgress = {
  stepRewardRacePoint: number
  stepRewardRaceMedal: number
  lastReceiveTime: string
  maxRewardTime: string
}

export type RaceLiveQuestDifficultyLevelInfo = {
  raceLiveQuestDifficultyNumber: number
  cleared: boolean
  opponentInfo: QuestOpponentInfo
  highestScore: string
  unlocked: boolean
}

export type RaceDeckInfo = {
  number: number
  cardDetailInfos: RaceDeckCardDetailInfo[]
  deckOverallValue: string
}

export type RaceDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: RaceAccessoryInfo[]
  photoInfos: RacePhotoInfo[]
}

export type RacePhotoInfo = {
  photoId: string
  level: number
  abilities: RacePhotoAbilityInfo[]
}

export type SalaryGetPayslipRequest = {
  yearMonths: number[]
}

export type SalaryGetPayslipResponse = {
  payslips: Payslip[]
  commonResponse: CommonResponse
}

export type SalaryPayRequest = {
  year: number
  month: number
}

export type SalaryPayResponse = {
  payslip: Payslip
  commonResponse: CommonResponse
}

export type ShopListResponse = {
  shops: ShopInfo[]
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type ShopListItemRequest = {
  shopId: string
}

export type ShopListItemResponse = {
  shopItems: ShopItem[]
  commonResponse: CommonResponse
}

export type ShopGetLoginBonusPackageItemRequest = {
  shopId: string
}

export type ShopGetLoginBonusPackageItemResponse = {
  loginBonusPackageItem: LoginBonusPackageItem
  commonResponse: CommonResponse
}

export type ShopGetConditionRewardPackageItemRequest = {
  shopId: string
}

export type ShopGetConditionRewardPackageItemResponse = {
  conditionRewardPackageItem: ConditionRewardPackageItem
  commonResponse: CommonResponse
}

export type ShopPurchaseRequest = {
  shopItemId: string
}

export type ShopPurchaseResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type ShopRegisterPurchaseTransactionRequest = {
  shopItemId: string
}

export type ShopRegisterPurchaseTransactionResponse = {
  transactionId: string
  commonResponse: CommonResponse
}

export type ShopCancelPurchaseTransactionRequest = {
  shopItemId: string
  transactionId: string
}

export type ShopCancelPurchaseTransactionResponse = {
  commonResponse: CommonResponse
}

export type ShopPurchaseStoneRequest = {
  productId: string
  transactionId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
}

export type ShopPurchaseStoneResponse = {
  rewards: RewardResult[]
  paidJpy: PaidJpy
  commonResponse: CommonResponse
}

export type ShopRecoverPurchaseStoneRequest = {
  productId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
}

export type ShopRecoverPurchaseStoneResponse = {
  rewards: RewardResult[]
  shopItemName: string
  commonResponse: CommonResponse
}

export type ShopCheckPurchaseStoneRequest = {
  shopItemId: string
}

export type ShopCheckPurchaseStoneResponse = {
  birthdayNotRegistered: boolean
  exceedMaxStoneAmount: boolean
  exceedPurchaseThreshold: boolean
  exceedAlertThreshold: boolean
  commonResponse: CommonResponse
}

export type ShopRegisterBirthdayRequest = {
  year: number
  month: number
}

export type ShopRegisterBirthdayResponse = {
  commonResponse: CommonResponse
}

export type ShopReceiveConditionRewardRequest = {
  shopId: string
  numbers: number[]
}

export type ShopReceiveConditionRewardResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type StaffTrainRequest = {
  parameterType: ParameterType
}

export type StaffTrainResponse = {
  commonResponse: CommonResponse
}

export type StoryReadRequest = {
  storyId: string
  isLast: boolean
}

export type StoryReadResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type StoryReleaseEpisodeRequest = {
  storyPartId: string
  chapter: number
  route: number
  episode: number
}

export type StoryReleaseEpisodeResponse = {
  commonResponse: CommonResponse
}

export type StoryListEventResponse = {
  infos: EventStoryInfo[]
  commonResponse: CommonResponse
}

export type StoryReadEventRequest = {
  eventStoryId: string
  episode: number
  isLast: boolean
}

export type StoryReadEventResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type SystemCheckRequest = {
  firebaseIDToken: string
}

export type SystemCheckResponse = {
  maintenanceInfo: MaintenanceInfo
  reviewInfo: ReviewInfo
  keepAliveTimeMilliseconds: number
  keepAliveTimeoutMilliseconds: number
  enableCrashlyticsCollection: boolean
  enableUnityLogErrorToLogException: boolean
}

export type MaintenanceInfo = {
  inMaintenance: boolean
  topMessage: string
  bottomMessage: string
  startTime: string
  endTime: string
  isBeforeRelease: boolean
  twitterUrl: string
  mvUrl: string
  gamePvUrl: string
}

export type ReviewInfo = {
  inReview: boolean
  alternativeApiHost: string
}

export type TelephoneReceiveRequest = {
  telephoneIds: string[]
}

export type TelephoneReceiveResponse = {
  commonResponse: CommonResponse
}

export type TelephoneFinishesRequest = {
  telephoneIds: string[]
}

export type TelephoneFinishesResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse
}

export type TelephoneCallHistoryRequest = {
  telephoneId: string
}

export type TelephoneCallHistoryResponse = {
  commonResponse: CommonResponse
}

export type TourTopRequest = {
  tourId: string
}

export type TourTopResponse = {
  tourInfo: TourInfo
  userTourInfo: UserTourInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type TourRankingRequest = {
  tourId: string
}

export type TourRankingResponse = {
  rankingInfos: TourRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type TourAreaTopRequest = {
  tourId: string
  isCurrentAreaRestart: boolean
  tourDifficultyNumber: number
}

export type TourAreaTopResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaActivityRequest = {
  tourId: string
  step: number
  position: number
}

export type TourAreaActivityResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaRefreshRequest = {
  tourId: string
  step: number
  position: number
}

export type TourAreaRefreshResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaScoutRequest = {
  tourId: string
  step: number
  position: number
  cardId: string
}

export type TourAreaScoutResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaLiveRequest = {
  tourId: string
  step: number
  position: number
  isSkip: boolean
}

export type TourAreaLiveResponse = {
  areaInfo: TourAreaInfo
  liveInfo: TourLiveInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourAreaLiveBonusRequest = {
  tourId: string
  step: number
  position: number
  liveBonusId: string
}

export type TourAreaLiveBonusResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaPvpRequest = {
  tourId: string
  step: number
  position: number
  isSkip: boolean
}

export type TourAreaPvpResponse = {
  areaInfo: TourAreaInfo
  liveInfo: TourLiveInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourAreaClearRequest = {
  tourId: string
}

export type TourAreaClearResponse = {
  areaInfo: TourAreaInfo
  areaClearInfo: TourAreaClearInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourAreaNextRequest = {
  tourId: string
}

export type TourAreaNextResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaRetireRequest = {
  tourId: string
}

export type TourAreaRetireResponse = {
  areaInfo: TourAreaInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourDeckSaveRequest = {
  tourId: string
  deckInfos: TourDeckInfo[]
}

export type TourDeckSaveResponse = {
  commonResponse: CommonResponse
}

export type TourInfo = {
  id: string
  name: string
  type: TourType
  enemyType: TourEnemyType
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  areaStaminaRecoveryMinutes: number
  initialAreaStamina: number
  initialLife: number
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  eventExchangeBoothInfo: EventExchangeBoothInfo
  noticeInfo: NoticeInfo
  tourRankingRewardInfos: TourRankingRewardInfo[]
  tourDifficultyInfos: TourDifficultyInfo[]
}

export type UserTourInfo = {
  areaStamina: number
  staminaUpdatedTime: string
  highestScore: string
  highestScoreTime: string
  mostProgressArea: number
  mostProgressAreaName: string
  life: number
  currentScore: string
  currentArea: number
  currentAreaName: string
  rank: string
  isRetired: boolean
  isAreaCleared: boolean
  isLastArea: boolean
  clearedDifficultyNumber: number
  currentDifficultyNumber: number
}

export type TourDeckInfo = {
  position: number
  cardId: string
  scoutId: string
}

export type TourAreaInfo = {
  areaStamina: number
  staminaUpdatedTime: string
  highestScore: string
  highestScoreTime: string
  mostProgressArea: number
  mostProgressAreaName: string
  life: number
  score: string
  area: number
  areaName: string
  step: number
  position: number
  areaScore: string
  isAreaCleared: boolean
  isRetired: boolean
  stepInfos: TourStepInfo[]
  areaRewards: Reward[]
  liveBonusInfos: TourLiveBonusInfo[]
  cardInfos: TourCardInfo[]
  scoutInfos: TourScoutInfo[]
  deckInfos: TourDeckInfo[]
  isLastArea: boolean
  tourType: TourType
  tourAreaType: TourAreaType
}

export type TourStepInfo = {
  step: number
  positionInfos: TourPositionInfo[]
}

export type TourPositionInfo = {
  position: number
  type: TourStepType
  activityInfo: TourEffectActivity
  refreshInfo: TourEffectRefresh
  scoutInfo: TourEffectScout
  liveInfo: TourEffectLive
  pvpInfo: TourEffectPvp
  liveBonusInfos: TourLiveBonusInfo[]
  isPassed: boolean
}

export type TourEffectScout = {
  scoutInfos: TourScoutInfo[]
}

export type TourOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type TourCardInfo = {
  cardId: string
  staminaPermil: number
}

export type TourScoutInfo = {
  scoutId: string
  cardId: string
  staminaPermil: number
  isRival: boolean
  level: number
  rarity: number
  dance: string
  vocal: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
}

export type TourLiveInfo = {
  result: LiveResult
  rewards: Reward[]
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
}

export type TourAreaClearInfo = {
  areaRewards: Reward[]
  firstClearRewards: Reward[]
  score: string
  areaScore: string
  rank: string
  isBest: boolean
}

export type TourResultInfo = {
  score: string
  rank: string
  isBest: boolean
}

export type TutorialInitRequest = {
  name: string
}

export type TutorialInitResponse = {
  commonResponse: CommonResponse
}

export type TutorialProgressRequest = {
  type: TutorialType
  step: number
}

export type TutorialProgressResponse = {
  commonResponse: CommonResponse
}

export type TutorialStartQuestRequest = {
  questId: string
}

export type TutorialStartQuestResponse = {
  result: LiveResult
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type TutorialActivityStartFanEventResponse = {
  progress: FanEventProgress
  commonResponse: CommonResponse
}

export type TutorialActivityReceivePromotionRewardResponse = {
  rewards: Reward[]
  activityLevelProgress: ActivityLevelProgress
  commonResponse: CommonResponse
}

export type TutorialActivityReceiveLessonRewardResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type TutorialPhotoCreateShootingRequest = {
  mainCharacterId: string
}

export type TutorialPhotoCreateShootingResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type TutorialSkipResponse = {
  commonResponse: CommonResponse
}

export type UserGetResponse = {
  user: User
  items: UserItem[]
  cards: UserCard[]
  characters: UserCharacter[]
  costumes: UserCostume[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition[]
  stories: UserStory[]
  points: UserPoint[]
  staffs: UserStaff[]
  messages: UserMessage[]
  telephones: UserTelephone[]
  missions: UserMission[]
  profile: UserProfile
  emblems: UserEmblem[]
  characterMusics: UserCharacterMusic[]
  balance: UserBalance
  totalCount: UserTotalCount
  areas: UserArea[]
  quests: UserQuest[]
  gachaButtons: UserGachaButton[]
  homeTalks: UserHomeTalk[]
  photoReport: UserPhotoReport
  cardSupports: UserCardSupport[]
  messageSchedules: UserMessageSchedule[]
  notifications: UserNotification[]
  hierarchy: UserHierarchy
  tutorials: UserTutorial[]
  homePositions: UserHomePosition[]
  musics: UserMusic[]
  decorations: UserDecoration[]
  photoRecipes: UserPhotoRecipe[]
  buddy: UserBuddy
  invite: UserInvite
  userPublic: UserPublic
}

export type UserUpdateRequest = {
  name: string
}

export type UserUpdateResponse = {
  commonResponse: CommonResponse
}

export type UserProvideExternalRewardRequest = {
  externalRewardId: string
}

export type UserProvideExternalRewardResponse = {
  commonResponse: CommonResponse
}
