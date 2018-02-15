//
// function findLargest(array) {
//
//   let largest = array[0]
//   let second
//
//   array.forEach((number) => {
//     if (number > largest) {
//       largest = number
//     }
//   })
//
//   array.forEach((number) => {
//     if (second === undefined && number !== largest) {
//       second = number
//     }
//     if (number !== largest && number > second) {
//       second = number
//     }
//   })
//
//   return second
//
// }


function findLargest(array) {

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


console.log(findLargest([890, 46, 46, 999, 6, 72, 880, 6]));
console.log(findLargest([700, 31, 32, 700, 5, 23, 680, 0]));
