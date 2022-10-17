
export function logIdNotFound(_type: string, id: string): undefined {
  console.error(`[ID Cannot Be Found] Type '${_type}', ID '${id}' not found.`)
  return undefined
}