import { Concert } from "../concert";

export function rotateRemains(
  this: Concert,
) {
  this.current.cardStatuses.forEach(cardStat => {
    cardStat.effects.forEach(eff => {
      if (eff.remain) {
        eff.remain -= 1
      } 
    })
  })
}
