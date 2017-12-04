function binaryArrayToNumber(arr) {
  let decimal = 0
  arr.reverse().forEach((item, index) => {
    switch (index) {
      case 0:
        decimal += item
        break
      case 1:
        decimal += item * 2
        break
      case 2:
        decimal += item * 4
        break
      case 3:
        decimal += item * 8
        break
      default: console.log('Not Handled')
    }
  })
  return decimal
}

binaryArrayToNumber([0,0,1,0])
// 2
binaryArrayToNumber([0,0,0,1])
// 1
binaryArrayToNumber([1,1,1,1])
// 15
binaryArrayToNumber([0,1,1,0])
// 6
binaryArrayToNumber([1,0,1,0])
// 10
console.log(binaryArrayToNumber([1,0,1,0]));
