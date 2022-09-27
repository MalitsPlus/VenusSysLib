import { Quest } from "../../types/proto/proto_master"
import { logIdNotFound } from "../../utils/console_utils"

import protoQuest from "../../database/Quest.json"

const rawQuest: Quest[] = protoQuest

const getRawQuest = (
  id: string
): Quest | undefined => {
  return rawQuest.find(it => it.id === id)
    ?? logIdNotFound("Quest", id)
}
