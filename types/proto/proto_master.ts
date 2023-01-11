// Generated from ProtoMaster.proto

import type {
  AccessoryCategoryType,
  AccessoryParameterType,
  ActivityFanEventType,
  AreaType,
  ItemType,
  AttributeType,
  MoodType,
  CardType,
  CardImageType,
  CharacterPersonalityType,
  SimpleCharacterPersonalityType,
  CharacterSdPersonalityType,
  PsylliumColorType,
  CharacterType,
  EventMissionType,
  ExtraStoryPartType,
  FunctionLockType,
  GachaType,
  ResourceType,
  GachaLimitType,
  HierarchyRewardType,
  HomePositionType,
  HomeActionType,
  HomePlaceType,
  LinkType,
  LiveAbilityType,
  LiveAbilityLevelBackgroundRankType,
  LiveResultType,
  LoadingType,
  LoadingDisplayTargetType,
  LoginBonusType,
  MessageType,
  MessageInstantType,
  MessageRarityType,
  MissionCategoryType,
  MissionType,
  StageType,
  PhotoAbilityType,
  LiveType,
  StatusEffectType,
  PhotoShootingActionType,
  LiveSkipType,
  RacePanelType,
  RaceActivityLessonRewardType,
  RaceRankingType,
  SkillEfficacyType,
  SkillTriggerType,
  ParameterType,
  StoryAdvPlayType,
  StoryPartType,
  PointType,
  TutorialType,
  AssetDownloadType,
  BacksidePanelType,
  BacksidePanelAttributeType,
  HelpType,
  HelpDisplayTargetType,
  LiveTipType,
  MusicChartType,
  PhotoAbilityTargetType,
  PhotoShootingMotionType,
  RewardSortTargetType,
  RewardSortResourceType,
  SalaryDetailType,
  SkillCategoryType,
  SkillTargetType,
  PlatformType,
  TitleBackgroundType,
  ActivityAbilityType,
  CardLevelReleaseType,
  DayOfWeekType,
  JoinedGuildType,
  ResultRankType,
  ExerciseHintType,
  PhotoAbilityGradeType,
  TutorialNavigationType,
  TutorialNavigationPositionType,
} from './proto_enum'

export type PhotoContestSection = {
  id: string
  name: string
  theme: string
  description: string
  assetId: string
  backgroundColorCode: string
  unlockConditionId: string
}

export type Accessory = {
  id: string
  assetId: string
  classification: string
  rarity: number
  name: string
  categoryType: AccessoryCategoryType
  param1Type: AccessoryParameterType
  param1Permil: number
  param1Value: number
  param2Type: AccessoryParameterType
  param2Permil: number
  param2Value: number
  salePrice: number
  limitBreakPhase: number
  limitBreakConsumptionId: string
}

export type ActivityFanEvent = {
  id: string
  name: string
  type: ActivityFanEventType
  viewConditionId: string
  unlockConditionId: string
  order: number
  levels: ActivityFanEventLevel[]
}

export type ActivityFanEventLevel = {
  level: number
  name: string
  unlockConditionId: string
}

export type ActivityPerformance = {
  id: string
  costumeTypeIds: string[]
  forceCostumeTypeId: string
  fieldId: string
  existBackground: boolean
  existForeground: boolean
  backgroundTopColorCode: string
  backgroundBottomColorCode: string
  fieldSpineNumber: number
  fieldSpineColorSlotId: string
  fieldSpineColorSlotNumber: number
  existProp: boolean
  assistantNpcSpineId: string
}

export type ActivityPromotion = {
  id: string
  name: string
  viewConditionId: string
  unlockConditionId: string
  order: number
  levels: ActivityPromotionLevel[]
}

export type ActivityPromotionLevel = {
  level: number
  name: string
  unlockConditionId: string
}

export type ActivityRefresh = {
  id: string
  name: string
  viewConditionId: string
  unlockConditionId: string
  order: number
  levels: ActivityRefreshLevel[]
}

export type ActivityRefreshLevel = {
  level: number
  name: string
  viewConditionId: string
  unlockConditionId: string
}

export type AdvLiveMovie = {
  id: string
  musicId: string
  stageId: string
  costumeIds: string[]
  audiencePercent: number
  playStartMillisecond: number
  playEndMillisecond: number
}

export type Area = {
  id: string
  type: AreaType
  name: string
  description: string
  order: number
  areaGroupId: string
  viewConditionId: string
  unlockConditionId: string
  dailyLimitCount: number
  dailyTicketItemType: ItemType
  rewardAssetId: string
  assetId: string
  colorCode: string
  dailySpecialTicketItemId: string
  dailyRewardName: string
  questIds: string[]
}

export type AreaGroup = {
  id: string
  name: string
  order: number
  assetId: string
  areaIds: string[]
}

export type BacksidePanelGoalSetting = {
  id: string
  name: string
  musicId: string
  musicChartPatternId: string
  backsideQuestSettingId: string
  stageId: string
}

export type BacksideQuestSetting = {
  id: string
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
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
}

export type BoxGacha = {
  id: string
  boxGachaGroupId: string
  name: string
  unlockConditionId: string
  requiredResourceAmount: number
  canReset: boolean
  resetLimitCount: number
}

export type Card = {
  id: string
  assetId: string
  name: string
  description: string
  type: CardType
  characterId: string
  initialRarity: number
  cardParameterId: string
  vocalRatioPermil: number
  danceRatioPermil: number
  visualRatioPermil: number
  staminaRatioPermil: number
  cardLevelReleaseId: string
  skillId1: string
  skillId2: string
  skillId3: string
  liveAbilityId: string
  activityAbilityId: string
  order: number
  releaseDate: string
  rewardCostumeId: string
  imageType1: CardImageType
  displayPositionX1: number
  displayPositionY1: number
  displayScale1: number
  highlightDisplayPositionX1: number
  highlightDisplayPositionY1: number
  highlightDisplayScale1: number
  imageType2: CardImageType
  displayPositionX2: number
  displayPositionY2: number
  displayScale2: number
  highlightDisplayPositionX2: number
  highlightDisplayPositionY2: number
  highlightDisplayScale2: number
  obtainMessage: string
  stories: CardStory[]
  messages: CardMessage[]
  homeTalks: CardHomeTalk[]
}

export type CardDuplicateReward = {
  initialRarity: number
  currentRarity: number
  rewardId: string
}

export type CardHomeTalk = {
  homeTalkId: string
}

export type CardMessage = {
  messageId: string
  telephoneId: string
}

export type CardStory = {
  storyId: string
}

