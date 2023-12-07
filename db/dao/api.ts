let _url: string | undefined
let _sakura: string | undefined

export function initApi({
  url,
  sakura
}: {
  url: string,
  sakura: string,
}) {
  _url = url
  _sakura = sakura
}

export async function getRemoteDb<T>(name: string): Promise<T> {
  if (!!!_url || !!!_sakura) {
    throw new Error("API endpoint and sakura must be given")
  }

  if (!/^[a-zA-Z]+$/g.test(name)) {
    throw new Error(`Bad DB name: ${name}`)
  }

  const endpoint = new URL(name, _url)
  console.debug(`fetching...${name}`)
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "User-Agent": "VenusSysLib",
      "X-Sakura": _sakura,
      "Accept-Encoding": "br, gzip",
    },
  })

  if (response.status !== 200) {
    throw new Error(`HTTP Error: ${response.status}.`)
  }

  const data = await response.json()
  return data as T
}
