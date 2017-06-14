const squareDigits = (num) => {
  let string = num.toString()
  let results = []
  for (let i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i]
  }
  
  return Number(results.join(''));
}

squareDigits(345) // 91625

const squareEveryDigit = (num) => {
  return parseInt(num.toString(10).replace(/\D/g, '0').split('').map(Number).map(x => x + x).join(''),10);
}

squareEveryDigit(448) // 8816
