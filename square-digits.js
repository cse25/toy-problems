const squareDigits = (num) => {
  let string = num.toString()
  let results = []
  for (let i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i]
  }
  
  return Number(results.join(''));
}

squareDigits(345) // 91625
