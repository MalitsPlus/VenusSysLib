
export function getTriggerLastNum(
  triggerId: string
): number | undefined {
  let matched = triggerId.match(/\d+$/)
  if (matched) {
    return +matched[matched.length - 1]
  }
  return undefined
}
