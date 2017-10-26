function spinWords(words) {
  let wordArray = words.split(' ')
  let withReverse = ''

  wordArray.forEach((word, index) => {
    if (word.length >= 5) {
      withReverse += word.split('').reverse().join('')
    } else {
      withReverse += word
    }

    if (index !== wordArray.length - 1) {
      withReverse += ' '
    }

  })

  return withReverse

}

spinWords("Hey fellow warriors")


//iterm2 zsh
