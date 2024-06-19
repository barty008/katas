function pipeFix(numbers) {
  const result = []
  const min = numbers[0]
  const max = numbers[numbers.length - 1]

  for (let i = min; i <= max; i++) {
    result.push(i)
  }

  return result
}
pipeFix([1, 2, 3, 5, 6, 8, 9])
module.exports = pipeFix
