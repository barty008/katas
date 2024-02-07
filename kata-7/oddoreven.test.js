const evenOrOdd = require("./oddoreven")

describe("evenOrOdd ()", () => {
  test("should return even", () => {
    const input = 4
    const result = evenOrOdd(input)
    const expected = "even"
    expect(result).toBe(expected)
  })
  test("should return even or odd depending on the number input", () => {
    const input = 7
    const result = evenOrOdd(input)
    const expected = "odd"
    expect(result).toBe(expected)
  })
})
