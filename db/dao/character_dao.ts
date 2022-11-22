import protoChara from "../../database/Character.json"
import { Character } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"

const rawChara: Character[] = protoChara

const getCharacter = (
  id: string
): Character | undefined => {
  return rawChara.find(it => it.id === id)
    ?? logIdNotFound("Character", id)
}

export {
  getCharacter,
}
