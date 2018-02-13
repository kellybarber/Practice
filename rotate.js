function rotate(array, number) {

  let rotateStart  = array.length - number
  let rotatedArray = []

  array.forEach((item, index) => {
    if (index !== rotateStart) {
      rotatedArray.push(item)
    } else {
      rotatedArray.unshift(item)
    }
  })

  return rotatedArray

}

rotate([1, 2, 3, 4, 5], 1)
console.log(rotate([1, 2, 3, 4, 5], 1))
