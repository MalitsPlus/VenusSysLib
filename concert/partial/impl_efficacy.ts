import { getSetting } from "../../db/repository/setting_repository";
import { SkillEfficacyType } from "../../types/proto/proto_enum";
import { WapSkillEfficacy } from "../../types/wap/skill_waps";
import { Concert } from "../concert";
import { typeOf } from "./actions/action";
import { danceUp } from "./actions/dance_up";

export function implementEfficacy(
  this: Concert,
  efficacy: WapSkillEfficacy,
  targetIndexes: number[],
  sourceIndex: number,
  sourceSkillIndex: number,
  isBeforeBeat: boolean,
): {
  value: number,
  grade: number,
  maxGrade: number,
  } {
  // 计算效果 value （如果需要）
  // 计算或获取 grade, maxGrade 
  // 调整 CardStatus (三围, stamina, 追加或修改 effects)
  return typeOf(efficacy.type)({
    concert: this,
    efficacy: efficacy,
    targetIndexes: targetIndexes,
    sourceIndex,
    sourceSkillIndex,
    isBeforeBeat,
  })
}