export type CardSupportRelease = {
  count: number
  itemId: string
  itemAmount: number
  stoneAmount: number
}

export type Character = {
  id: string
  assetId: string
  characterGroupId: string
  order: number
  name: string
  enName: string
  cv: string
  age: string
  birthday: string
  height: string
  weight: string
  zodiacSign: string
  hometown: string
  favorite: string
  unfavorite: string
  profile: string
  costumeIds: string[]
  altCharacters: CharacterDuplicate[]
  defaultCostumeId: string
  heightCorrectionPermil: number
  color: string
  activityFanEventWords: ActivityFanEventWord[]
  talkArrivalMotionAssetId: string
  talkArrivalAdditionMotionAssetId: string
  viewConditionId: string
  personalityType: CharacterPersonalityType
  simplePersonalityType: SimpleCharacterPersonalityType
  sdPersonalityType: CharacterSdPersonalityType
  costumeMotionAssetIds: string[]
  costumeAdditionMotionAssetIds: string[]
  costumeVoiceAssetIds: string[]
  isLeftHanded: boolean
  psylliumColorType: PsylliumColorType
  shortProfile: string
  threeSize: string
  catchphrase: string
  firstName: string
  idiom: string
  defaultLiveCostumeId: string
  facePositionX: number
  facePositionY: number
  groupPositionX: number
  groupPositionY: number
  catchphraseColor: string
  unlockConditionId: string
  isHomeDanceTarget: boolean
  type: CharacterType
  groupName: string
}

export type CharacterCostumeGroup = {
  groupId: string
  costumeId: string
}

export type CharacterDuplicate = {
  characterId: string
  priority: number
}

export type CharacterGroup = {
  id: string
  assetId: string
  order: number
  name: string
  viewConditionId: string
  color: string
  mappings: CharacterGroupMapping[]
  backgroundColor: string
  textColor: string
  nameColor: string
  characterType: CharacterType
}

export type CharacterGroupMapping = {
  characterId: string
  description: string
  assetId: string
  order: number
}

export type ConditionAccessoryAmount = {
  accessoryId: string
  amountGte: string
}

export type ConditionActivityLevel = {
  characterId: string
  levelGte: number
  levelLte: number
}

export type ConditionCardLevel = {
  cardId: string
  levelGte: number
}

export type ConditionCardRarity = {
  cardId: string
  rarityGte: number
  rarityLte: number
}

export type ConditionCharacterPhotoAmount = {
  characterId: string
  amountGte: string
}

export type ConditionClearArea = {
  areaId: string
}

export type ConditionClearMission = {
  missionId: string
  threshold: string
}

export type ConditionClearQuest = {
  questId: string
}

export type ConditionContestQuestHighestRank = {
  questId: string
  rankLte: number
}

export type ConditionDailyAreaClear = {
  areaId: string
  countGte: number
}

export type ConditionDailyQuestClear = {
  questId: string
  countGte: number
}

export type ConditionFanAmount = {
  characterId: string
  amountGte: string
}

export type ConditionFinishedMessage = {
  messageId: string
}

export type ConditionHierarchyDetailGradeId = {
  hierarchyDetailGradeId: string
}

export type ConditionItemAmount = {
  itemId: string
  amountGte: string
}

export type ConditionLiveCharacterHighestScore = {
  characterId: string
  scoreGte: string
}

export type ConditionMaxQuestScoreRank = {
  questId: string
  rankGte: number
}

export type ConditionNotSatisfyCondition = {
  conditionId: string
}

export type ConditionObtainAccessory = {
  accessoryId: string
}

export type ConditionObtainCard = {
  cardId: string
}

export type ConditionObtainCharacter = {
  characterId: string
}

export type ConditionObtainCostume = {
  costumeId: string
}

export type ConditionObtainEmblem = {
  emblemId: string
}

export type ConditionObtainHair = {
  hairId: string
}

export type ConditionObtainItem = {
  itemId: string
}

export type ConditionOpenGacha = {
  gachaId: string
}

export type ConditionReadStory = {
  storyId: string
}

export type ConditionReliability = {
  characterId: string
  reliabilityGte: number
}

export type ConditionSatisfyCondition = {
  conditionId: string
}

export type ConditionWearCostume = {
  costumeId: string
}

export type ConditionWearHair = {
  hairId: string
}

export type ConditionWearLiveCostume = {
  costumeId: string
}

export type ConditionWearLiveHair = {
  hairId: string
}

export type Costume = {
  id: string
  bodyAssetId: string
  characterId: string
  order: number
  name: string
  releaseDate: string
  costumeTypeId: string
  sdAssetId: string
  motifAssetId: string
  isUserUnavailable: boolean
  defaultHairId: string
}

export type Decoration = {
  id: string
  name: string
  assetId: string
  autoProvideConditionId: string
  order: number
  description: string
}

export type Emblem = {
  id: string
  name: string
  assetId: string
  autoProvideConditionId: string
  isViewableInInactive: boolean
  order: number
  description: string
}

export type EventMission = {
  id: string
  eventMissionType: EventMissionType
  assetId: string
  name: string
  order: number
  viewConditionId: string
  unlockConditionId: string
  missionIds: string[]
}

export type EventStory = {
  id: string
  assetId: string
  name: string
  description: string
  order: number
  viewConditionId: string
  episodes: EventStoryEpisode[]
}

export type EventStoryEpisode = {
  episode: number
  assetId: string
  storyId: string
  viewConditionId: string
  unlockConditionId: string
  isAppeal: boolean
}

export type Exercise = {
  id: string
  name: string
  description: string
  unlockConditionId: string
  rewardId: string
  questId: string
  exerciseUserId: string
  exerciseDeckId: string
  exerciseCardGroupId: string
  exercisePhotoGroupId: string
  exerciseAccessoryGroupId: string
  order: number
}

export type ExerciseAccessory = {
  accessoryId: string
  amount: number
}

export type ExerciseCardGroup = {
  groupId: string
  cardIds: string[]
}

export type ExerciseCostume = {
  characterId: string
  costumeId: string
}

export type ExerciseDeckPosition = {
  position: number
  cardId: string
  addVocal: number
  addDance: number
  addVisual: number
  addStamina: number
  addMental: number
  addTechnique: number
}

export type ExercisePhoto = {
  photoAllInOneId: string
  amount: number
}

export type ExtraStory = {
  id: string
  extraStoryPartId: string
  assetId: string
  name: string
  description: string
  order: number
  viewConditionId: string
  unlockConditionId: string
  episodes: ExtraStoryEpisode[]
}

