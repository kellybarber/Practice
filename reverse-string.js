function reverseString(string) {

  let reversedArray = []

  string.split('').forEach((letter) => {
    reversedArray.unshift(letter)
  })

  return reversedArray.join('')

}

reverseString("word")
