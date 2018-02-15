function findLargest (array) {

  let largest = array[0]
  let second  = array[0]

  array.forEach((number) => {
    if (number > largest) {
      largest = number
    } else if (number > second) {
      second = number
    }
  })

  return second

}

findLargest([890, 46, 46, 999, 999, 6, 72, 880, 6])
console.log(findLargest([890, 46, 46, 999, 6, 72, 880, 6]));
