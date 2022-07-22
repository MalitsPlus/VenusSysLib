## P1 技能流程
1. 判断该技能是否能在 P1 发动。
2. 判断是角色技能还是 Live 固定技能。
- 角色技能特有 

  3. 判断同一张卡本回合是否已经发动过技能。  
  4. 判断是否处于 SkillImpossible 状态。  

5. 判断是否还有剩余次数。
6. 判断是否处于 CT。
7. 掷骰子。
- 角色技能特有 

  8. 计算消耗体力，判断体力是否充足。

9. 获取 `TriggerIndexes`，判断是否满足触发。
> 至此确定技能发动
10. 判断是否 Critical。
11. 计算消耗体力。（与 8 重复，考虑优化）
12. 创建 `ActSkill`，填充除 `details` 以外的所有信息。
13. 遍历 `SkillDetails`。
    1. 获取 `detailTriggeredIndexes`，判断是否满足触发。
    2. 获取 `targetIndexes`。
    3. 发动技能。
        1. xxx
        2. xxx
    4. 向 `ActSkill` 的 `details` push 当前 skillDetail 发动的效果。
14. 设置 `skillStatus` 中 CT 为最大。
15. 如果 `skillStatus` 有 remainCount，使其减 1。
