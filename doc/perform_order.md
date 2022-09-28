# P技能发动流程

> 本部分描述 `Concert.performCharaPSkillsPhase1` 和 `Concert.performStagePSkillsPhase1` 的业务逻辑。

`@ Concert._validateThenPerformPSkill`

1. 判断是否为当前技能的发动时间点（p1 or p2）。
2. 判断是角色技能还是 Live 固定技能。
    - 角色技能
        1. 判断同一张卡本回合是否已经发动过技能。
        2. 判断是否处于 SkillImpossible 状态。
        3. 判断是否处于 CT。
        4. 判断是否还有剩余次数。
    - Live 固定技能
        1. 判断是否处于 CT。
        2. 判断是否还有剩余次数。

`<<<<< Concert._validateThenPerformPSkill`

`@ Concert._performPSkill`

1. 掷骰子（概率无关技能的发动率是 100%）。
2. 判断是角色技能还是 Live 固定技能。
    - 角色技能
        1. 计算消耗体力，判断体力是否充足。
3. 获取 `TriggerIndexes`，判断是否满足触发。  
***至此确定技能发动***  
4. 判断是否 Critical。
5. 计算消耗体力。（与前置步骤重复，考虑优化）
6. 创建 `ActSkill`，填充除 `details` 以外的所有信息。
7. 遍历 `SkillDetails`。
    1. 获取 `detailTriggeredIndexes`，判断是否满足触发。
    2. 获取 `targetIndexes`。
    3. 发动技能。
        > [转别纸](skill_perform.md)
    4. 向 `ActSkill` 的 `details` 填充（push）当前 skillDetail 发动的效果。
8. 设置 `skillStatus` 中 CT 为最大。
9. 如果 `skillStatus` 有 remainCount，使其减 1。

`<<<<< Concert._performPSkill`