import { Setting } from "../../types/proto/proto_master"
import { getRawSetting } from "../dao/setting_dao"

const getSetting = (): Setting => {
  return getRawSetting()
}

export function updateGameSetting(newSetting: Setting) {
  GameSetting = newSetting
}

export let GameSetting = getSetting()
