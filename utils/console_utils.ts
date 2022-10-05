
export function logIdNotFound(_type: string, id: string): undefined {
  console.error(`Type '${_type}', ID '${id}' not found.`)
  return undefined
}