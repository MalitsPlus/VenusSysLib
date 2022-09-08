import { SkillEfficacyType } from "../types/proto/proto_enum"
import { Str2EfficacyType } from "./consts/chart_consts"

export function getTargetStatusType(
  targetId: string
): [SkillEfficacyType, number] | undefined {
  let matched = targetId.match(/target-status-(\w+)-(\d)/)
  if (matched) {
    let targetStatusStr = matched[1]
    let effectType = Str2EfficacyType[targetStatusStr]
    let amount = +matched[2]
    return [effectType, amount]
  }
  return undefined
}

export function getTargetLastNum(
  targetId: string
): number | undefined {
  let matched = targetId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

export function getTargetSecondLastNum(
  targetId: string
): number | undefined {
  let matched = targetId.match(/\d+(?=-\d+$)/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}