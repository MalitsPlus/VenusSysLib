import {
  ActSkill,
  CardStatus,
  Chart, Live, LiveCard, SkillStatus
} from "../types/live_types";
import { SkillLevel } from "../types/proto/proto_master";
import { WapSkill } from "../types/wrapper_types";

function doPerform() {

}

export function performP(
  current: Chart
) {

}

export function performASP(
  actSkill: ActSkill,
  current: Chart,
  live: Live,
  card: LiveCard,
  cardStatus: CardStatus,
  skill: WapSkill,
  skillLevel: SkillLevel,
  skillStatus: SkillStatus,
) {
  // complete actSkill
  // change current.cardStatuses, except skillStatus
  // or, skillStatus here
  // ❌ no, do it in concert.performASPSkill
}
