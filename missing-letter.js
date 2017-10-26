
function findMissingLetter(array) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  for (let letter in alphabet) {
    if (alphabet[letter] !== array[letter].toUpperCase()) {
      return alphabet[letter]
    }
  }

}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));

// findMissingLetter(['a','b','c','d','f'])
// e
// findMissingLetter(['O','Q','R','S'])
// P
