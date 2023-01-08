import { Concert } from "../concert";

/**
 * 
 * @param this 
 * @param flag 0: break; 1: ally; 2: opponent; 11: 
 */
export function handleCombo(
  this: Concert,
  flag: ComboType,
) {
  const ally = this.current.getUserStatus(1)
  const opnt = this.current.getUserStatus(2)
  switch (flag) {
    case ComboType.Break:
      this.current.userStatuses.forEach(x => x.combo = 0)
      break
    case ComboType.AddBoth:
      this.current.userStatuses.forEach(x => x.combo += 1)
      break
    case ComboType.AddAlly:
      if (ally) ally.combo += 1
      break
    case ComboType.AddOpponent:
      if (opnt) opnt.combo += 1
      break
    case ComboType.KeepAllyBreakOpponent:
      if (opnt) opnt.combo = 0
      break
    case ComboType.KeepOpponentBreakAlly:
      if (ally) ally.combo = 0
      break
    default:
      break
  }
}

export enum ComboType {
  Break,
  AddBoth,
  AddAlly,
  AddOpponent,
  KeepBoth,
  KeepAllyBreakOpponent,
  KeepOpponentBreakAlly,
}
