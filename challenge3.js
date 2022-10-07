// Given a liquid measure in ounces, convert to pints
// e.g. "16oz is 1 pint"

let oz = 24

function getPints(oz) {
  return(oz / 16)
}

const pint = getPints(oz)

console.log(`${oz} ounces is ${pint} pints`); 