export type ExtraStoryEpisode = {
  episode: number
  assetId: string
  storyId: string
  viewConditionId: string
  unlockConditionId: string
}

export type ExtraStoryPart = {
  id: string
  assetId: string
  name: string
  subTitle: string
  noteText: string
  order: number
  type: ExtraStoryPartType
  viewConditionId: string
  unlockConditionId: string
  extraStoryIds: string[]
}

export type FunctionLock = {
  type: FunctionLockType
  requiredManagerLevel: number
  unlockConditionId: string
}

export type Gacha = {
  id: string
  assetId: string
  bannerAssetId: string
  appealAssetId: string
  movieAssetId: string
  screenAssetId: string
  name: string
  description: string
  precaution: string
  gachaType: GachaType
  viewConditionId: string
  unlockConditionId: string
  pickupCardIds: string[]
  exchangeResourceType: ResourceType
  exchangeResourceId: string
  exchangeBoothId: string
  order: number
  isPeriodDisplay: boolean
  appealText: string
  selectPickupAmount: number
  selectCardIds: string[]
  shopId: string
  bgmAssetId: string
  buttonIds: string[]
  exchangeIds: string[]
  cardRewards: GachaCardReward[]
}

export type GachaButton = {
  id: string
  name: string
  description: string
  isAnimation: boolean
  consumptionId: string
  discountLimitType: GachaLimitType
  discountCount: number
  discountConsumptionId: string
  drawCount: number
  limitType: GachaLimitType
  limitCount: number
  bonusRewardId: string
  bonusCount: number
  order: number
  gachaId: string
  gachaStampSheetGroupId: string
}

export type GachaCardReward = {
  cardId: string
  rewardId: string
}

export type GachaExchange = {
  id: string
  rewardId: string
  exchangeLimit: number
  requiredResourceAmount: string
  order: number
  gachaId: string
}

export type GachaStamp = {
  groupId: string
  sheetNumber: number
  stampNumber: number
  rewardId: string
  rewardGachaButtonId: string
  assetId: string
  description: string
  isFeatured: boolean
}

export type GachaStampSheet = {
  groupId: string
  sheetNumber: number
  costumeIds: string[]
}

export type GuildTopMovie = {
  assetId: string
  musicAssetId: string
  conditionId: string
  order: number
}

export type Hair = {
  id: string
  hairAssetId: string
  faceAssetId: string
  sdHairAssetId: string
  characterId: string
  wearableCostumeIds: string[]
  notWearableCostumeIds: string[]
  fittingCostumeId: string
  order: number
  name: string
  releaseTime: string
}

export type HierarchyDetailGrade = {
  id: string
  hierarchyGradeId: string
  subName: string
  requiredHierarchyPoint: string
  requiredHierarchyRank: number
  order: number
}

export type HierarchyDivisionReward = {
  id: string
  name: string
  rewardId: string
  order: number
  detailGradeId: string
}

export type HierarchyReward = {
  id: string
  hierarchyRewardType: HierarchyRewardType
  order: number
  name: string
  conditionId: string
  rewardId: string
}

export type HomeAction = {
  homeActionId: string
  characterId: string
  motionAssetId: string
  additionMotionAssetId: string
  voiceAssetId: string
  text: string
  positionType: HomePositionType
  conditionId: string
  weight: number
  actionType: HomeActionType
}

export type HomeBackground = {
  homeBackgroundId: string
  name: string
  placeType: HomePlaceType
  backgroundAssetId: string
  cameraAssetId: string
  conditionId: string
  priority: number
  positions: number[]
  angles: number[]
  characterCostumeGroupId: string
}

export type HomeDrama = {
  homeDramaId: string
  weight: number
  placeType: HomePlaceType
  conditionId: string
  homeDramaPositionGroupId: string
  cameraAssetIds: string[]
  details: HomeDramaDetail[]
  isBreak: boolean
  simplePersonalityType: SimpleCharacterPersonalityType
}

export type HomeDramaDetail = {
  order: number
  text: string
  timing: number
  characterId: string
  voiceAssetId: string
  homeDramaPositionId: string
  idleMotionAssetId: string
  properties: string[]
}

export type HomeDramaFree = {
  homeDramaPositionGroupId: string
  homeDramaPositionId: string
  number: number
  characterId: string
  weight: number
  motionAssetIds: string[]
  properties: string[]
  voiceAssetId: string
  playStartMillisecond: number
}

export type HomeNavigation = {
  homeNavigationId: string
  characterId: string
  navigationText: string
  detailText: string
  linkType: LinkType
  linkDetail: string
  viewConditionId: string
  order: number
}

export type HomeTalk = {
  homeTalkId: string
  characterId: string
  placeType: HomePlaceType
  conditionId: string
  firstPriority: number
  weight: number
  callPatternId: string
  choiceText: string
  managerText: string
  reliability: number
  characterTalks: CharacterTalk[]
}

export type HomeTalkCallPattern = {
  characterId: string
  patternId: string
  managerCallText: string
  characterArrivalText: string
  characterArrivalVoiceAssetId: string
}

export type InviteSetting = {
  id: string
  guestRewardId: string
  guestCodeEnterAllowDays: number
  hostRewardAmountLimit: number
  hostGuestLimit: number
  hostRewardResourceType: ResourceType
  hostRewardResourceId: string
}

export type LiveAbilityLevel = {
  level: number
  description: string
  shortDescription: string
  type: LiveAbilityType
  requiredItemAmount: number
  requiredCardLevel: number
  value: number
  skillId: string
  moodType: MoodType
  backgroundRankType: LiveAbilityLevelBackgroundRankType
}

export type LiveBonus = {
  id: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
}

export type LiveBonusGroup = {
  groupId: string
  liveBonusIds: string[]
}

export type LiveResultAnimation = {
  id: string
  personalityType: CharacterPersonalityType
  resultType: LiveResultType
  firstMotionAssetId: string
  firstVoiceAssetId: string
  secondMotionAssetId: string
  secondVoiceAssetId: string
  ratio: number
  conditionId: string
}

export type LiveStartAnimation = {
  id: string
  characterAmount: number
  motionAssetIds: string[]
  voiceAssetGroupId: string
  characterIds: string[]
  npcCharacterIds: string[]
  npcMotionAssetIds: string[]
  layoutMotionAssetId: string
  cameraMotionAssetId: string
}

export type LiveStartVoiceAssetGroup = {
  id: string
  characterId: string
  voiceAssetId1: string
  voiceAssetId2: string
  voiceAssetId3: string
}

export type Loading = {
  id: string
  loadingType: LoadingType
  targets: LoadingDisplayTargetType[]
  viewConditionId: string
  title: string
  assetId: string
  text: string
  isDownloading: boolean
}

