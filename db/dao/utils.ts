import { getRemoteDb } from "./api"
import { DATA_ENV } from "./env"

export function isAllInitialzed(
  ...items: unknown[]
) {
  return items.every(it => it !== undefined)
}

export const getRaw = async <T>(name: string): Promise<T> => {
  const raw = await (async () => {
    if (DATA_ENV === "remote") {
      return await getRemoteDb(name)
    } else {
      console.debug("dynamic importing...")
      const obj = await import(`../../database/${name}.json`)
      return obj.default
    }
  })()
  return raw as T
}