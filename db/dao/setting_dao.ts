import protoSetting from "../../database/Setting.json"
import { Setting } from "../../types/proto/proto_master"

const rawSetting: Setting[] = protoSetting

const getRawSetting = (): Setting => {
  return rawSetting[0]
}

export {
  getRawSetting,
}