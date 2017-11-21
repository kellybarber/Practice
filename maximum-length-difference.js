function lengthDifference(a1, a2) {
  let longest  = findLongest(a1, a2)
  let shortest = findShortest(a1, a2)

  function findLongest(a1, a2) {
    let longest = 0
    function perArray(array) {
      array.forEach((string) => {
        if (string.length > longest) {
          longest = string.length
        }
      })
    }
    perArray(a1)
    perArray(a2)
    return longest
  }

  function findShortest(a1, a2) {
    let shortest = a1[0].length
    function perArray(array) {
      array.forEach((string) => {
        if (string.length < shortest) {
          shortest = string.length
        }
      })
    }
    perArray(a1)
    perArray(a2)
    return shortest
  }

  return (longest - shortest)

}

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
lengthDifference(a1, a2)


// Top Solution

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(a1, a2))

// Expected 13