export type LoginBonus = {
  id: string
  name: string
  description: string
  type: LoginBonusType
  assetId: string
  topColorCode: string
  bottomColorCode: string
  priority: number
  rewardIds: string[]
  openConditionId: string
  receiveConditionId: string
}

export type LoginBonusText = {
  id: string
  costumeId: string
  text: string
}

export type MarathonBoxGachaSetting = {
  marathonId: string
  boxGachaId: string
  order: number
  unlockRequiredPoint: number
  guageColorCode: string
  guageName: string
}

export type MarathonLiveBonus = {
  id: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type MarathonLiveBonusGroup = {
  groupId: string
  liveBonusId: string
}

export type MarathonQuest = {
  id: string
  marathonId: string
  name: string
  description: string
  order: number
  unlockConditionId: string
  marathonPointBonusCharacterIds: string[]
  boxGachaId: string
  stageId: string
  musicId: string
  musicChartPatternId: string
  requiredUnlockItemAmount: number
  requiredStamina: number
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
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  maxCapacity: number
  dailyLimitCount: number
  assetId: string
  unlockDescription: string
}

export type MarathonQuestDifficulty = {
  marathonQuestId: string
  difficultyNumber: number
  difficultyLevel: number
  marathonId: string
  mentalThreshold: number
  clearScore: string
  rewardManagerExp: number
  rewardCardExp: number
  rewardMarathonPoint: number
  clearRewardId: string
  rankAdditionalRewardId: string
  rankSRewardId: string
  rankARewardId: string
  rankBRewardId: string
  rankCRewardId: string
  unlockConditionId: string
  liveBonusGroupId: string
}

export type Message = {
  id: string
  messageGroupId: string
  name: string
  type: MessageType
  characterId: string
  instantType: MessageInstantType
  rarityType: MessageRarityType
  unlockConditionId: string
  details: MessageDetail[]
}

export type MessageDetail = {
  messageDetailId: string
  characterId: string
  text: string
  stampAssetId: string
  imageAssetId: string
  telephoneId: string
  choiceText: string
  delayMinutes: number
  readMinutes: number
  nextMessageDetailIds: string[]
  reliability: number
}

export type MessageGroup = {
  id: string
  name: string
  assetId: string
  characterIds: string[]
}

export type Mission = {
  id: string
  categoryType: MissionCategoryType
  missionType: MissionType
  targetIds: string[]
  name: string
  shortDescription: string
  longDescription: string
  order: number
  viewConditionId: string
  linkType: LinkType
  linkDetail: string
  progresses: MissionProgress[]
  eventMissionId: string
}

export type MissionProgress = {
  threshold: string
  rewardSetId: string
}

export type Music = {
  id: string
  assetId: string
  name: string
  description: string
  order: number
  lyricist: string
  composer: string
  arranger: string
  singer: string
  is3DAvailable: boolean
  comboAdvantageId: string
  volumePermyriads: number[]
  vocalVolumePermyriads: number[]
  bars: number[]
  beats: number[]
  bpms: number[]
  chartStartOffsetMillisecond: number
  displayCharacterAmount: number
  colorVariation: string
  digests: MusicDigest[]
  releaseTime: string
  originalCharacterIds: string[]
  notSelectableStageTypes: StageType[]
  mvAssetId: string
  selectableStageIds: string[]
}

export type MusicMasteryReward = {
  musicId: string
  characterId: string
  musicMasteryRewardSetId: string
}

export type MusicMasteryRewardSet = {
  id: string
  level: number
  rewardId: string
}

export type PhotoAbility = {
  id: string
  name: string
  description: string
  abilityType: PhotoAbilityType
  moodType: MoodType
  skillId: string
  photoAbilityLevels: PhotoAbilityLevel[]
  photoAbilityGrades: PhotoAbilityGrade[]
  abilityTargetId: string
  conditionCardType: CardType
  conditionLiveType: LiveType
  statusEffectType: StatusEffectType
}

export type PhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: number
  missionId: string
  grade: number
}

export type PhotoAbilitySet = {
  id: string
  photoAbilityIds: string[]
  photoRarity: number
  limited: boolean
}

export type PhotoActivity = {
  id: string
  name: string
  type: PhotoShootingActionType
  thumbAssetId: string
  stageId: string
  costumeTypeIds: string[]
  forceCostumeTypeId: string
  photoShootingMotionSetId: string
  isDeleteCharacter: boolean
  order: number
  viewConditionId: string
  unlockConditionId: string
  impossibleShootingCharacterIds: string[]
}

export type PhotoAllInOne = {
  id: string
  assetId: string
  characterIds: string[]
  name: string
  rarity: number
  placeName: string
  eventName: string
  level: number
  abilities: PhotoAbilityInfo[]
  shootingTime: string
  focusCharacterId: string
}

export type PhotoContestActivity = {
  id: string
  name: string
  type: PhotoShootingActionType
  thumbAssetId: string
  stageId: string
  costumeTypeIds: string[]
  forceCostumeTypeId: string
  photoShootingMotionSetId: string
  isDeleteCharacter: boolean
  order: number
  viewConditionId: string
  unlockConditionId: string
  impossibleShootingCharacterIds: string[]
}

export type PhotoContestQuestMusic = {
  id: string
  musicId: string
  assetId: string
  name: string
  description: string
  order: number
  lyricist: string
  composer: string
  arranger: string
  singer: string
  viewConditionId: string
  unlockConditionId: string
}

export type PhotoContestQuestStage = {
  id: string
  stageId: string
  assetId: string
  name: string
  description: string
  maxCapacity: number
  order: number
  viewConditionId: string
  unlockConditionId: string
}

export type PhotoContestSectionReward = {
  id: string
  requiredEvaluationPoint: number
  rewardId: string
}

export type PhotoQuestMusic = {
  id: string
  assetId: string
  name: string
  description: string
  order: number
  lyricist: string
  composer: string
  arranger: string
  singer: string
  viewConditionId: string
  unlockConditionId: string
}

export type PhotoQuestStage = {
  id: string
  assetId: string
  name: string
  description: string
  maxCapacity: number
  order: number
  viewConditionId: string
  unlockConditionId: string
}

export type PhotoRecipe = {
  id: string
  name: string
  assetId: string
  description: string
  level: number
  photoAbilitySetId: string
  retouchConsumptionId: string
  saleRewardId: string
  photoRetouchEnhanceGroupId: string
  characterIds: string[]
  order: number
  minPhotoLevel: number
  maxPhotoLevel: number
}

