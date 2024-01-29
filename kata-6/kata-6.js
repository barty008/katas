function bmi(weight, height) {
  const bmi = weight / (height * height)
  if (bmi <= 18.5) {
    return "Underweight"
  }
  if (bmi <= 25.0) {
    return "Normal"
  }
  if (bmi <= 30.0) {
    return "Overweight"
  }
  if (bmi > 30.0) {
    return "Obese"
  }
}
console.log(bmi(80, 1.8))
module.exports = bmi
