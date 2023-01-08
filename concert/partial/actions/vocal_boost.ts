import { VocalBoostGrade } from "../../consts/eff_grades";
import { Action } from "./action";
import { v4 as uuidv4 } from "uuid"

export const vocalBoost: Action = ({
  concert,
  efficacy,
  targetIndexes,
  sourceIndex,
  sourceSkillIndex,
  isBeforeBeat,
}) => {
  // 计算 value，获取 grade，maxGrade
  // 注意有不能这样获取的情况
  const effInfo = {
    value: VocalBoostGrade[efficacy.grade],
    grade: efficacy.grade,
    maxGrade: efficacy.maxGrade,
  }
  // 对每个目标适用效果
  targetIndexes.forEach(target => {
    const cardStat = concert.current.getCardStatus(target)
    cardStat?.effects.push({
      id: uuidv4(),
      efficacyType: efficacy.type,
      grade: effInfo.grade,
      maxGrade: effInfo.maxGrade,
      value: effInfo.value,
      remain: efficacy.duration,
      isInstant: efficacy.isInstant,
      include: isBeforeBeat,
      sourceIndex: sourceIndex,
      sourceSkillIndex: sourceSkillIndex,
    })
    // 刷新属性值
    cardStat?.refreshParam("vocal")
  })
  return effInfo
}
