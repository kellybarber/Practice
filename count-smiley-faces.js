function countSmileys(arr) {
  let validFaces = 0

  arr.forEach((face) => {
    if (face[0] === ':' || face[0] === ';') {
      if ((face.length === 3) && (face[1] === '' || face[1] === '~' || face[1] === '-')) {
        if (face[2] === 'D' || face[2] === ')') {
          validFaces += 1
        }
      } else if ((face.length === 2) && (face[1] === 'D' || face[1] === ')')) {
        validFaces += 1
      }
    }
  })

  return validFaces

}

countSmileys([':D',':~)',';~D',':)'])
countSmileys([':)',':(',':D',':O',':;'])
