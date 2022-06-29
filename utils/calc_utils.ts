
export function calcParam(
  paramValue: number,
  permil: number,
  rarityBonusPermil: number
): number {
  return Math.floor(
    Math.floor(paramValue * permil / 1000)
    * rarityBonusPermil / 1000
  )
}

export function calcBuffedParam(
  base: number,
  mul: number,
  add: number,
  isPermil?: boolean
): number {
  var divisor = 1
  if (isPermil) {
    divisor = 1000
  }
  return Math.floor(base * mul / divisor) + add
}
