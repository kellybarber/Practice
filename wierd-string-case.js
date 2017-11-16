function toWeirdCase(string){
  let weirdCase = ''

  string.split('').forEach((letter, index) => {
    if (index % 2 === 0) {
      weirdCase += letter.toUpperCase()
    } else {
      weirdCase += letter.toLowerCase()
    }
  })

  return weirdCase

}


// console.log(toWeirdCase('This is a test'));



function toWeirdCase(string){
  return string.split(' ').map((word) => {
    return word.split('').map((letter, index) => {
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}


console.log(toWeirdCase('This is a test'));
