import { SkillEfficacyType, SkillTriggerType } from "../../types/proto/proto_enum";
import { Concert } from "../concert";
import { TriggerBeforeList } from "../consts/efficacy_list";

export function* preparePSkill(
  this: Concert,
  isBefore: boolean,
) {
  // stage skills
  for (const it of this.current.stageSkillStatuses ?? []) {
    if (!it.hasTimes()) {
      continue // 无剩余次数
    }
    if (it.coolTime) {
      continue // 在 CT 中
    }
    const stageSkill = this.live.quest.liveBonuses![it.skillIndex].skill
    if (isBefore) {
      if (!TriggerBeforeList.includes(stageSkill.trigger?.type ?? SkillTriggerType.Unknown)
        && it.used) {
        continue // 不在当前发动时间点（beat前）
      }
    }
    if (!isBefore) {
      if (TriggerBeforeList.includes(stageSkill.trigger?.type ?? SkillTriggerType.Unknown)) {
        continue // 不在当前发动时间点（beat后）
      }
    }
    yield {
      cardIndex: it.cardIndex,
      skillIndex: it.skillIndex,
    }
  }

  // characters p-skills
  for (const it of this.pSkills) {
    const cardStat = this.current.getCardStatus(it.cardIndex)
    if (!cardStat) {
      continue
    }
    const skillStat = cardStat.getSkillStatus(it.skillIndex)
    if (!skillStat.hasTimes()) {
      continue // 无剩余次数
    }
    if (skillStat.coolTime) {
      continue // 在 CT 中
    }
    // FIXME: P skill 不受不调影响
    // if (cardStat.getEffects(SkillEfficacyType.SkillImpossible, true).length) {
    //   continue // 不调中
    // }
    if (this.pSkillPerformed.some(performed =>
      performed.cardIndex === it.cardIndex // && performed.skillIndex === it.skillIndex
    )) {
      continue // 本回合已发动过P技能
    }
    const skill = this.liveDeck.getCard(it.cardIndex).getSkill(it.skillIndex)
    if (isBefore) {
      if (!TriggerBeforeList.includes(skill.trigger?.type ?? SkillTriggerType.Unknown)
        && (!!skill.trigger || skillStat.used)) {
        continue // 不在当前发动时间点（beat前）
      }
    }
    if (!isBefore) {
      if (TriggerBeforeList.includes(skill.trigger?.type ?? SkillTriggerType.Unknown)) {
        continue // 不在当前发动时间点（beat后）
      }
    }
    yield {
      cardIndex: it.cardIndex,
      skillIndex: it.skillIndex,
    }
  }
}
