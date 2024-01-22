/*
    KATA 1
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

const number = function (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(`${1 + i} : ${arr[i]}`)
  }
  return result
}

module.exports = { number }
