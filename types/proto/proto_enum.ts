// Generated from ProtoEnum.proto

export enum AccessoryCategoryType {
  Unknown = 0,
  Part1 = 1,
  Part2 = 2,
}

export enum AccessoryParameterType {
  Unknown = 0,
  Dance = 1,
  Vocal = 2,
  Visual = 3,
  Stamina = 4,
  Mental = 5,
  Technique = 6,
}

export enum ActivityAbilityType {
  Unknown = 0,
  CharacterActivityExpUp = 1,
  FanEventSpecialFanProbabilityUp = 1001,
  FanEventManagerExpUp = 1002,
  PromotionManagerExpUp = 2001,
  PromotionGoldUp = 2002,
  PromotionAccessoryMultiStepRewardUp = 2003,
  PromotionGachaTicketMultiStepRewardUp = 2004,
  PromotionPhotoInkMultiStepRewardUp = 2005,
  RefreshStaminaUp = 3001,
  LessonManagerExpUp = 4001,
  LessonGoldUp = 4002,
  LessonCardEnhanceItemUp = 4003,
}

export enum ActivityCampaignEffectType {
  Unknown = 0,
  FanEventCoreFanConversionRate = 1001,
  PromotionCardEnhanceItemUp = 2001,
  PromotionGoldUp = 2002,
  PromotionMultiStepRewardSpeedUp = 2003,
  PromotionFanUp = 2004,
  RefreshGoldConsumptionDown = 3001,
  LessonGoldUp = 4001,
  LessonExpUp = 4002,
  LessonCardEnhanceItemUp = 4003,
  LessonCardSupportReleaseUp = 4004,
}

export enum ActivityFanEventHappeningType {
  Unknown = 0,
  Cheer = 1,
  SpecialFan = 2,
}

export enum ActivityFanEventType {
  Unknown = 0,
  Handshake = 1,
  Sign = 2,
  PhotoSession = 3,
}

export enum AreaType {
  Unknown = 0,
  Main = 1,
  Contest = 2,
  Daily = 3,
  Tower = 4,
  SubTower = 5,
  Tutorial = 101,
  Exercise = 102,
}

export enum AssetDownloadType {
  Unknown = 0,
  First = 1,
  Second = 2,
}

export enum AttributeType {
  Unknown = 0,
  Dance = 1,
  Vocal = 2,
  Visual = 3,
}

export enum BacksideAreaType {
  Unknown = 0,
  Rehearsal = 1,
  Real = 2,
}

export enum BacksideDifficultyType {
  Unknown = 0,
  Absolute = 1,
  Relative = 2,
  RelativeSelect = 3,
}

export enum BacksidePanelAttributeType {
  Unknown = 0,
  None = 1,
  Dance = 2,
  Vocal = 3,
  Visual = 4,
}

export enum BacksidePanelType {
  Unknown = 0,
  Goal = 1,
  Live = 2,
  Pvp = 3,
  Training = 4,
  SpTraining = 5,
  Photo = 6,
  Accessory = 7,
  Recovery = 8,
  Blank = 9,
}

export enum BacksidePracticeRankType {
  Unknown = 0,
  D = 1,
  C = 2,
  B = 3,
  A = 4,
  S = 5,
  Splus = 6,
}

export enum BacksideStageType {
  Unknown = 0,
  Practice = 1,
  Final = 2,
}

export enum BacksideType {
  Unknown = 0,
  Normal = 1,
  Mini = 2,
  Simple = 3,
}

export enum BoxGachaItemType {
  Unknown = 0,
  Reward = 1,
  MarathonLiveBonusGroup = 2,
}

export enum CardDisplayType {
  Unknown = 0,
  BeforeLimitBreak = 1,
  AfterLimitBreak = 2,
}

export enum CardImageType {
  Unknown = 0,
  Standing = 1,
  Still = 2,
  Movie = 3,
}

export enum CardLevelReleaseType {
  Unknown = 0,
  Skill = 1,
  LiveAbility = 2,
  ActivityAbility = 3,
  Story = 4,
  Photo = 7,
}

export enum CardType {
  Unknown = 0,
  Appeal = 1,
  Technique = 2,
  Support = 3,
}

export enum CharacterPersonalityType {
  Unknown = 0,
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
}

export enum CharacterSdPersonalityType {
  Unknown = 0,
  Lively = 1,
  Pure = 2,
  Elegant = 3,
  Stylish = 4,
  Carefree = 5,
}

export enum CharacterType {
  Unknown = 0,
  Normal = 1,
  Npc = 2,
  Memories = 3,
  Collaboration = 4,
}

export enum DayOfWeekType {
  Unknown = 0,
  Sunday = 1,
  Monday = 2,
  Tuesday = 3,
  Wednesday = 4,
  Thursday = 5,
  Friday = 6,
  Saturday = 7,
}

export enum DeckEditType {
  Unknown = 0,
  Manual = 1,
  Auto = 2,
  ManualAuto = 3,
  QuestAuto = 4,
}

export enum DivisionCannotMoveReasonType {
  Unknown = 0,
  NotAffiliate = 1,
  ProhibitionDays = 2,
  NotAggregate = 3,
  OpenGvg = 4,
  AggregatePvp = 5,
}

export enum DokanTargetType {
  Unknown = 0,
  Home = 1,
  Shop = 2,
  Tour = 3,
  Backside = 4,
  Marathon = 5,
  PhotoContest = 6,
  Race = 7,
  Ladder = 8,
}

export enum DokanType {
  Unknown = 0,
  Adv = 1,
  Notice = 2,
  Shop = 3,
  VerticalAdv = 4,
  VerticalMovie = 5,
  HorizontalMovie = 6,
  Story = 7,
  Free = 8,
}

