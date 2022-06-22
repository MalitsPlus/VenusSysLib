import pcj from "./PhotoContestSection.json"

type SkillImpl = (skill: LiveSkill) => [number, string]

export const VocalUp: SkillImpl = (skill: LiveSkill) => {
  return [1, "vocal up impl"]
}

export const DanceUp: SkillImpl = (skill: LiveSkill) => {
  return [2, "dance up impl"]
}

export type Skill = {
  id: string,
  name: string,
}

export type UserSkill = Skill & {
  level: number,
}

export type LiveSkill = UserSkill & {
  beat: number,
}

const masterSkill: Skill = pcj
const userSkill: UserSkill = {
  ...masterSkill,
  level: 54,
};
const liveSkill: LiveSkill = {
  ...userSkill,
  beat: 3,
};

function implSkill(flag: number): SkillImpl {
  switch (flag) {
    case 1:
      return VocalUp
    case 2:
      return DanceUp
    default:
      break
  }
}
let flag = 2
let [n, s] = implSkill(flag)(liveSkill)
console.log(n)
console.log(s)
