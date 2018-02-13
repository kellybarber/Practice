function reverseWords(words) {

  let reverseArray = []

  words.split(' ').forEach((word) => { reverseArray.unshift(word) })

  return reverseArray.join(' ')

}

reverseWords("foo bar baz")
console.log(reverseWords("foo bar baz"));
