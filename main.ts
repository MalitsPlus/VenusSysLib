
type TestType = {
  v1: number
  v2: string
  fn: (this: TestType, arg1: number) => string
}

const t: TestType = {
  v1: 1,
  v2: "textext",
  fn(this: TestType , arg1: number) {
    return `${this.v2}: ${arg1}`
  }
}

console.log(t.fn(55))
