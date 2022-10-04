import { Concert } from "../concert";

export function handleCombo(
  this: Concert,
  flag: 0 | 1 | 2 | 99,
) {
  switch (flag) {
    case 0:
      this.current.userStatuses.forEach(userStat => {
        userStat.userIndex
      })
  }
}