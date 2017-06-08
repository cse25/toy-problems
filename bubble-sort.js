const bubbleSort = (array) => {
  let swapped = true
  
  while (swapped === true) {
    swapped = false
    for (let i = 0; i <= array.length; i++) {
      if (array[i] > array[i+1]) {
        swapped = true
        let val1 = arr[i]
        let val2 = arr[i+1]
        arr[i] = val2
        arr[i+1] = val1
      }
    }
  }
  
  return array
}

let arr = [1,3,4,2,5]

bubbleSort(arr)
