import { Character, CharacterGroup } from "../../types/proto/proto_master";
import { getCharacter, getRawCharaGroups } from "../dao/character_dao";

const getAllGroups = (): CharacterGroup[] => {
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

const charaGroups: CharacterGroup[] = getRawCharaGroups()
const charas: Character[] = []

export {
  getAllCharas,
  getAllGroups
};