export enum ErrorCode {
  Unknown = 0,
  OutdatedApp = 1001,
  OutdatedMasterData = 1002,
  DateChanged = 1003,
  InMaintenance = 1004,
  InFunctionMaintenance = 1005,
  InvalidArgument = 2001,
  InternalServerError = 2002,
  RequestLocked = 2003,
  Unauthenticated = 2004,
  LockFailed = 2005,
  UserDeleted = 2006,
  ContainsNgword = 3001,
  OpponentNotFound = 3002,
  PasswordMigrationFailed = 3003,
  PasswordInvalid = 3004,
  ReachedMaxAmount = 3005,
  AccountBan = 3006,
  ForumBan = 3007,
  PurchaseBan = 3008,
  MigrationTargetNotFound = 3009,
  ConditionInvalid = 3010,
  ResourceNotEnough = 3011,
  InvalidBirthday = 3012,
  MarketItemExpired = 3013,
  MarketResetStatusExpired = 3014,
  PurchaseRecoverFailed = 3015,
  DivisionMoveOutOfTerm = 3016,
  GvgMatchMismatched = 3017,
  LiveResultNotFound = 3019,
  PvpSeasonNotOpened = 3020,
  GvgSeasonNotOpened = 3021,
  FunctionLocked = 3022,
  ActivityStaminaAlreadyMax = 3023,
  EventConditionInvalid = 3024,
  RecoveryPurchaseTransactionNotFound = 3025,
  AlreadyMaximumStamina = 3028,
  NotInCoolTime = 3029,
  InviteWrongCode = 3030,
  InviteHostGuestLimit = 3031,
  InviteEnterCodeNotAllowed = 3032,
  LeagueSeasonNotOpened = 3034,
  LeagueInBattle = 3035,
  LeagueInBattleExtension = 3036,
  SpecialPhotoShootingConditionInvalid = 3037,
}

export enum EventMissionType {
  Unknown = 0,
  Event = 1,
  Campaign = 2,
}

export enum ExerciseHintType {
  Unknown = 0,
  Initial = 1,
  AfterFailed = 2,
}

export enum ExtraStoryPartType {
  Unknown = 0,
  Normal = 1,
  Limited = 2,
}

export enum ForumListReplyRequestType {
  Unknown = 0,
  Newest = 1,
  Newer = 2,
  Older = 3,
  Oldest = 4,
  Around = 5,
}

export enum FunctionLockType {
  Unknown = 0,
  ActivityFanEvent = 1,
  ActivityPromotion = 2,
  ActivityRefresh = 3,
  QuestContest = 4,
  QuestDaily = 5,
  QuestTower = 6,
  Pvp = 7,
  PhotoReroll = 8,
  PhotoEnhance = 9,
  AccessoryEnhance = 10,
  CardSupport = 11,
  Guild = 12,
  Division = 13,
  Hierarchy = 14,
  CardReset = 15,
  PhotoShooting = 16,
  Forum = 17,
  Diary = 18,
  AccessoryLimitBreak = 19,
  QuestSubTower = 20,
  Invite = 21,
  PhotoRetouch = 22,
  InviteHost = 23,
  BuddyUse = 24,
  AuthDelete = 25,
  BuddyUseQuestContest = 26,
  Exercise = 27,
  BuddyUseMarathon = 28,
  CardRankUp = 29,
  League = 30,
  LiveResultDetail = 31,
}

export enum FunctionMaintenanceType {
  Unknown = 0,
  Gacha = 1,
  Exchange = 2,
  Shop = 3,
  Market = 4,
  Division = 5,
  Forum = 6,
  Guild = 7,
  Gvg = 8,
}

export enum GachaAnimationEmbeddedType {
  Unknown = 0,
  All1 = 1,
  All2 = 2,
  Single1 = 101,
  Single2 = 102,
}

export enum GachaContinuousResultType {
  Unknown = 0,
  Continue = 1,
  ContinueWithEffect = 2,
  Finish = 3,
}

export enum GachaLimitType {
  Unknown = 0,
  Total = 1,
  Daily = 2,
}

export enum GachaRewardPatternType {
  Unknown = 0,
  SelectCard = 1,
  NotSelectCard = 2,
  Premium = 3,
}

export enum GachaType {
  Unknown = 0,
  Normal = 1,
  Item = 2,
  Premium = 3,
  Continuous = 4,
  Stamp = 5,
}

export enum GiftFilterType {
  Unknown = 0,
  Stone = 1,
  Card = 2,
  Photo = 3,
  Accessory = 4,
  Gold = 5,
  Other = 999,
}

export enum GiftSortType {
  Unknown = 0,
  PostedDatetime = 1,
  LimitDatetime = 2,
}

export enum GraphicType {
  Unknown = 0,
  Highest = 1,
  High = 2,
  Middle = 3,
  Low = 4,
}

export enum GvgChallengeConsumptionType {
  Unknown = 0,
  Free = 1,
  Item = 2,
  Stone = 3,
}

export enum GvgMatchResultType {
  Unknown = 0,
  Win = 1,
  Lose = 2,
  Draw = 3,
}