export type PhotoRetouchEnhance = {
  groupId: string
  photoLevel: number
  consumptionId: string
}

export type PhotoShootingCharacterMotion = {
  id: string
  characterId: string
  motionAssetId: string
  propAssetIds: string[]
  characterPositions: number[]
  characterAngles: number[]
  cameraPositions: number[]
  cameraAngles: number[]
  motionDelaySec: number
  upperLimit: number
  lowerLimit: number
}

export type PhotoShootingSimplePersonalityMotion = {
  id: string
  personalityType: SimpleCharacterPersonalityType
  motionAssetId: string
  propAssetIds: string[]
  photoShootingCharacterMotionId: string
  characterPositions: number[]
  characterAngles: number[]
  cameraPositions: number[]
  cameraAngles: number[]
  motionDelaySec: number
  upperLimit: number
  lowerLimit: number
}

export type PhotoSituation = {
  id: string
  assetId: string
  characterIds: string[]
  defaultName: string
  placeName: string
  eventName: string
  shootingTime: string
  focusCharacterId: string
}

export type Quest = {
  id: string
  areaId: string
  stageId: string
  musicId: string
  difficultyLevel: number
  name: string
  description: string
  order: number
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
  clearScore: string
  rewardManagerExp: number
  rewardCardExp: number
  clearRewardId: string
  rankAdditionalRewardId: string
  rankSRewardId: string
  rankARewardId: string
  rankBRewardId: string
  rankCRewardId: string
  rankDRewardId: string
  viewConditionId: string
  unlockConditionId: string
  dailyLimitCount: number
  ticketAmount: number
  achievedRankRewards: QuestAchievedRankReward[]
  liveBonusGroupId: string
  liveSkipType: LiveSkipType
}

export type QuestAchievedRankReward = {
  highRank: number
  lowRank: number
  rewardId: string
}

export type QuestCharacterAdvantage = {
  id: string
  characterGroupId: string
  characterIds: string[]
  advantagePermil: number
}

export type RaceLiveBonus = {
  id: string
  level: number
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
  requiredRaceMedalAmount: number
  unlockConditionId: string
}

export type RaceLiveBonusGroup = {
  groupId: string
  liveBonusId: string
  order: number
}

export type RacePanel = {
  raceAreaId: string
  number: number
  type: RacePanelType
  raceQuestId: string
  eventStoryEpisode: number
  requiredRacePointAmount: number
  racePanelRewardId: string
}

export type RacePanelReward = {
  id: string
  raceId: string
  rewardId: string
}

export type RaceQuest = {
  id: string
  groupId: string
  name: string
  description: string
  order: number
  unlockConditionId: string
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
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  activityLessonRewardType: RaceActivityLessonRewardType
  liveSkipType: LiveSkipType
}

export type RaceQuestDifficulty = {
  raceQuestId: string
  difficultyNumber: number
  difficultyLevel: number
  mentalThreshold: number
  clearScore: string
  unlockConditionId: string
  unlockDescription: string
  stageId: string
  maxCapacity: number
  liveBonusGroupId: string
}

export type RaceRankingReward = {
  rankGradeId: string
  type: RaceRankingType
  rankFrom: number
  rewardId: string
}

export type Setting = {
  id: string
  deckCountMax: number
  accessoryEnhancesRequiredMaterialAmount: number
  characterSecondToRecover: number
  deckCardStaminaBarMax: number
  deckCardParameterBarMax: number
  secondsPerActivityPromotionStep: number
  overallVocalPermil: number
  overallDancePermil: number
  overallVisualPermil: number
  overallStaminaPermil: number
  overallMentalPermil: number
  overallTechniquePermil: number
  deckAdvantagePermil: number
  activityPromotionFetchStepsSize: number
  secondsPerActivityFanEventStep: number
  activityFanEventMinPointCoefficientPermil: number
  activityFanEventIntermediatePointCoefficientPermil: number
  activityFanEventReachMaxPointMilliseconds: number
  activityFanEventKeepMaxPointMilliseconds: number
  liveMaxParameterBonusPermil: number
  characterMotifAssetId: string
  cardStaminaBarMax: number
  cardParameterBarMax: number
  questRankingDisplayNum: number
  activityFanEventRankingDisplayNum: number
  activityFanEventFetchStepsSize: number
  activityFanEventSaveIntervalStepsSize: number
  secondsPerActivityFanEventBackgroundStep: number
  friendLimit: number
  friendOfferLimit: number
  friendOfferedLimit: number
  accessoryLimit: string
  photoDeleteAmountLimit: number
  firstMessageDetailId: string
  cardResetStoneAmount: number
  maxHomePromotionRewardAmount: number
  cardSupportLevelLimit: number
  functionMaintenanceTitle: string
  twitterUrl: string
  activityFanEventRequiredCheerPoint: number
  secondsPerActivityLessonStep: number
  forumMaxReplyAmount: number
  forumRestrictCreateThreadHours: number
  divisionMoveProhibitionDays: number
  cardDefaultMental: number
  cardDefaultTechnique: number
  reviewDisplayConditionId: string
  activityLessonPromoteLimitCount: number
  activityLessonPromoteRequiredStoneAmount: number
  activityLessonPromoteEffectHours: number
  activityLessonPromoteFreeLimitCount: number
  functionMaintenanceMessage: string
  gvgChallengeStoneAmount: number
  trainingCostumeIds: string[]
  tutorialActivityLessonPromoteMinutes: number
  tutorialActivityLessonRewardGoldPerMinute: number
  tutorialActivityLessonRewardManagerExpPerMinute: number
  tutorialActivityLessonRewardCardEnhanceItemPerMinute: number
  tutorialActivityPromotionRewardGold: number
  tutorialActivityPromotionRewardManagerExp: number
  tutorialActivityPromotionRewardActivityExp: number
  tutorialActivityPromotionRewardCharacterActivityExp: number
  tutorialActivityPromotionRewardCardEnhanceItem: number
  tutorialActivityPromotionRewardFanAmount: number
  tutorialActivityPromotionPerformanceId: string
  tutorialActivityPromotionCharacterIds: string[]
  giftDefaultFetchSize: number
  questRankingLiveReplayableNum: number
  tutorialPhotoShootingItemId: string
  tutorialPhotoShootingMusicId: string
  tutorialPhotoShootingStageId: string
  tutorialPhotoShootingCharacterIds: string[]
  activityFanEventCheerEffectValuePermil: number
  photoShootingItemThresholds: number[]
  tutorialShortQuestId: string
  tutorialFullQuestId: string
  tutorialMessageId: string
  tutorialActivityFanEventCharacterIds: string[]
  entrustReductionPermil: number
  forumBlockDays: number
  liveLightFanAmountWeightPermil: number
  liveMiddleFanAmountWeightPermil: number
  liveHeavyFanAmountWeightPermil: number
  tutorialAdvAssetId: string
  tutorialAdvTitle: string
  tutorialAdvSubTitle: string
  liveMinimumGuaranteedAudienceAmount: number
  messageExcludeTimeStart: string
  messageExcludeTimeEnd: string
  deckEntrustSpecialSkillPossessionCoefficientPermil: number
  deckEntrustSpecialSkillPossessionReductionCoefficientPermil: number
  deckEntrustStaminaReductionCoefficientPermil: number
  tutorialActivityFanEventCostumeIds: string[]
  goldLimit: string
  itemLimit: string
  freeStoneLimit: string
  paidStoneLimit: string
  cardSupportRemovableMinutes: number
  questDailyTicketLimitUseCount: number
  salaryRemainingDaysLte: number
  activityRefreshOverflowLimitCoefficientPermil: number
  comebackValidHours: number
  photoLimitExtendAmount: number
  photoLimitExtendStone: number
  photoLimitExtendLimit: number
  photoDefaultLimit: number
  photoRecipeLimit: string
  photoRecipeSaleAmountLimit: number
  exerciseFixedBannerNoticeId: string
  deckEntrustCoolTimeLotteryCoefficientPermil: number
  deckEntrustMentalLotteryCoefficientPermil: number
  statusEffectTypeStrengthList: StatusEffectType[]
  statusEffectTypeWeaknessDownList: StatusEffectType[]
  statusEffectTypeWeaknessOtherList: StatusEffectType[]
  skillEfficacyTypeScoreList: SkillEfficacyType[]
  skillEfficacyTypeStrengthList: SkillEfficacyType[]
  skillEfficacyTypeSupportList: SkillEfficacyType[]
  skillEfficacyTypeWeaknessDownList: SkillEfficacyType[]
  skillEfficacyTypeWeaknessOtherList: SkillEfficacyType[]
  backsideRankingDisplayNum: number
  photoContestRankingDisplayNum: number
  raceRankingDisplayNum: number
  raceDailyRankingDisplayNum: number
  raceSecondsPerActivityLessonStep: number
  tourRankingDisplayNum: number
  buddyRentalDailyLimit: number
  leagueRankingDisplayRankLimit: number
}

