const squareSum = require("./kata-8")

test("squareSum function returns the correct sum of squared numbers", () => {
  expect(squareSum([1, 2, 2])).toBe(9)
})

test("squareSum function returns 0 for an empty array", () => {
  expect(squareSum([])).toBe(0)
})

test("squareSum function returns the correct sum for negative numbers", () => {
  expect(squareSum([-1, -2, -3])).toBe(14)
})
