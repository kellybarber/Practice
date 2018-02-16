function findShort(string) {
  let shortest = string
  string.split(' ').forEach((word) => { if (word.length < shortest.length) { shortest = word } })
  return shortest.length
}


findShort("bitcoin take over the world maybe who knows perhaps") // 3
findShort("turns out random test cases are easier than writing out basic ones") // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
