function positiveSum(arr) {
  const postiveNum = []

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]
    if (number >= 1) {
      postiveNum.push(number)
    }
  }
  const result = postiveNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  return result
}

module.exports = positiveSum
