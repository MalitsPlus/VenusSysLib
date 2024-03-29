import { SkillFailureType } from "../../types/proto/proto_enum";
import { calcActSkillPrivilege } from "../../utils/calc_utils";
import { Concert } from "../concert";

export default function determineActSkillPrivilege(
  this: Concert
) {
  if (this.actables.length < 1) {
    return
  }
  // use originalActPosition to determine attribute type
  const laneType = this.live.quest.getLaneType(this.current.originalActPosition)
  const privileges: {
    index: number
    power: number
  }[] = this.actables.map(({ index }) => {
    const card = this.liveDeck.getCard(index)
    const cardStat = this.current.getCardStatus(index)
    return {
      index: index,
      power: calcActSkillPrivilege(laneType, card, cardStat!)
    }
  })

  // sort privileges (higher first)
  privileges.sort((a, b) => b.power - a.power)

  this.live.customNotes?.forEach(customNote => {
    if (customNote.sequence === this.current.sequence
      && customNote.privilege === "opponent"
    ) {
      this.actables = this.actables.filter(x => x.index > 5)
      this.current.failureFlag = SkillFailureType.OpponentActivation
      return
    }
  })

  // if opponent wins, set failure flag
  if (privileges[0].index > 5) {
    this.current.failureFlag = SkillFailureType.OpponentActivation
  }

  this.actables = this.actables.filter(x => x.index === privileges[0].index)
  // TODO: display `power` to screen
}
