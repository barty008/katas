const getAge = require("./kata-9")
describe("getAge", () => {
  test("returns the correct age when a valid input is provided", () => {
    expect(getAge("35 years old")).toBe(35)
    expect(getAge("50 years old")).toBe(50)
  })

  test("returns NaN when the input is not in the expected format", () => {
    expect(getAge("not a valid input")).toBeNaN()
  })
})