export type SkillDetail = {
  efficacyId: string
  triggerId: string
}

export type SkillEfficacy = {
  id: string
  name: string
  type: SkillEfficacyType
  description: string
  shortDescription: string
  grade: number
  maxGrade: number
  skillTargetId: string
}

export type SkillLevel = {
  level: number
  description: string
  shortDescription: string
  requiredItemAmount: number
  requiredCardLevel: number
  stamina: number
  triggerId: string
  probabilityPermil: number
  limitCount: number
  coolTime: number
  skillDetails: SkillDetail[]
  staminaPermil: number
}

export type SkillTrigger = {
  id: string
  type: SkillTriggerType
  characterIds: string[]
}

export type StaffLevel = {
  parameterType: ParameterType
  level: number
  requiredMedalAmount: number
  advantage: number
  unlockConditionId: string
}

export type Story = {
  id: string
  sectionName: string
  name: string
  description: string
  rewardId: string
  advPlayTypes: StoryAdvPlayType[]
  advAssetIds: string[]
}

export type StoryEpisode = {
  episode: number
  assetId: string
  storyId: string
  viewConditionId: string
  unlockConditionId: string
  isReleased: boolean
}

export type StoryPart = {
  id: string
  assetId: string
  name: string
  subTitle: string
  order: number
  type: StoryPartType
  viewConditionId: string
  unlockConditionId: string
  pointType: PointType
  storyEpisodeConsumptionId: string
  chapters: StoryChapter[]
  noteText: string
}

export type Telephone = {
  id: string
  messageGroupId: string
  characterId: string
  name: string
  assetId: string
  unlockConditionId: string
}

export type TourQuestSetting = {
  id: string
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
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
}

export type Tutorial = {
  type: TutorialType
  stepInfo: TutorialStep[]
  unlockConditionId: string
}

export type AccessoryEnhancement = {
  rarity: number
  requiredGold: string
}

export type ActivityAbility = {
  id: string
  name: string
  description: string
  levels: ActivityAbilityLevel[]
}

export type AssetDownload = {
  assetId: string
  type: AssetDownloadType
}

export type BacksideAnimation = {
  panelType: BacksidePanelType
  panelAttributeType: BacksidePanelAttributeType
  panelRank: number
  backgroundAssetId: string
  cameraAssetId: string
  motionAssetId: string
  additionMotionAssetId: string
  propAssetIds: string[]
  voiceAssetId: string
}

export type BoxGachaGroup = {
  id: string
  requiredResourceType: ResourceType
  requiredResourceId: string
}

export type CardDuplicateExp = {
  initialRarity: number
  exp: number
}

export type CardLevel = {
  level: number
  requiredExp: string
}

export type CardLevelRelease = {
  id: string
  level: number
  targets: CardLevelReleaseTarget[]
}

export type CardParameter = {
  id: string
  level: number
  value: string
  staminaValue: string
}

export type CardRank = {
  rank: number
  levelLimitUpAmount: number
  requiredExp: number
  isDataExist: boolean
}

export type CardRarity = {
  rarity: number
  levelLimit: number
  parameterBonusPermil: number
  requiredExp: number
}

export type CharacterActivityLevel = {
  level: number
  requiredExp: number
  maxStamina: number
  baseActivityPoint: number
}

export type ComboAdvantage = {
  id: string
  comboCount: number
  advantagePermil: number
}

export type Condition = {
  id: string
  settings: ConditionSetting[]
}

export type ConditionDescription = {
  id: string
  description: string
}

export type Consumption = {
  id: string
  resources: ConsumptionResource[]
}

export type CostumeType = {
  id: string
  name: string
}

export type DeckEntrustCoefficient = {
  position: number
  appealPermil: number
  technicalPermil: number
  supportPermil: number
}

export type Division = {
  id: string
  order: number
  name: string
}

export type ExerciseAccessoryGroup = {
  groupId: string
  accessories: ExerciseAccessory[]
}

export type ExerciseDeck = {
  id: string
  positions: ExerciseDeckPosition[]
}

export type ExerciseHint = {
  exerciseId: string
  contents: ExerciseHintContent[]
}

