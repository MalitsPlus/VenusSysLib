

export type WapLiveBeat = Omit<LiveBeat, "score"> & {
  score: number
}

export type WapPhotoAbility = {
  photoAbilityId: string
  effectValue: string
  missionId: string
  grade: number
  isAvailable: boolean
}
