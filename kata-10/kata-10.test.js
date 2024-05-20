const removeChar = require("./kata-10") // Replace with your module's path

test("removes the first and last character of a string", () => {
  expect(removeChar("eloquent")).toBe("loquen")
  expect(removeChar("country")).toBe("ountr")
  expect(removeChar("person")).toBe("erso")
  expect(removeChar("a")).toBe("")
  expect(removeChar("ab")).toBe("")
})
