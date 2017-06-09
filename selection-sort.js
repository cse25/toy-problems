const selectionSort = (array) => {
  let firstIndex, temp
  
  for (let i = 0; i < array.length; i++) {
    startIndex = i
    for (let j = 0 + i; j < array.length; j++) {
      if (array[j] < array[startIndex]) {
        startIndex = j
      }
    }
    
    temp = array[i]
    array[i] = array[startIndex]
    array[startIndex] = temp
  }

  return array
}

selectionSort([2,3,5,1]) // [1,2,3,5]
