import { getSetting } from "../../db/repository/setting_repository";
import { WapSkillEfficacy } from "../../types/wap/skill_waps";
import { Concert } from "../concert";

export function implementEfficacy(
  this: Concert,
  efficacy: WapSkillEfficacy,
  targetIndexes: number[],
): {
  value: number,
  grade: number,
  maxGrade: number,
} {
  // 调整 CardStatus (三围, stamina, 追加或修改 effects)
  // 计算效果 value （如果需要）
  // 计算或获取 grade, maxGrade 

  const setting = getSetting()

  // case: score getting
  if (setting.skillEfficacyTypeScoreList.includes(efficacy.type)) {
    return { value: 0, grade: 0, maxGrade: 0 }
  }

  // case: strength lasting
  if (setting.skillEfficacyTypeStrengthList.includes(efficacy.type)) {
    if ()
  }

}
