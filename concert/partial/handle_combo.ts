import { Concert } from "../concert";

export function handleCombo(
  this: Concert,
  flag: 0 | 1 | 2 | 99,
) {
  // FIXME: 是否存在某一方断连某一方继续的情况
  switch (flag) {
    case 0:
      this.current.userStatuses.forEach(x => x.combo = 0)
      break
    case 1:
      this.current.getUserStatus(1).combo += 1
      break
    case 2:
      this.current.getUserStatus(2).combo += 1
      break
    case 99:
      this.current.userStatuses.forEach(x => x.combo += 1)
      break
  }
}
