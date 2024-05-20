function removeChar(string) {
  const arr = string.split("")
  arr.shift()
  arr.pop()
  return arr.join("")
}

module.exports = removeChar
