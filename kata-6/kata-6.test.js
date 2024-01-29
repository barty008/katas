const bmi = require("./kata-6")

describe("bmi ()", () => {
  test("will return weight and height into the number of a bmi", () => {
    const weightInput = 80
    const heightInput = 1.8
    const result = bmi(weightInput, heightInput)
    const expected = "Normal"
    expect(result).toBe(expected)
  })
})
