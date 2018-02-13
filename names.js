function parseNames(names) {

  let firstLetters = []

  names.forEach((name) => {
    let letterExists = false
    firstLetters.forEach((letter) => {
      if (name[0] === letter) {
        letterExists = true
      }
    })
    if (letterExists === false) { firstLetters.push(name[0]) }
  })

  return firstLetters
}

let names = ["Adam", "Betsy", "Boop", "Dan", "Donald", "Obama"]
parseNames(names)
console.log(parseNames(names));
