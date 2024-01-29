const descending = require("./kata-3")

describe("descending order", () => {
  test("numbers need to return as single integer in descending order", () => {
    // setup
    const input = 123456789

    // exercise
    const expected = 987654321

    // verify
    const result = descending(input)

    expect(result).toBe(expected)
  })
})
