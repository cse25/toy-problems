function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}

getIndexToIns([40,50,70], 60);
