import { Accessory } from "./proto/proto_master"
import { WapPhotoAbility } from "./wap/misc_waps"

export type Equipment = {
  wapPhotos: UserPhoto[],
  accessories: Accessory[],
}

export type UserPhoto = {
  photoId: string
  name: string
  rarity: number
  level: number
  abilities: WapPhotoAbility[]
  focusCharacterId: string
  photoRecipeId: string
}
