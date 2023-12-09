import { Setting } from "../../types/proto/proto_master"
import { getRaw, isAllInitialzed } from "./utils"
import * as StaticSettings from "../../database/Setting.json"
import { updateGameSetting } from "../repository/setting_repository"
import { Unpromise } from "./typeUtils"

let rawSetting: Setting[]

async function initSetting() {
  // if (isAllInitialzed(rawSetting)) {
  //   return
  // }
  const results = await Promise.all([
    getRaw<Setting[]>("Setting"),
  ])
  setInitSetting(results)
  return results
}

function setInitSetting(data: Unpromise<ReturnType<typeof initSetting>>) {
  if (data === undefined) {
    throw new Error("Initialize Card failed")
  }

  rawSetting = data[0]
  updateGameSetting(rawSetting[0])
}

const getRawSetting = (): Setting => {
  if (rawSetting === undefined) {
    return StaticSettings[0]
  }
  return rawSetting[0]
}

export {
  getRawSetting,
  initSetting,
  setInitSetting,
}