export enum HelpDisplayTargetType {
  Unknown = 0,
  AccessoryTop = 1,
  AccountTop = 2,
  ActivityPhotography = 3,
  ActivityTop = 4,
  CardDetail = 5,
  CardList = 6,
  CardPortalTop = 7,
  CardPreview = 8,
  CardReset = 9,
  CardStory = 10,
  CardSupport = 11,
  CardSupportEdit = 12,
  CardZoom = 13,
  ChapterList = 14,
  CharacterCostume = 15,
  CharacterDetails = 16,
  CharacterList = 17,
  CharacterTop = 18,
  ConditionRewardShop = 19,
  ContestLiveDeckSelect = 20,
  ContestLiveQuestSelect = 21,
  DailyLiveDeckSelect = 22,
  DailyLiveQuestSelect = 23,
  DailyLiveTop = 24,
  DeckAccessoryEdit = 25,
  DeckCardEdit = 26,
  DeckEdit = 27,
  DeckPhotoEdit = 28,
  EpisodeList = 29,
  EventStory = 30,
  ExchangeDetail = 31,
  ExchangeTop = 32,
  FanEvent = 33,
  FanEventCharacter = 34,
  FanEventList = 35,
  FanEventResult = 36,
  ForumList = 37,
  ForumThread = 38,
  GachaCharacterPreview = 39,
  GameSettingTop = 40,
  GiftTop = 41,
  GuildLive = 42,
  GuildSelect = 43,
  GuildTop = 44,
  GuildTraining = 45,
  GvgLiveDeckSelect = 46,
  GvgLivePlayerSelect = 47,
  GvgLiveResult = 48,
  HomeDiary = 49,
  HomeEventBannerList = 50,
  HomeTalk = 51,
  HomeTop = 52,
  ItemGacha = 53,
  ItemGachaResult = 54,
  ItemList = 55,
  LivePhotography = 56,
  LiveTop = 57,
  LoginBonusShop = 58,
  LoginBonusTop = 59,
  MainLiveAreaSelect = 60,
  MainLiveDeckSelect = 61,
  MainLiveQuestSelect = 62,
  MainLiveResult = 63,
  Market = 64,
  MessageDetail = 65,
  MessageHistory = 66,
  MessageTop = 67,
  MissionTop = 68,
  NormalGacha = 69,
  NormalGachaAnimation = 70,
  NormalGachaAnimationTop = 71,
  NormalGachaResult = 72,
  NormalShop = 73,
  PhotoDetail = 74,
  PhotoEnhance = 75,
  PhotographyTop = 76,
  PhotoList = 77,
  PhotoReroll = 78,
  ProfileRequest = 79,
  ProfileSetting = 80,
  ProfileTop = 81,
  Promotion = 82,
  PromotionCharacter = 83,
  PromotionList = 84,
  PromotionResult = 85,
  PvpLiveDeckSelect = 86,
  PvpLivePlayerSelect = 87,
  PvpLiveResult = 88,
  Refresh = 89,
  RefreshCharacter = 90,
  RefreshLevelSelect = 91,
  RefreshList = 92,
  RefreshResult = 93,
  SalaryActivity = 94,
  SalaryPayslipList = 95,
  ShopTop = 96,
  StoneShop = 97,
  StoryPlayer = 98,
  StoryPreviewPlayer = 99,
  StoryTop = 100,
  TourActivity = 101,
  TourArea = 102,
  TourDeckEdit = 103,
  TourLiveBattleDeckSelect = 104,
  TourLiveBattleResult = 105,
  TourLiveDeckSelect = 106,
  TourLiveResult = 107,
  TourTop = 108,
  TowerLiveDeckSelect = 109,
  TowerLiveQuestSelect = 110,
  VenusAchiever = 111,
  VenusRanking = 112,
  VenusReward = 113,
  VenusTop = 114,
  HomeCostume = 115,
  BacksideAreaSelect = 116,
  BacksideDeckEdit = 117,
  BacksideDeckSelect = 118,
  BacksideLiveStart = 119,
  BacksideLiveBattleStart = 120,
  BacksideStage = 121,
  BacksideTop = 122,
  MarathonTop = 123,
  MarathonLiveQuestSelect = 124,
  MarathonLiveDeckSelect = 125,
  MarathonLiveBattleDeckSelect = 126,
  TowerLiveTop = 127,
  PhotoContestTop = 128,
  PhotoContestPhotoList = 129,
  PhotoContestMission = 130,
  PhotoContestPhotographyTop = 131,
  PhotoContestLivePhotography = 132,
  PhotoContestActivityPhotography = 133,
  RaceTop = 134,
  RaceMain = 135,
  RaceLesson = 136,
  RaceDeckEdit = 137,
  RaceLiveBattleDeckSelect = 138,
  RaceLiveDeckSelect = 139,
  RaceVenusLiveDeckSelect = 140,
  PremiumGacha = 141,
  LadderTop = 142,
  PhotoRetouch = 143,
  FriendCardEdit = 144,
  DeckFriendCardEdit = 145,
  FriendSearch = 146,
  FriendTop = 147,
  FriendCode = 148,
  ExerciseTop = 149,
  ExerciseDeckEdit = 150,
  ExerciseDeckPhotoEdit = 151,
  ExerciseDeckAccessoryEdit = 152,
  ExerciseLiveDeckSelect = 153,
  ExerciseLiveBattleDeckSelect = 154,
  ExerciseLiveResult = 155,
  MarathonRaidList = 156,
  MarathonRaidTop = 157,
  MarathonRaidLiveQuestSelect = 158,
  MarathonRaidLiveDeckSelect = 159,
  MarathonRaidLiveBattleDeckSelect = 160,
  LeagueTop = 161,
  LeagueLiveNews = 162,
  LeagueLiveDeckSelect = 163,
  LeagueLastSeasonRecord = 164,
  SpecialStory = 165,
  ExtraStory = 166,
  SpecialPhotographyTop = 167,
  SpecialLivePhotography = 168,
  SpecialActivityPhotography = 169,
}

export enum HelpType {
  Unknown = 0,
  Help = 1,
  Faq = 2,
  Tips = 3,
  AccountRecovery = 4,
}

export enum HierarchyRewardType {
  Unknown = 0,
  HierarchyDetailGrade = 1,
  HierarchyPoint = 2,
}

export enum HomeActionType {
  Unknown = 0,
  Tap = 1,
  NonTap = 2,
}

export enum HomePlaceType {
  Unknown = 0,
  Any = 1,
  Dormitory = 2,
  Office = 3,
  LessonRoom = 4,
}

export enum HomePositionType {
  Unknown = 0,
  Home = 1,
  Training = 2,
  Activity = 3,
  Idol = 4,
}

export enum InquiryTemplateType {
  Unknown = 0,
  AccountRecovery = 1,
}

export enum ItemType {
  Unknown = 0,
  CardEnhance = 1,
  CardLimitBreak = 2,
  CardSkill = 3,
  CardAbility = 4,
  IdolMedal = 5,
  PhotoReroll = 6,
  PhotoEnhance = 7,
  GachaTicket = 8,
  GachaPoint = 9,
  ExchangeMaterial = 10,
  PhotoShooting = 11,
  CardSupportRelease = 12,
  PhotoShootingLevelChange = 13,
  AccessoryLimitBreak = 14,
  PhotoInk = 15,
  CardRank = 16,
  SpecialPhotoShooting = 17,
  ActivityRefreshShorten = 1001,
  ActivityPromotionShorten = 1002,
  ActivityFanEventSuperMode = 1003,
  ActivityFanEventSpeedUp = 1004,
  ActivityFanEventCheerPointUp = 1005,
  ActivityFanEventRewardUp = 1006,
  ActivityLessonPromote = 1007,
  ActivityPromotionSpecialShorten = 1008,
  QuestDailyGoldTicket = 2001,
  QuestDailyCardEnhanceTicket = 2002,
  QuestDailyPhotoTicketTicket = 2003,
  QuestContestTicket = 2004,
  PvpTicket = 2005,
  QuestDailySpecialTicket = 2006,
  EventMedal = 3001,
  BoxGachaPoint = 4001,
  MarathonStaminaRecovery = 5001,
  MarathonQuestUnlock = 5002,
  MarathonRaidStaminaRecovery = 5003,
  PhotoContestSubmitting = 6001,
  PhotoContestCreating = 6002,
  RacePoint = 7001,
  RaceLiveBonusReset = 7002,
  LadderPoint = 8001,
}

export enum JoinedGuildType {
  Unknown = 0,
  Join = 1,
  NotJoin = 2,
}

export enum LadderPanelType {
  Unknown = 0,
  Reward = 1,
  Message = 2,
}

export enum LeagueDeckType {
  Unknown = 0,
  A = 1,
  B = 2,
}

