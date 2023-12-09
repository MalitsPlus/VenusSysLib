import { Character, CharacterGroup } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"
import { Unpromise } from "./typeUtils"
import { getRaw, isAllInitialzed } from "./utils"

let rawChara: Character[]
let rawCharaGroup: CharacterGroup[]

async function initCharacter() {
  // if (isAllInitialzed(rawChara, rawCharaGroup)) {
  //   return
  // }
  const results = await Promise.all([
    getRaw<Character[]>("Character"),
    getRaw<CharacterGroup[]>("CharacterGroup"),
  ])
  setInitCharacter(results)
  return results
}

function setInitCharacter(data: Unpromise<ReturnType<typeof initCharacter>>) {
  if (data === undefined) {
    throw new Error("Initialize Card failed")
  }
  rawChara = data[0]
  rawCharaGroup = data[1]
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
  setInitCharacter,
}