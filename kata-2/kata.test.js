const order = require("./kata-2")

describe("order()", () => {
  test.only("order function orders strings as per number index", () => {
    const input = "is2 Thi1s T4est 3a"
    const output = order(input)
    expect(output).toEqual("Thi1s is2 3a T4est")
  })
})