export enum LeagueSeasonCardResultType {
  Unknown = 0,
  HighestScore = 1,
  SkillActivationRate = 2,
  MvpCount = 3,
}

export enum LeagueSeasonResultType {
  Unknown = 0,
  Upgrade = 1,
  Stay = 2,
  Downgrade = 3,
}

export enum LeagueStatusType {
  Unknown = 0,
  Prepare = 1,
  Battle = 2,
  BattleExtension = 3,
  NotOpened = 4,
}

export enum LinkType {
  Unknown = 0,
  Activity = 1,
  Quest = 2,
  QuestMain = 3,
  QuestTower = 4,
  QuestPvp = 5,
  QuestContest = 6,
  QuestDaily = 7,
  QuestGvg = 8,
  Gacha = 9,
  Idol = 10,
  Card = 11,
  Character = 12,
  Deck = 13,
  Photo = 14,
  Accessory = 15,
  Story = 16,
  Guild = 17,
  Mission = 18,
  Notice = 19,
  Message = 20,
  Shop = 21,
  Exchange = 22,
  Option = 23,
  Profile = 24,
  Item = 25,
  Diary = 26,
  Salary = 27,
  Hierarchy = 28,
  LoginBonus = 29,
  PhotoReport = 30,
  Help = 31,
  Shooting = 32,
  CardSupport = 33,
  CardReset = 34,
  Friend = 35,
  Market = 36,
  Forum = 37,
  EventMission = 100,
  Tour = 101,
  Backside = 102,
  Marathon = 103,
  PhotoContest = 104,
  Race = 105,
  Ladder = 106,
  WebView = 999,
  ExternalWebPage = 1000,
}

export enum LiveAbilityLevelBackgroundRankType {
  Unknown = 0,
  First = 1,
  Second = 2,
  Third = 3,
}

export enum LiveAbilityType {
  Unknown = 0,
  DanceAdd = 1,
  DanceMultiply = 2,
  VocalAdd = 3,
  VocalMultiply = 4,
  VisualAdd = 5,
  VisualMultiply = 6,
  StaminaAdd = 7,
  StaminaMultiply = 8,
  MentalAdd = 9,
  MentalMultiply = 10,
  TechniqueAdd = 11,
  TechniqueMultiply = 12,
  PassiveSkill = 13,
  ManagerExp = 14,
  Gold = 15,
  CardExp = 16,
  BeatScoreAdd = 17,
  BeatScoreMultiply = 18,
  ActiveSkillScoreAdd = 19,
  ActiveSkillScoreMultiply = 20,
  SpecialSkillScoreAdd = 21,
  SpecialSkillScoreMultiply = 22,
  CriticalScoreMultiply = 23,
  AudienceAmountUp = 24,
  AccessoryParameterUp = 25,
  PhotoLevelUp = 26,
}

export enum LiveResultType {
  Unknown = 0,
  Success = 1,
  Normal = 2,
  Failed = 3,
}

export enum LiveSkipType {
  Unknown = 0,
  None = 1,
  Always = 2,
  AfterPlay = 3,
  AlwaysFullSkip = 4,
}

export enum LiveTipType {
  Unknown = 0,
  NotPossessed = 1,
  LowActivatingRate = 2,
  InCoolTime = 3,
  StaminaShortage = 4,
  Miss = 5,
  SkillHeavyWeight = 6,
  AudienceShortage = 7,
  LevelShortage = 8,
  DeckUnbalance = 9,
  Other = 10,
}

export enum LiveType {
  Unknown = 0,
  Score = 1,
  Battle = 2,
}

export enum LoadingDisplayTargetType {
  Unknown = 0,
  FirstDownload = 1,
  Update = 2,
  Home = 3,
  GachaDraw = 4,
  ActivityFanEventBefore = 101,
  ActivityPromotionBefore = 102,
  ActivityRefreshBefore = 103,
  QuestMainAreaBefore = 201,
  QuestMainAreaAfter = 202,
  QuestContestAreaBefore = 203,
  QuestContestAreaAfter = 204,
  QuestPvpBefore = 205,
  QuestPvpAfter = 206,
  QuestTowerAreaBefore = 207,
  QuestTowerAreaAfter = 208,
  QuestGvgBefore = 209,
  QuestGvgAfter = 210,
  QuestDailyAreaBefore = 211,
  QuestDailyAreaAfter = 212,
  PhotoModeBefore = 301,
  PhotoModeAfter = 302,
  Other = 999,
  All = 1000,
  ActivityBefore = 1001,
  QuestBefore = 1002,
  QuestAfter = 1003,
}

export enum LoadingType {
  Unknown = 0,
  Movie = 1,
  Introduction = 2,
  Image = 3,
  Text = 4,
  ImageText = 5,
  Comic = 6,
}

export enum LoginBonusType {
  Unknown = 0,
  Normal = 1,
  Event = 2,
}

export enum MarathonRaidProgressType {
  Unknown = 0,
  Joinable = 1,
  Progressing = 2,
  Finished = 3,
  History = 4,
}

export enum MarathonRaidStatusType {
  Unknown = 0,
  Joined = 1,
  Finished = 2,
}

export enum MarathonType {
  Unknown = 0,
  Normal = 1,
  Raid = 2,
}

export enum MessageInstantType {
  Unknown = 0,
  Login = 1,
  Live = 2,
  Activity = 3,
}

export enum MessageRarityType {
  Unknown = 0,
  Normal = 1,
  Rare = 2,
  Srare = 3,
}

export enum MessageStatusType {
  Unknown = 0,
  Unlocked = 1,
  Scheduled = 2,
  Received = 3,
  Finished = 4,
}

export enum MessageType {
  Unknown = 0,
  Story = 1,
  Instant = 2,
}

export enum MissionCategoryType {
  Unknown = 0,
  Daily = 1,
  Weekly = 2,
  Normal = 3,
  Photo = 6,
}

export enum MissionStatusType {
  Unknown = 0,
  Progress = 1,
  Clear = 2,
  NotReceived = 3,
  Received = 4,
}

