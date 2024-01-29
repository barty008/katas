const rowSumOddNumbers = require("./kata-4")

describe("rowOddNums ()", () => {
  test("Calculate the sum of the numbers in the nth row", () => {
    const input = 42
    const expected = 74088
    const result = rowSumOddNumbers(input)
    expect(result).toBe(expected)
  })
})