export type ExercisePhotoGroup = {
  groupId: string
  photos: ExercisePhoto[]
}

export type ExerciseUser = {
  id: string
  managerLevel: number
  cardLevel: number
  cardRarity: number
  lightFanAmount: number
  middleFanAmount: number
  heavyFanAmount: number
  addVocal: number
  addDance: number
  addVisual: number
  addStamina: number
  addMental: number
  addTechnique: number
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
}

export type GachaStampSheetGroup = {
  groupId: string
  assetId: string
}

export type Guild = {
  id: string
  name: string
  assetId: string
  order: number
}

export type HelpCategory = {
  id: string
  type: HelpType
  title: string
  order: number
  targetTypes: HelpDisplayTargetType[]
  contents: HelpContent[]
}

export type HierarchyGrade = {
  id: string
  name: string
  order: number
}

export type HomeDramaPosition = {
  homeDramaPositionId: string
  name: string
  placeType: HomePlaceType
  positions: number[]
  angles: number[]
  simplePersonalityType: SimpleCharacterPersonalityType
}

export type HomeDramaPositionGroup = {
  homeDramaPositionGroupId: string
  homeDramaPositionId: string
}

export type InviteHostReward = {
  id: string
  clearQuestMainAreaCount: number
  resourceAmount: number
}

export type Item = {
  id: string
  name: string
  assetId: string
  description: string
  howToGet: string
  type: ItemType
  value: number
  order: number
  salePrice: number
}

export type LiveAbility = {
  id: string
  name: string
  description: string
  levels: LiveAbilityLevel[]
}

export type LiveTip = {
  id: string
  type: LiveTipType
  description: string
  priority: number
}

export type ManagerLevel = {
  level: number
  requiredExp: string
  maxCardLevel: number
  maxPhotoEnhanceLevel: number
  maxPhotoReportLevel: number
}

export type MusicChartPattern = {
  id: string
  number: number
  type: MusicChartType
  position: number
}

export type MusicMasteryLevel = {
  level: number
  requiredMasteryPoint: number
}

export type PhotoAbilityTarget = {
  id: string
  type: PhotoAbilityTargetType
  targetId: string
}

export type PhotoRarityLevel = {
  rarity: number
  level: number
  deleteRewardItem: number
  rerollRequiredItem: number
  enhanceRequiredItem: number
}

export type PhotoShootingMotionSet = {
  id: string
  motionType1: PhotoShootingMotionType
  photoShootingMotionId1: string
  motionType2: PhotoShootingMotionType
  photoShootingMotionId2: string
  motionType3: PhotoShootingMotionType
  photoShootingMotionId3: string
}

export type QuestAudienceAdvantage = {
  id: string
  audienceAmount: number
  advantagePermil: number
}

export type QuestContestRankingSeason = {
  id: string
  startTime: string
}

export type QuestPressure = {
  id: string
  name: string
  weightPermil: number
}

export type QuestStaminaConsumption = {
  remainStaminaRatioPercent: number
  skillTargetParameterWeightPermil: number
}

export type Reward = {
  id: string
  resources: RewardResource[]
}

export type RewardSort = {
  rewardSortTargetType: RewardSortTargetType
  rewardSortResourceType: RewardSortResourceType
  order: number
}

export type Salary = {
  type: SalaryDetailType
  threshold: string
  amount: number
}

export type Skill = {
  id: string
  name: string
  categoryType: SkillCategoryType
  levels: SkillLevel[]
  assetId: string
}

export type SkillTarget = {
  id: string
  type: SkillTargetType
  isOpponent: boolean
}

export type StaffTraining = {
  parameterType: ParameterType
  name: string
}

export type Stage = {
  id: string
  type: StageType
  assetId: string
  thumbnailAssetId: string
  name: string
  description: string
  order: number
  timeDifference: string
  isHideWithPhotoShooting: boolean
}

export type StoreProduct = {
  productId: string
  platformType: PlatformType
  price: number
  stoneAmount: number
}

export type StoryEpisodeConsumption = {
  id: string
  releaseCount: number
  requiredStoryPoint: number
}

export type TitleBackground = {
  id: string
  assetId: string
  type: TitleBackgroundType
  voiceAssetIds: string[]
  bgmAssetId: string
  startTime: string
  endTime: string
  priority: number
}

export type TotalStaffEnhanceAdvantage = {
  enhanceCount: number
  advantagePermil: number
}

export type Wording = {
  key: string
  word: string
}

export type ActivityAbilityLevel = {
  level: number
  description: string
  shortDescription: string
  type: ActivityAbilityType
  requiredItemAmount: number
  requiredCardLevel: number
  targetId: string
  value: number
}

export type CardLevelReleaseTarget = {
  type: CardLevelReleaseType
  number: number
}

export type ActivityFanEventWord = {
  word: string
  voiceAssetId: string
}