export enum MissionType {
  Unknown = 0,
  LoginCount = 1,
  LoginTotalCount = 2,
  MissionClearCount = 3,
  ConditionClear = 4,
  QuestMainClearCount = 5,
  QuestContestClearCount = 6,
  QuestDailyClearCount = 7,
  QuestPvpClearCount = 8,
  QuestTowerClearCount = 9,
  QuestGvgClearCount = 10,
  QuestAllClearCount = 11,
  CardLevelUpCount = 12,
  CardLevelAchievement = 13,
  CardSkillLevelUpCount = 14,
  CardAbilityLevelUpCount = 15,
  CardLimitBreakCount = 16,
  CharacterLevelUpCount = 17,
  CharacterLevelAchievement = 18,
  CharacterSkillLevelUpCount = 19,
  CharacterAbilityLevelUpCount = 20,
  CharacterLimitBreakCount = 21,
  ActivityLevelAchievement = 22,
  PhotoLevelUpCount = 23,
  PhotoLevelAchievement = 24,
  PhotoRerollCount = 25,
  ContestTotalScoreAchievement = 26,
  DeckMaxPowerAchievement = 27,
  AccessoryEnhanceCount = 28,
  AccessoryRarityAchievement = 29,
  FriendApproveTotalCount = 30,
  MarketExchangeCount = 31,
  MarketExchangeTotalCount = 32,
  PhotoShootCount = 33,
  PhotoShootTotalCount = 34,
  PointGoldAmount = 35,
  PointGoldTotalAmount = 36,
  DataMigration = 37,
  UrlTransition = 38,
  StaffTrainTotalCount = 39,
  ProfileSetting = 40,
  ForumLikeCount = 41,
  ForumLikeTotalCount = 42,
  ItemAmount = 43,
  PostProfileToTwitter = 44,
  QuestPvpPlayCount = 45,
  GuildCheckInCount = 46,
  GuildCheckInTotalCount = 47,
  ManagerLevelAchievement = 48,
  ReliabilityAchievement = 49,
  AccessoryLimitBreakCount = 50,
  AccessoryLimitBreakPhaseAchievement = 51,
  QuestSubTowerClearCount = 52,
  PhotoRetouchCount = 53,
  PhotoRetouchTotalCount = 54,
  AccessoryUsedAmount = 55,
  AnimeStoryPointUsedAmount = 56,
  GameStoryPointUsedAmount = 57,
  GroupStoryPointUsedAmount = 58,
  GoldUsedAmount = 59,
  GuildMedalUsedAmount = 60,
  PvpMedalUsedAmount = 61,
  ItemUsedAmount = 62,
  PhotoRecipeUsedAmount = 63,
  StoneUsedAmount = 64,
  PaidStoneUsedAmount = 65,
  TourAreaClearCount = 1001,
  TourRivalClearCount = 1002,
  TourBossClearCountWithCharacter = 1003,
  TourBossClearCountWithCard = 1004,
  TourScoreAchievement = 1005,
  BacksideStageClearCount = 1101,
  BacksideAreaClearCount = 1102,
  BacksidePracticeScoreAchievement = 1103,
  BacksideFinalScoreAchievement = 1104,
  BacksideSurpriseCount = 1105,
  MarathonQuestClearCount = 1201,
  MarathonQuestClearDifficulty = 1202,
  MarathonRaidClearCount = 1203,
  MarathonRaidHostCount = 1204,
  MarathonRaidJoinCount = 1205,
  RacePanelClearCount = 1301,
  RaceQuestClearCount = 1302,
  RaceEnhanceLiveBonusAchievement = 1303,
  LadderPanelReachedCount = 1401,
  LadderConsumptionPointAmount = 1402,
  LadderReachedStep = 1403,
}

export enum MoodType {
  Unknown = 0,
  BlackHeart = 1,
  BlackDiamond = 2,
  BlackSpade = 3,
  BlackClub = 4,
  WhiteHeart = 5,
  WhiteDiamond = 6,
  WhiteSpade = 7,
  WhiteClub = 8,
}

export enum MotionResultRankType {
  Unknown = 0,
  Failed = 1,
  Normal = 2,
  Success = 3,
}

export enum MusicChartType {
  Unknown = 0,
  Beat = 1,
  ActiveSkill = 2,
  SpecialSkill = 3,
}

export enum NoticeCategoryType {
  Unknown = 0,
  Notice = 1,
  Malfunction = 2,
  Pr = 3,
}

export enum NotificationType {
  Unknown = 0,
  Activity = 1,
  LoginBonus = 2,
  Gift = 3,
}

export enum ParameterType {
  Unknown = 0,
  Dance = 1,
  Vocal = 2,
  Visual = 3,
  Stamina = 4,
  Mental = 5,
  Technique = 6,
}

export enum PhotoAbilityGradeType {
  Unknown = 0,
  Normal = 1,
  Silver = 2,
  Gold = 3,
}

export enum PhotoAbilityTargetType {
  Unknown = 0,
  Self = 1,
  All = 2,
  Center = 3,
  Neighbor = 4,
  Character = 5,
  CharacterGroup = 6,
}

export enum PhotoAbilityType {
  Unknown = 0,
  DanceAdd = 1,
  DanceMultiply = 2,
  VocalAdd = 3,
  VocalMultiply = 4,
  VisualAdd = 5,
  VisualMultiply = 6,
  StaminaAdd = 7,
  StaminaMultiply = 8,
  MentalAdd = 9,
  MentalMultiply = 10,
  TechniqueAdd = 11,
  TechniqueMultiply = 12,
  PassiveSkill = 13,
  ManagerExp = 14,
  Gold = 15,
  CardExp = 16,
  BeatScoreAdd = 17,
  BeatScoreMultiply = 18,
  ActiveSkillScoreAdd = 19,
  ActiveSkillScoreMultiply = 20,
  SpecialSkillScoreAdd = 21,
  SpecialSkillScoreMultiply = 22,
  CriticalScoreMultiply = 23,
  AudienceAmountUp = 24,
  ReceivedStrengthEffectValueIncrease = 27,
  ReceivedStrengthEffectCountIncrease = 28,
  AffectStrengthEffectValueIncrease = 29,
  AffectStrengthEffectCountIncrease = 30,
  CoolTimeReductionSkill1 = 31,
  CoolTimeReductionSkill2 = 32,
  CoolTimeReductionSkill3 = 33,
}

export enum PhotoContestBaseEvaluationType {
  Unknown = 0,
  Pose = 1,
  SizeFull = 2,
  SizeUpper = 3,
  DirectionFront = 4,
  DirectionSide = 5,
  Position = 6,
}

export enum PhotoContestBaseGuideRankType {
  Unknown = 0,
  D = 1,
  C = 2,
  B = 3,
  A = 4,
  S = 5,
}

export enum PhotoContestEvaluationRankType {
  Unknown = 0,
  D = 1,
  C = 2,
  B = 3,
  A = 4,
  S = 5,
}

export enum PhotoImageRequestType {
  Unknown = 0,
  Original = 1,
  Thumbnail = 2,
  Both = 3,
}

