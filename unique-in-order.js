function uniqueInOrder(iterable) {
  return iterable.split('').map((letter, index) => {
    return iterable[index+1] !== letter ? letter : ''
  }).filter(letter => { return letter })
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder(182743));

function uniqueInOrder(iterable) {
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder(988765))
