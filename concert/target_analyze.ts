import { SkillEfficacyType } from "../types/proto/proto_enum"
import { Str2EfficacyType } from "./consts/chart_consts"

export function getTargetStatusType(
  targetId: string
): [SkillEfficacyType, number] | undefined {
  const matched = targetId.match(/target-status-(\w+)-(\d)/)
  if (matched) {
    const targetStatusStr = matched[1]
    const effectType = Str2EfficacyType[targetStatusStr]
    const amount = +matched[2]
    return [effectType, amount]
  }
  return undefined
}

export function getTargetLastNum(
  targetId: string
): number | undefined {
  const matched = targetId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

export function getTargetSecondLastNum(
  targetId: string
): number | undefined {
  const matched = targetId.match(/\d+(?=-\d+$)/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}