
export function getEffLastNum(
  efficacyId: string
): number | undefined {
  let matched = efficacyId.match(/\d+$/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}

export function getFixStaminaRecoveryValue(
  efficacyId: string
): number | undefined {
  let matched = efficacyId.match(/(?<=fix_stamina_recovery-)\d+/)
  if (matched) {
    return +matched[0]
  }
  return undefined
}