import { Character, CharacterGroup } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"
import { getRaw, isAllInitialzed } from "./utils"

let rawChara: Character[]
let rawCharaGroup: CharacterGroup[]

async function initCharacter() {
  if (isAllInitialzed(rawChara, rawCharaGroup)) {
    return
  }
  const results = await Promise.all([
    getRaw<Character[]>("Character"),
    getRaw<CharacterGroup[]>("CharacterGroup"),
  ])
  rawChara = results[0]
  rawCharaGroup = results[1]
}

const getCharacter = (
  id: string
): Character | undefined => {
  return rawChara.find(it => it.id === id)
    ?? logIdNotFound("Character", id)
}


const getRawCharaGroups = (): CharacterGroup[] => {
  return rawCharaGroup
}

export {
  getCharacter,
  getRawCharaGroups,
  initCharacter,
}