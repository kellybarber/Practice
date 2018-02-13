function removeDuplicates(array) {

  finalArray = []

  array.forEach((number) => {
    let exists = false
    finalArray.forEach((finalNumber) => {
      if (number === finalNumber) {
        exists = true
      }
    })
    if (!exists) { finalArray.push(number) }
  })

  return finalArray
}

removeDuplicates([890, 46, 46, 999, 6, 72, 880, 6])
console.log(removeDuplicates([890, 46, 46, 999, 6, 72, 880, 6]));
