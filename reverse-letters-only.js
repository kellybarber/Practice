function reverseLetter(string) {
  let letterArray = []
  string.split('').forEach((item) => { if (item.match(/[a-z]/)) letterArray.unshift(item) })
  return letterArray.join('')
}

reverseLetter("krishan") // "nahsirk"
reverseLetter("ultr53o?n") // "nortlu"
reverseLetter("ab23c") //"cba"
reverseLetter("krish21an") // "nahsirk"
