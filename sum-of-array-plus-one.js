// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

function plusOneSum(array) {
  return array.map(function(num) {
    return num + 1
  }).reduce(function(a,b) {
    return a + b
  })
}

plusOneSum([1,2,3,4])