export enum PhotoImageType {
  Unknown = 0,
  Asset = 1,
  User = 2,
  Generated = 3,
}

export enum PhotoShootingActionType {
  Unknown = 0,
  ActivityPromotion = 1,
  ActivityRefresh = 2,
  Quest = 3,
}

export enum PhotoShootingMotionType {
  Unknown = 0,
  PersonalityFive = 1,
  PersonalityThree = 2,
}

export enum PlatformType {
  Unknown = 0,
  Ios = 1,
  Android = 2,
}

export enum PointType {
  Unknown = 0,
  Gold = 1,
  AnimeStory = 2,
  GameStory = 3,
  GroupStory = 4,
  GuildMedal = 5,
  PvpMedal = 6,
}

export enum ProfileBackgroundType {
  Unknown = 0,
  Default = 1,
  Card = 2,
  Photo = 3,
}

export enum ProfileColorType {
  Unknown = 0,
  Black1 = 1,
  Black2 = 2,
  White1 = 3,
  White2 = 4,
}

export enum ProfileInformationType {
  Unknown = 0,
  Many1 = 1,
  Many2 = 2,
  Less1 = 3,
  Less2 = 4,
}

export enum ProfileLayoutType {
  Unknown = 0,
  A = 1,
  B = 2,
  C = 3,
  D = 4,
}

export enum ProviderType {
  Unknown = 0,
  Apple = 1,
  Google = 2,
  Facebook = 3,
  Twitter = 4,
  Password = 99,
}

export enum PsylliumColorType {
  Unknown = 0,
  Red = 1,
  Green = 2,
  Blue = 3,
  Pink = 4,
  Yellow = 5,
  Orange = 6,
  LightGreen = 7,
  Cyan = 8,
  SakuraPink = 9,
  Emerald = 10,
  Purple = 11,
  Violet = 12,
  AquaBlue = 13,
  LightBlue = 14,
  LightYellow = 15,
  White = 16,
}

export enum RaceActivityLessonRewardType {
  Unknown = 0,
  RacePoint = 1,
  RaceMedal = 2,
}

export enum RacePanelType {
  Unknown = 0,
  Normal = 1,
  Item = 2,
  Live = 3,
  Story = 4,
}

export enum RaceRankingType {
  Unknown = 0,
  Total = 1,
  Daily = 2,
}

export enum ResetTimingType {
  Unknown = 0,
  Daily = 1,
  Weekly = 2,
  Monthly = 3,
  Never = 4,
}

export enum ResourceType {
  Unknown = 0,
  Item = 1,
  Card = 2,
  Accessory = 3,
  Character = 4,
  Costume = 5,
  PhotoSituation = 6,
  PhotoAllInOne = 7,
  Gold = 8,
  PvpMedal = 9,
  Story = 10,
  GuildMedal = 11,
  Message = 12,
  Telephone = 13,
  ManagerExp = 14,
  Stone = 15,
  PaidStone = 16,
  Emblem = 17,
  AnimeStoryPoint = 18,
  GameStoryPoint = 19,
  GroupStoryPoint = 20,
  PhotoGift = 21,
  HierarchyFixedPoint = 22,
  HierarchyVariablePoint = 23,
  CardRarityExp = 24,
  CardRarityExpLimitChange = 25,
  Decoration = 26,
  PhotoRecipe = 27,
  Hair = 28,
  Set = 999,
}

export enum ResultRankType {
  Unknown = 0,
  D = 1,
  C = 2,
  B = 3,
  A = 4,
  S = 5,
  Splus = 6,
}

export enum RewardSortResourceType {
  Unknown = 0,
  PaidStone = 1,
  Stone = 2,
  ManagerExp = 3,
  Gold = 4,
  ActivityStamina = 5,
  AnimeStoryPoint = 6,
  GameStoryPoint = 7,
  GroupStoryPoint = 8,
  FanAmount = 9,
  CoreFanRate = 10,
  MusicMasteryPoint = 11,
  ActivityExp = 12,
  Card = 13,
  PhotoAllInOne = 15,
  PhotoSituation = 16,
  Accessory = 17,
  Costume = 18,
  Emblem = 19,
  PvpMedal = 20,
  GuildMedal = 21,
  ItemPhotoShooting = 22,
  ItemGachaTicket = 23,
  ItemQuestContestTicket = 24,
  ItemQuestDailyGoldTicket = 25,
  ItemQuestDailyCardEnhanceTicket = 26,
  ItemQuestDailyPhotoTicketTicket = 27,
  ItemActivityRefreshShorten = 28,
  ItemActivityPromotionShorten = 29,
  ItemActivityFanEventSuperMode = 30,
  ItemActivityFanEventSpeedUp = 31,
  ItemActivityFanEventCheerPointUp = 32,
  ItemCardEnhance = 33,
  ItemCardLimitBreak = 34,
  ItemCardSkill = 35,
  ItemCardAbility = 36,
  ItemIdolMedal = 37,
  ItemPhotoReroll = 38,
  ItemPhotoEnhance = 39,
  ItemPvpTicket = 40,
  ItemEventMedal = 41,
  ItemCardSupportRelease = 42,
  ItemGachaPoint = 43,
  CardRarityExp = 44,
  CardRarityExpLimitChange = 45,
  Decoration = 46,
  ItemExchangeMaterial = 47,
  ItemPhotoShootingLevelChange = 48,
  ItemAccessoryLimitBreak = 49,
  ItemBoxGachaPoint = 50,
  ItemMarathonStaminaRecovery = 51,
  ItemMarathonQuestUnlock = 52,
  ItemPhotoContestSubmitting = 53,
  ItemRacePoint = 54,
  ItemRaceLiveBonusReset = 55,
  ItemQuestDailySpecialTicket = 56,
  ItemLadderPoint = 57,
  PhotoRecipe = 58,
  ItemPhotoInk = 59,
  Hair = 60,
  ItemMarathonRaidStaminaRecovery = 61,
  ItemActivityFanEventRewardUp = 62,
  ItemActivityLessonPromote = 63,
  ItemActivityPromotionSpecialShorten = 65,
  ItemCardRank = 66,
}

export enum RewardSortTargetType {
  Unknown = 0,
  Item = 1,
  ActivityFanEventRewardDetail = 2,
  ActivityFanEventResult = 3,
  ActivityFanEventMainReward = 4,
  QuestResult = 5,
  QuestTowerFirstClearReward = 6,
  ItemGacha = 7,
  ShopItem = 8,
  ActivityPromotionRewardDetail = 9,
  ActivityPromotionResult = 10,
  ActivityPromotionMainReward = 11,
  PremiumGachaProbability = 12,
  MarathonRaidQuestReward = 13,
}

