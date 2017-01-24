// Given an array of arbitrarily nested arrays, return n, where n 
// is the deepest level that contains a non-array value.

// Input
// array:
// [ [ 5 ], [ [ ] ] ]    // Output: 2
// array:
// [ 10, 20, 30, 40 ]    // Output: 1
// array:
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]     // Output: 4

var arr = [1,2,[3,[4]]]

function arrayception(array) {
  var deepest = 0;
  
  function recurse(array, currentDepth) {
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        recurse(array[i], currentDepth + 1)
      } else {
        if (currentDepth > deepest) {
          deepest = currentDepth;
        }
      }
    }
  }
  recurse(array,1)
  return deepest
}

arrayception(arr)


const arrcep = (array) => {
  let deepest = 0;
  
  const recurse = (array, depth) => {
    array.map((item) => {
      if (Array.isArray(item)) {
        recurse(item, depth + 1);
      } else {
        if (depth > deepest) {
          deepest = depth;
        }
      }
    })
  }
  
  recurse(array, 1);
  return deepest;
}
