function order(inputString) {
  if (inputString === "") {
    return ""
  }

  const words = inputString.split(" ")
  const sortedWords = words.sort((a, b) => {
    const numA = parseInt(a.match(/\d/)[0])
    const numB = parseInt(b.match(/\d/)[0])
    return numA - numB
  })

  return sortedWords.join(" ")
}

module.exports = order