export enum RuleType {
  Unknown = 0,
  Usage = 1,
  PrivacyPolicy = 2,
  FundSettlement = 3,
  CommercialTransaction = 4,
  ServiceGuideline = 5,
  Licence = 6,
}

export enum SalaryDetailType {
  Unknown = 0,
  BasicSalary = 1,
  ActivityBonus = 2,
  GvgHighestPointBonus = 3,
  CardLevelBonus = 4,
  FanAmountBonus = 5,
  FanEventScoreBonus = 6,
  ContestScoreBonus = 8,
  HierarchyGradeBonus = 9,
}

export enum ScreenChangeVoiceType {
  Unknown = 0,
  ActivityTop = 1,
  LiveTop = 2,
  CardPortalTop = 3,
  DeckEdit = 4,
  PhotoList = 5,
  AccessoryTop = 6,
  StoryTop = 7,
  GiftTop = 8,
  ShopTop = 9,
  ExchangeTop = 10,
  MissionTop = 11,
  ItemList = 12,
  GameSettingTop = 13,
  ProfileTop = 14,
  GuildTop = 15,
  TourTop = 16,
}

export enum ShopConditionRewardStatusType {
  Unknown = 0,
  InProgress = 1,
  Achieved = 2,
  Received = 3,
}

export enum ShopType {
  Unknown = 0,
  StoneShop = 1,
  NormalShop = 2,
  LoginBonusShop = 3,
  ConditionRewardShop = 4,
  DefaultStoneShop = 1001,
  DefaultNormalShop = 1002,
}

export enum SimpleCharacterPersonalityType {
  Unknown = 0,
  A = 1,
  Bc = 2,
  De = 3,
}

export enum SkillCategoryType {
  Unknown = 0,
  Special = 1,
  Active = 2,
  Passive = 3,
}

export enum SkillEfficacyIconType {
  Unknown = 0,
  Dance = 1,
  Vocal = 2,
  Visual = 3,
  Score = 4,
  Beat = 5,
  Appeal = 6,
  CriticalCoefficient = 7,
  Eye = 8,
  Stealth = 9,
  Ban = 10,
  Stamina = 11,
  Combo = 12,
}

export enum SkillEfficacyType {
  Unknown = 0,
  ScoreGet = 1,
  FixScoreGet = 2,
  ScoreGetByMoreFanAmount = 3,
  ScoreGetByLessFanAmount = 4,
  ScoreGetByMoreFanEngage = 5,
  ScoreGetByMoreStamina = 6,
  ScoreGetByLessStamina = 7,
  ScoreGetByMoreComboCount = 8,
  ScoreGetByStrengthEffectCount = 9,
  ScoreGetByTrigger = 10,
  StaminaConsumptionReduction = 11,
  ComboContinuation = 12,
  DanceUp = 13,
  VocalUp = 14,
  VisualUp = 15,
  ScoreUp = 16,
  BeatScoreUp = 17,
  ActiveSkillScoreUp = 18,
  CriticalRateUp = 19,
  CriticalBonusPermilUp = 20,
  AudienceAmountIncrease = 21,
  StaminaRecovery = 22,
  FixStaminaRecovery = 23,
  WeaknessEffectRecovery = 24,
  StrengthEffectCountIncrease = 25,
  StrengthEffectValueIncrease = 26,
  CoolTimeReduction = 27,
  AudienceAmountReduction = 28,
  SkillImpossible = 29,
  DanceDown = 30,
  VocalDown = 31,
  VisualDown = 32,
  StaminaConsumptionIncrease = 33,
  SpecialSkillScoreUp = 34,
  TargetStaminaRecovery = 35,
  ScoreGetByStatusEffectTypeGrade = 36,
  SkillSuccessRateUp = 37,
  TensionUp = 38,
  ScoreGetBySkillActivationCount = 39,
  WeaknessEffectPrevention = 40,
  ComboScoreUp = 41,
  PassiveSkillScoreUp = 42,
  ScoreGetByMoreStaminaUse = 43,
  WeaknessEffectInversion = 44,
  StrengthEffectMigrationBeforeActiveSkill = 45,
  StrengthEffectMigrationBeforeSpecialSkill = 46,
  ScoreGetByDeckSupporter = 47,
  ScoreGetByDeckBuffer = 48,
  StaminaConsumption = 49,
  CoolTimeIncrease = 50,
  StrengthEffectErasing = 51,
  StrengthEffectAssignment = 52,
  LiveAbilityCoolTimeReduction = 53,
  ScoreGetBySkillSuccessRateUp = 54,
  ScoreGetAndStaminaConsumptionByMoreStaminaUse = 55,
  VocalBoost = 56,
  DanceBoost = 57,
  VisualBoost = 58,
  SpecialScoreMultiplierAdd = 59,
  ActiveScoreMultiplierAdd = 60,
  PassiveScoreMultiplierAdd = 61,
  StaminaContinuousRecovery = 62,
  StaminaContinuousConsumption = 63,
  ActiveSkillChanceAssignment = 64,
  StrengthEffectErasingAll = 65,
  StrengthEffectAssignmentAll = 66,
  ScoreGetByLessComboCount = 67,
  ScoreGetByCharacterCount = 68,
  ScoreGetByLessTotalScore = 69,
  ScoreGetByScoreRatio = 70,
  StrengthEffectGradeLimit = 71,
  StatusEffectChange = 72,
  PassiveSkillCoolTimeReset = 73,
  PassiveSkillImpossible = 74,
  CoverWeaknessEffect = 75,
}

export enum SkillFailureType {
  Unknown = 0,
  StaminaShortage = 1,
  InCoolTime = 2,
  NoRemainingCount = 3,
  CategoryMismatch = 4,
  InSkillImpossibleEffect = 5,
  OpponentActivation = 6,
  Miss = 7,
}

export enum SkillPossessionType {
  Unknown = 0,
  Card = 1,
  Photo = 2,
  Ability = 3,
  Quest = 4,
}

export enum SkillTargetType {
  Unknown = 0,
  Self = 1,
  All = 2,
  Center = 3,
  DanceHigher = 4,
  DanceLower = 5,
  VocalHigher = 6,
  VocalLower = 7,
  VisualHigher = 8,
  VisualLower = 9,
  StaminaHigher = 10,
  StaminaLower = 11,
  Status = 12,
  Trigger = 13,
  CardType = 14,
  Neighbor = 15,
  Vocal = 16,
  Dance = 17,
  Visual = 18,
  PositionAttributeVocal = 19,
  PositionAttributeDance = 20,
  PositionAttributeVisual = 21,
  OpponentCenter = 22,
  OpponentCardType = 23,
  OpponentAll = 24,
  OpponentSamePosition = 25,
}

