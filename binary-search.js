let arr1 = [1,4,8,12,15,19]
let arr2 = [1,4,8,10,12,15,19]

const binarySearch = (arr, val) => {
  let low = 0
  let high = arr.length - 1
  let mid
  
  while (high >= low) {
    mid = Math.floor((high + low) / 2)
    console.log(mid)
    if (val === arr[mid]) {
      return 1
    } else if (val < arr[mid]) {
      high = mid - 1
    } else if (val > arr[mid]) {
      low = mid + 1
    }
  }
  
  return -1
}

binarySearch(arr2, 15)
