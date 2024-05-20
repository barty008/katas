const positiveSum = require("./kata-11") //

test("sums positive numbers in an array", () => {
  expect(positiveSum([1, -4, 7, 12])).toBe(20)
  expect(positiveSum([-1, -2, -3, -4])).toBe(0)
  expect(positiveSum([0, 0, 0, 0])).toBe(0)
  expect(positiveSum([1, 2, 3, 4, 5])).toBe(15)
  expect(positiveSum([-1, 2, 3, -4, 5])).toBe(10)
})
