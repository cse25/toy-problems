const productOfAllOtherNumbers = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        subarray.push(arr[j]);
      }
    }
    array.push(subarray);
  }
  return array.map(arr => arr.reduce((a,b) => a * b));
}

productOfAllOtherNumbers([1,7,3,4])
