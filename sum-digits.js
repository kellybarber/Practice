function sumDigits(number) {
  let sum = 0
  Math.abs(number).toString().split('').forEach((digit) => { sum += parseInt(digit) })
  return sum
}

sumDigits(10)
sumDigits(99)
sumDigits(-35)
