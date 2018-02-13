function secondLargest(array) {

  let largest = array[0]
  let second  = -1

  array.forEach((number) => {
    if (number > largest) {
      largest = number
    }
  })

  array.forEach((number) => {
    if (number > second && number !== largest) {
      second = number
    }
  })

  return second

}


secondLargest([890, 46, 46, 999, 6, 72, 880, 6])
console.log(secondLargest([890, 46, 46, 999, 6, 72, 880, 6]));
