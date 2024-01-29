const repeatStr = require("./kata-5")

describe("repeat string", () => {
  test("repart the string number of times as per second parameter", () => {
    const numberInput = 4
    const stringInput = "james"
    const result = repeatStr(numberInput, stringInput)
    const expected = "jamesjamesjamesjames"
    expect(result).toBe(expected)
  })
  test("repart the string number of times as per second parameter", () => {
    const numberInput = 3
    const stringInput = "*"
    const result = repeatStr(numberInput, stringInput)
    const expected = "***"
    expect(result).toBe(expected)
  })
})
