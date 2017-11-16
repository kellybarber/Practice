function uniqueInOrder(iterable) {

  return iterable.toString().split('').map((letter, index) => {
    return iterable[index+1] !== letter ? letter : ''
  }).filter((letter) => { return letter })

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder(182743));
