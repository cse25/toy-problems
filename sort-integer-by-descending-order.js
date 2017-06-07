// Create a function that takes a non-negative integer and returns it with its digits in descending order. 
// 'sort', the JS native array method, is allowed.

const sortByDesc = (integer) => {
  return parseInt(integer.toString().split('').sort().reverse().join(''))
}

sortByDesc(21445) // 54421