export enum SkillTriggerType {
  Unknown = 0,
  Beat = 1,
  LiveStart = 2,
  Combo = 3,
  MoreThanCharacterCount = 4,
  BeforeActiveSkillBySomeone = 5,
  BeforeSpecialSkillBySomeone = 6,
  BeforeCritical = 7,
  BeforeCriticalBySomeone = 8,
  Critical = 9,
  Status = 10,
  SomeoneStatus = 11,
  StaminaLower = 12,
  StaminaHigher = 13,
  SomeoneStaminaLower = 14,
  FanEngageHigher = 15,
  Center = 16,
  MoodType = 17,
  Music = 18,
  StatusGroup = 19,
  SomeoneStatusGroup = 20,
  PositionAttributeVocal = 21,
  PositionAttributeDance = 22,
  PositionAttributeVisual = 23,
  CenterStatus = 24,
  CardTypeStatus = 25,
  SomeoneRecovered = 26,
  AllAttributeType = 27,
  MostLeft = 28,
  MostRight = 29,
  SecondFromLeft = 30,
  SecondFromRight = 31,
  AllStatus = 32,
  ComboLessEqual = 33,
  SkillFailure = 34,
  MoreThanPositionCardTypeCount = 35,
  BeforeActiveSkill = 36,
  BeforeSpecialSkill = 37,
  SkillFailureSelf = 38,
  StatusEffectGradeHigher = 39,
  StatusEffectGradeLower = 40,
  SomeoneStatusEffectGradeHigher = 41,
}

export enum SpecialSkillCameraOrientationType {
  Unknown = 0,
  V = 1,
  H = 2,
}

export enum SpecialSkillResultType {
  Unknown = 0,
  Fail = 1,
  Low = 2,
  Middle = 3,
  High = 4,
}

export enum StageSizeType {
  Unknown = 0,
  Small = 1,
  Middle = 2,
  Large = 3,
}

export enum StageType {
  Unknown = 0,
  Small = 1,
  Medium = 2,
  Large = 3,
}

export enum StatusEffectGroupType {
  Unknown = 0,
  Strength = 1,
  Weakness = 2,
}

export enum StatusEffectType {
  Unknown = 0,
  DanceUp = 1,
  VocalUp = 2,
  VisualUp = 3,
  ScoreUp = 4,
  BeatScoreUp = 5,
  ActiveSkillScoreUp = 6,
  CriticalRateUp = 7,
  CriticalBonusPermilUp = 8,
  StaminaConsumptionReduction = 9,
  ComboContinuation = 10,
  AudienceAmountIncrease = 11,
  SpecialSkillScoreUp = 12,
  SkillSuccessRateUp = 13,
  TensionUp = 14,
  WeaknessEffectPrevention = 15,
  ComboScoreUp = 16,
  PassiveSkillScoreUp = 17,
  VocalBoost = 18,
  DanceBoost = 19,
  VisualBoost = 20,
  SpecialScoreMultiplierAdd = 21,
  ActiveScoreMultiplierAdd = 22,
  PassiveScoreMultiplierAdd = 23,
  StaminaContinuousRecovery = 24,
  ActiveSkillChanceAssignment = 25,
  CoverWeaknessEffect = 26,
  DanceDown = 1001,
  VocalDown = 1002,
  VisualDown = 1003,
  SkillImpossible = 1004,
  StaminaConsumptionIncrease = 1005,
  AudienceAmountReduction = 1006,
  StaminaContinuousConsumption = 1007,
  StrengthEffectGradeLimit = 1008,
  PassiveSkillImpossible = 1009,
}

export enum StoryAdvPlayType {
  Unknown = 0,
  Adv = 1,
  LiveMovie = 2,
  VerticalAdv = 3,
  VerticalMovie = 4,
  HorizontalMovie = 5,
}

export enum StoryPartType {
  Unknown = 0,
  Main = 1,
  Group = 2,
  Original = 3,
}

export enum StoryStatusType {
  Unknown = 0,
  Unread = 1,
  Read = 2,
}

export enum TelephoneStatusType {
  Unknown = 0,
  Unlocked = 1,
  Scheduled = 2,
  Received = 3,
  Finished = 4,
}

export enum TitleBackgroundType {
  Unknown = 0,
  Image = 1,
  Movie = 2,
}

export enum TourAreaType {
  Unknown = 0,
  Normal = 1,
  Extra = 2,
}

export enum TourEnemyType {
  Unknown = 0,
  Absolute = 1,
  Relative = 2,
  RelativeSelect = 3,
}

export enum TourStepType {
  Unknown = 0,
  Activity = 1,
  Refresh = 2,
  SpRefresh = 3,
  Scout = 4,
  Live = 5,
  SpLive = 6,
  RivalPvp = 7,
  BossPvp = 8,
}

export enum TourType {
  Unknown = 0,
  Live = 1,
  Mini = 2,
}

export enum TutorialNavigationPositionType {
  Unknown = 0,
  Top = 1,
  Upper = 2,
  Middle = 3,
  Lower = 4,
  Bottom = 5,
}

export enum TutorialNavigationType {
  Unknown = 0,
  Character = 1,
  System = 2,
  Tips = 3,
}

export enum TutorialType {
  Unknown = 0,
  GameStart = 1,
  PhotoCreateShooting = 2,
  ActivityFanEvent = 3,
  ActivityPromotion = 4,
  ActivityRefresh = 5,
  QuestContest = 6,
  Pvp = 7,
  QuestDaily = 8,
  QuestTower = 9,
  CardSupport = 10,
  Guild = 11,
  Hierarchy = 12,
  Diary = 13,
  PhotoEnhance = 14,
  PhotoReroll = 15,
  AccessoryEnhance = 16,
  PhotoReport = 17,
  Gvg = 18,
  CardReset = 19,
  Salary = 20,
  Forum = 21,
  SkillEnhance = 22,
  Backside = 23,
  Memories = 24,
  Marathon = 25,
  AccessoryLimitBreak = 26,
  Race = 27,
  Ladder = 28,
  PhotoRetouch = 29,
  Collaboration = 30,
  MarathonRaid = 31,
  League = 32,
  CardRank = 33,
}
