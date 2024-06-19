const pipeFix = require("./kata-15")
test("pipeFix handles a typical case", () => {
  expect(pipeFix([1, 3, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test("pipeFix handles a single element array", () => {
  expect(pipeFix([5])).toEqual([5])
})

test("pipeFix handles already consecutive numbers", () => {
  expect(pipeFix([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

test("pipeFix handles missing numbers in the middle", () => {
  expect(pipeFix([2, 4, 7])).toEqual([2, 3, 4, 5, 6, 7])
})

test("pipeFix handles negative numbers", () => {
  expect(pipeFix([-3, -1, 0, 2])).toEqual([-3, -2, -1, 0, 1, 2])
})

test("pipeFix handles an empty array", () => {
  expect(pipeFix([])).toEqual([])
})
