import { Character, CharacterGroup } from "../../types/proto/proto_master";
import { getCharacter, getRawCharaGroups } from "../dao/character_dao";

const getAllGroups = (): CharacterGroup[] => {
  if (charaGroups === undefined) {
    charaGroups = getRawCharaGroups()
  }
  return charaGroups
}

const getAllCharas = (): Character[] => {
  if (charas.length === 0) {
    getAllGroups().forEach(group => {
      group.mappings.forEach(mp => {
        const chara = getCharacter(mp.characterId)
        if (chara) {
          charas.push(chara)
        }
      })
    })
  }
  return charas
}

let charaGroups: CharacterGroup[]
const charas: Character[] = []

export {
  getAllCharas,
  getAllGroups
};

