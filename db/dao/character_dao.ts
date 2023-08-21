import protoChara from "../../database/Character.json"
import protoCharaGroup from "../../database/CharacterGroup.json"
import { Character, CharacterGroup } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"

const rawChara: Character[] = protoChara
const rawCharaGroup: CharacterGroup[] = protoCharaGroup

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
}