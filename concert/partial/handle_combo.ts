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
  switch (flag) {
    case ComboType.Break:
      this.current.userStatuses.forEach(x => x.combo = 0)
      break
    case ComboType.AddAlly:
      this.current.getUserStatus(1).combo += 1
      break
    case ComboType.AddOpponent:
      this.current.getUserStatus(2).combo += 1
      break
    case ComboType.AddBoth:
      this.current.userStatuses.forEach(x => x.combo += 1)
      break
    case ComboType.KeepAllyBreakOpponent:
      this.current.getUserStatus(2).combo = 0
      break
    case ComboType.KeepOpponentBreakAlly:
      this.current.getUserStatus(1).combo = 0
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
