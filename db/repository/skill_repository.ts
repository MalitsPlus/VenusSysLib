import { WapSkill, WapSkillEfficacy } from "../../types/wap/skill_waps"
import { getWapSkill, getWapSkillEfficacy } from "../wrapper/skill_wrapper"

export const getSkill = (
  id: string,
): WapSkill | undefined => {
  return wapSkillRepo[id] ?? (() => {
    const skill = getWapSkill(id)
    if (skill) {
      wapSkillRepo[id] = skill
    }
    return skill
  })()
}

const wapSkillRepo: {
  [key: string]: WapSkill
} = {}

// export const getSkillEfficacy = (
//   id: string
// ): WapSkillEfficacy | undefined => {
//   return wapSkillEfficacyRepo[id] ?? (() => {
//     const efficacy = getWapSkillEfficacy(id)
//     if (efficacy) {
//       wapSkillEfficacyRepo[id] = efficacy
//     }
//     return efficacy
//   })()
// }

// const wapSkillEfficacyRepo: {
//   [key: string]: WapSkillEfficacy
// } = {}
