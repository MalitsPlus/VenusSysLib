import { getCritical } from "../../utils/chart_utils";
import { Concert } from "../concert";

export function performBeat(
  this: Concert,
) {
  this.current.beats = []
  this.current.cardStatuses.forEach(cardStat => {
    this.order += 1
    this.current.beats?.push({
      cardIndex: cardStat.cardIndex,
      order: this.order,
      score: 0,
      isCritical: getCritical(cardStat.technique, this.live.quest.difficultyLevel),
    })
  })
}
