function titleCase(title, minorWords) {

  let final = ''

  if (minorWords) {
    title.toLowerCase().split(' ').forEach((word) => {
      minorWords.toLowerCase().split(' ').forEach((minorWord) => {
        if (minorWord === word) {
          final += ` ${word} `
        } else {
          let wordArray = word.split('')
          wordArray[0].toUpperCase()
          let capitalizedWord = wordArray.join('')
          console.log(capitalizedWord);
        }

      })
    })

  } else {

  }

  // console.log(final);

}


titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
