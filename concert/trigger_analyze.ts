import { SkillEfficacyType } from "../types/proto/proto_enum"
import { str2EfficacyType } from "./consts/chart_consts"

export function getTriggerLastNum(
  triggerId: string
): number | undefined {
  let matched = triggerId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

export function getTriggerLastStr(
  triggerId: string
): string | undefined {
  let matched = triggerId.match(/\w+$/)
  if (matched) {
    return matched[0]
  }
  return undefined
}

export function getTriggerStatusType(
  triggerId: string
): SkillEfficacyType | undefined {
  let flag = getTriggerLastStr(triggerId)
  let type = str2EfficacyType[flag]
  return type
}
