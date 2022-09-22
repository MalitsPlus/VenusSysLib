# 开放 IO

## 函数&方法
simulate(questId, transUserDeck, transOppoDeck?): Live
> simulate 为函数暂定名。

## 输入

共 3 个可接受参数。

- questId
  - 类型：string
  - 说明：字面意思
- transUserDeck
  - 类型：
    ```ts
    {
      cards: {
        index: number
        cardId: string
        level: number
        rarity: number
        skillLevel1: number
        skillLevel2: number
        skillLevel3: number
        isArbitrary: boolean
        vocal: number
        dance: number
        visual: number
        stamina: number
        mental: number
        technique: number
      }[],
      name?: string
    }
    ```
  - 说明：用户编成卡组，应包含 5 个 cards
- transOppoDeck?
  - 类型：同上方 `transUserDeck`
  - 说明：可为空。对手编成卡组。为空时表示非对战 Live。

## 输出

- Live
  - 类型：
    ```ts
    {
      charts: Chart[],
      quest: WapQuest,
      liveDeck: LiveDeck,
      isBattle: boolean,
      exSkills?: WapSkill[],
      yells?: any[], // TODO: implementation
    }
    ```
  - 说明：Live 的相关信息。其中 charts 包含整个模拟 Live 的输出信息（各个节点的技能发动情况等）。
