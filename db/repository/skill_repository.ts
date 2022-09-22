import { WapSkillEfficacy } from "../../types/wap/skill_waps"
import { getWapSkillEfficacy } from "../wrapper/skill_wrapper"

export const getSkillEfficacy = (
  id: string
): WapSkillEfficacy | undefined => {
  return wapSkillEfficacyRepo[id] ?? (() => {
    const efficacy = getWapSkillEfficacy(id)
    if (efficacy) {
      wapSkillEfficacyRepo[id] = efficacy
    }
    return efficacy
  })()
}

const wapSkillEfficacyRepo: {
  [key: string]: WapSkillEfficacy
} = {}
