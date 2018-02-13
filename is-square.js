var isSquare = function(n){
  const root = Math.floor(Math.sqrt(n))
  if (root*root===n) { return true } else { return false }
}

// isSquare(-1) // => false
// isSquare( 3) // => false
// isSquare( 4) // => true
// isSquare(25) // => true
// isSquare(26) // => false
console.log(isSquare(70))
console.log(isSquare(82))