export type ConditionSetting = {
  satisfyCondition: ConditionSatisfyCondition
  notSatisfyCondition: ConditionNotSatisfyCondition
  startHours: ConditionStartHours
  notLoginDays: ConditionNotLoginDays
  accumulationLoginDays: ConditionAccumulationLoginDays
  managerLevel: ConditionManagerLevel
  deckMaxOverallValue: ConditionDeckMaxOverallValue
  clearQuest: ConditionClearQuest
  maxQuestScoreRank: ConditionMaxQuestScoreRank
  dailyQuestClear: ConditionDailyQuestClear
  dailyAreaClear: ConditionDailyAreaClear
  animeStoryPoint: ConditionAnimeStoryPoint
  gameStoryPoint: ConditionGameStoryPoint
  groupStoryPoint: ConditionGroupStoryPoint
  readStory: ConditionReadStory
  clearMission: ConditionClearMission
  obtainCharacter: ConditionObtainCharacter
  obtainCard: ConditionObtainCard
  obtainCostume: ConditionObtainCostume
  wearCostume: ConditionWearCostume
  cardLevel: ConditionCardLevel
  cardRarity: ConditionCardRarity
  photoReportPityTimer: ConditionPhotoReportPityTimer
  activityLevel: ConditionActivityLevel
  exchangeCount: ConditionExchangeCount
  term: ConditionTerm
  dayOfWeek: ConditionDayOfWeek
  time: ConditionTime
  obtainItem: ConditionObtainItem
  itemAmount: ConditionItemAmount
  gold: ConditionGold
  stone: ConditionStone
  obtainEmblem: ConditionObtainEmblem
  openGacha: ConditionOpenGacha
  drawGacha: ConditionDrawGacha
  purchaseShop: ConditionPurchaseShop
  platformType: ConditionPlatformType
  division: ConditionDivision
  joinedGuild: ConditionJoinedGuild
  activityFanEventLevel: ConditionActivityFanEventLevel
  activityPromotionLevel: ConditionActivityPromotionLevel
  activityRefreshLevel: ConditionActivityRefreshLevel
  contestQuestTotalScore: ConditionContestQuestTotalScore
  clearArea: ConditionClearArea
  reliability: ConditionReliability
  hierarchyDetailGradeId: ConditionHierarchyDetailGradeId
  hierarchyPointGte: ConditionHierarchyPointGte
  diary: ConditionDiary
  staffTrainTotalCount: ConditionStaffTrainTotalCount
  photoShootTotalCount: ConditionPhotoShootTotalCount
  tourAreaProgress: ConditionTourAreaProgress
  activityFanEventBestScoreRank: ConditionActivityFanEventBestScoreRank
  activityFanEventTotalCount: ConditionActivityFanEventTotalCount
  activityPromotionTotalHours: ConditionActivityPromotionTotalHours
  activityRefreshTotalCount: ConditionActivityRefreshTotalCount
  liveCharacterHighestScore: ConditionLiveCharacterHighestScore
  fanAmount: ConditionFanAmount
  highestSalary: ConditionHighestSalary
  characterPhotoAmount: ConditionCharacterPhotoAmount
  tutorialStep: ConditionTutorialStep
  forumCreateReplyCount: ConditionForumCreateReplyCount
  birthday: ConditionBirthDay
  finishedMessage: ConditionFinishedMessage
  pvpOpen: ConditionPvpOpen
  obtainAccessory: ConditionObtainAccessory
  accessoryAmount: ConditionAccessoryAmount
  wearLiveCostume: ConditionWearLiveCostume
  contestQuestHighestRank: ConditionContestQuestHighestRank
  comebackUser: ConditionComebackUser
  gameStartTerm: ConditionGameStartTerm
  obtainHair: ConditionObtainHair
  wearHair: ConditionWearHair
  wearLiveHair: ConditionWearLiveHair
}

export type ConditionStartHours = {
  hoursLte: number
}

export type ConditionNotLoginDays = {
  daysGte: number
}

export type ConditionAccumulationLoginDays = {
  daysGte: number
}

export type ConditionManagerLevel = {
  levelLte: number
  levelGte: number
}

export type ConditionDeckMaxOverallValue = {
  valueLte: number
  valueGte: number
}

export type ConditionAnimeStoryPoint = {
  pointGte: string
}

export type ConditionGameStoryPoint = {
  pointGte: string
}

export type ConditionGroupStoryPoint = {
  pointGte: string
}

export type ConditionPhotoReportPityTimer = {
  thresholdGte: number
}

export type ConditionExchangeCount = {
  exchangeId: string
  countGte: number
  countLte: number
}

export type ConditionTerm = {
  nowAfter: string
  nowBefore: string
}

export type ConditionGameStartTerm = {
  gameStartDatetimeAfter: string
  gameStartDatetimeBefore: string
}

export type ConditionDayOfWeek = {
  dayOfWeekType: DayOfWeekType
}

export type ConditionTime = {
  nowAfter: string
  nowBefore: string
}

export type ConditionGold = {
  goldGte: string
}

export type ConditionStone = {
  stoneGte: string
}

export type ConditionDrawGacha = {
  gachaButtonIds: string[]
}

export type ConditionPurchaseShop = {
  shopItemId: string
}

export type ConditionPlatformType = {
  platformType: PlatformType
}

export type ConditionDivision = {
  divisionOrderGte: number
  divisionOrderLte: number
}

export type ConditionJoinedGuild = {
  joinedGuildType: JoinedGuildType
}

export type ConditionActivityFanEventLevel = {
  fanEventId: string
  levelGte: number
}

export type ConditionActivityPromotionLevel = {
  promotionId: string
  levelGte: number
}

export type ConditionActivityRefreshLevel = {
  refreshId: string
  levelGte: number
}

export type ConditionContestQuestTotalScore = {
  scoreGte: string
}

export type ConditionHierarchyPointGte = {
  hierarchyPointGte: string
}

export type ConditionDiary = {
  isReadAllDiary: boolean
  isReadLastDiary: boolean
}

export type ConditionStaffTrainTotalCount = {
  countGte: number
}

export type ConditionPhotoShootTotalCount = {
  countGte: number
}

export type ConditionTourAreaProgress = {
  tourId: string
  areaGte: number
}

export type ConditionActivityFanEventBestScoreRank = {
  rankType: ResultRankType
  plus: number
}

export type ConditionActivityFanEventTotalCount = {
  countGte: number
}

export type ConditionActivityPromotionTotalHours = {
  hoursGte: number
}

export type ConditionActivityRefreshTotalCount = {
  countGte: number
}

export type ConditionHighestSalary = {
  highestSalaryGte: string
}

export type ConditionTutorialStep = {
  tutorialType: TutorialType
  stepGte: number
  stepLte: number
}

export type ConditionForumCreateReplyCount = {
  createReplyCount: string
}

export type ConditionBirthDay = {
  isBirthDay: boolean
}

export type ConditionPvpOpen = {
  isPvpOpen: boolean
}

export type ConditionComebackUser = {
  isComebackUser: boolean
}

export type ConsumptionResource = {
  resourceType: ResourceType
  resourceIds: string[]
  subResourceIds: string[]
  amount: number
}

export type ExerciseHintContent = {
  number: number
  type: ExerciseHintType
  title: string
  text: string
  assetIds: string[]
}

export type HelpContent = {
  helpContentId: string
  title: string
  text: string
  order: number
  targetTypes: HelpDisplayTargetType[]
  assetIds: string[]
}

export type CharacterTalk = {
  text: string
  voiceAssetId: string
  motionAssetId: string
  additionMotionAssetId: string
}

export type MusicDigest = {
  startMillisecond: number
  endMillisecond: number
  loop: boolean
}

export type PhotoAbilityLevel = {
  level: number
  value: number
}

export type PhotoAbilityGrade = {
  grade: number
  bonusPermil: number
  bonusValue: number
  type: PhotoAbilityGradeType
}

export type RewardResource = {
  resourceType: ResourceType
  resourceId: string
  amount: number
}

export type StoryChapter = {
  chapter: number
  route: number
  name: string
  episodes: StoryEpisode[]
}

export type TutorialStep = {
  step: number
  subStep: number
  navigationType: TutorialNavigationType
  navigationPositionType: TutorialNavigationPositionType
  texts: string[]
  assetIds: string[]
}
