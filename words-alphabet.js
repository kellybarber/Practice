function getAlphabeticWordCount(words) {

  let alphabet      = "abcdefghijklmnopqrstuvwxyz".split('')
  let alphabetCount = {}

  alphabet.forEach((letter) => {
    alphabetCount[letter] = 0
  })

  words.split(' ').forEach((word) => {
    let firstLetter = word[0].toLowerCase()
    alphabetCount[firstLetter] += 1
  })

  return alphabetCount

}

getAlphabeticWordCount("Adam went to the wood store with Alex Anchovy")
