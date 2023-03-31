import { LiveBeat } from "../proto/proto_api"

export type WapLiveBeat = Omit<LiveBeat, "score" | "cardAppliedStatus"> & {
  score: number
}

export type WapPhotoAbility = {
  photoAbilityId: string
  effectValue: string
  missionId: string
  grade: number
  isAvailable: boolean
}
