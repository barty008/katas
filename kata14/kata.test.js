const areYouPlayingBanjo = require("./kata14")

describe("are you playing", () => {
  test("starts with lowercase r", () => {
    const name = "ricky"
    const expected = name + " plays banjo"
    const actual = areYouPlayingBanjo(name)
    expect(actual).toBe(expected)
  })
  test("starts with uppercase R", () => {
    const name = "Ricky"
    const expected = name + " plays banjo"
    const actual = areYouPlayingBanjo(name)
    expect(actual).toBe(expected)
  })
  test("starts not with r", () => {
    const name = "James"
    const expected = name + " does not play banjo"
    const actual = areYouPlayingBanjo(name)
    expect(actual).toBe(expected)
  })
})
