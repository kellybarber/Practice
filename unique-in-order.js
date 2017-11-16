function uniqueInOrder(iterable) {

  return iterable.split('').map((letter) => {
    return letter
  })

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// ['A','B','C','D','A','B']
