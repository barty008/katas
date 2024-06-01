const opposite = require("./kata12")

test("returns the opposite of a positive number", () => {
  expect(opposite(10)).toBe(-10)
})

test("returns the opposite of a negative number", () => {
  expect(opposite(-10)).toBe(10)
})
