import { SkillEfficacyType } from "../types/proto/proto_enum"
import { Str2EfficacyGroup, Str2EfficacyType } from "./consts/chart_consts"

export function getTriggerLastNum(
  triggerId: string
): number | undefined {
  let matched = triggerId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

function getTriggerLastStr(
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
): SkillEfficacyType {
  let flag = getTriggerLastStr(triggerId)
  if (flag) {
    let type = Str2EfficacyType[flag]
    return type
  }
  return SkillEfficacyType.Unknown
}

export function getTriggerStatusGroup(
  triggerId: string
): SkillEfficacyType[] | undefined {
  let flag = getTriggerLastStr(triggerId)
  if (flag) {
    let group = Str2EfficacyGroup[flag]
    return group
  }
}
