const squareSum = (array) => {
  return array.map(num => {
    return num * num
  }).reduce((a,b) => {
    return a + b
  })
}

squareSum([1,2,3,4]) // 30
