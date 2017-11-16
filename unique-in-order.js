function uniqueInOrder(iterable) {

  return iterable.split('').map((letter, index) => {
    if ( iterable[index] === letter ) return letter 
  })

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// ['A','B','C','D','A','B']
