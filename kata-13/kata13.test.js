const findMultiples = require("./kata13")
// findMultiples.test.js

test("finds multiples of 2 up to 6", () => {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6])
})

test("finds multiples of 3 up to 10", () => {
  expect(findMultiples(3, 10)).toEqual([3, 6, 9])
})

test("finds multiples of 5 up to 25", () => {
  expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25])
})

test("finds multiples of 1 up to 5", () => {
  expect(findMultiples(1, 5)).toEqual([1, 2, 3, 4, 5])
})

test("finds multiples of 7 up to 49", () => {
  expect(findMultiples(7, 49)).toEqual([7, 14, 21, 28, 35, 42, 49])
})
