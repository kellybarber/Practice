function expandedForm(num) {

  let expandedNumber = ''

  num.toString().split('').forEach((digit, index, array) => {
    if (digit !== '0') {
      expandedNumber += digit + ('0'.repeat(array.length - (index+1)))
    }

    if (index !== array.length - 1 && digit !== '0') {
      expandedNumber += ' + '
    }

  })

  return expandedNumber

}

console.log(expandedForm(70304))
console.log(expandedForm(90000))
