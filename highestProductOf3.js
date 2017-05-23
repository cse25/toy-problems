// Brute force

const highestProduct = (arr) => {
  let highest;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let curr = arr[i] * arr[j] * arr[k]
        if (curr > highest || highest === undefined) {
          highest = curr
        }
      }
    }
  }
  
  return highest;
}

highestProduct([1,2,-3,-4,5,6])


// Greedy
const highestProdOf3 = (array) => {
  const arr = array.sort((a,b) => a-b)
  const length = arr.length
  
  if (arr.length < 3) {
    return -1
  }
  
  if (arr.length === 3) {
    return arr[0] * arr[1] * arr[2]
  }
  
  const total1 = arr[0] * arr[1] * arr[length-1]
  const total2 = arr[length-1] * arr[length-2] * arr[length-3]
  
  return Math.max(total1, total2)
}

highestProdOf3([7,-3,5,-2,1,4])
