function duplicateCount(text){
  let textArray     = text.toLowerCase().split('')
  let noDuplicates  = {}
  let numDuplicates = 0

  textArray.forEach((letter) => {
    if (!noDuplicates[letter]) {
      noDuplicates[letter] = 1
    } else {
      noDuplicates[letter] += 1
    }
  })

  Object.keys(noDuplicates).forEach((letter) => {
    if (noDuplicates[letter] > 1) {
      numDuplicates += 1
    }
  })

  return numDuplicates

}

duplicateCount("aabbcde")
