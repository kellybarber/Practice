function longest(s1, s2) {
  // your code

  let letters         = []
  let distinctLetters = new Set()
  let output          = ''

  function pushLetter(word) {
    for (let letter of word) {
      letters.push(letter)
    }
  }
  pushLetter(s1), pushLetter(s2)

  letters.sort()

  letters.forEach((letter) => {
    distinctLetters.add(letter)
  })

  for (let letter of distinctLetters) {
    output += letter
  }

  return output

}

longest("aretheyhere", "yestheyarehere")
// "aehrsty"



const longestOne = (s1, s2) => { return Array.from(new Set(s1 + s2)).sort().join('') }

console.log(longestOne("aretheyhere", "yestheyarehere"))



function longestTwo(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('')
}

console.log(longestTwo("aretheyhere", "yestheyarehere"))
