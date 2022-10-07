// write a function to convert a temperature given in Farenheit to Celsius
// (Degree symbol = option shift 8)

// F to C conversion = F-32*5/9=C

let Farenheit = -40

function tempConvert(Farenheit) {
  return(Farenheit - 32) * .5556
}

const degC = tempConvert(Farenheit)

console.log(`${Farenheit}°F is ${degC.toFixed(0)}°C`);

