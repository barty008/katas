const { number } = require("./katas")

describe("kata tests", () => {
  test("should add an index", () => {
    const input = ["a", "b", "c"]
    const output = number(input)
    expect(output).toEqual(["1 : a", "2 : b", "3 : c"])
  })
})
