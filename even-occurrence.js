// Find the first item that occurs an even number of times in an array. 
// Remember to handle multiple even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.

// Examples
// Input:                                Output:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]         2
// arr:
// [ "cat", "dog", "dig", "cat" ]        "cat" 

function evenOccurrence(array) {
  var counts = {};
  for (var i = 0; i < array.length; i++) {
    if (array[i] in counts) {
      counts[array[i]]++;
    } else {
      counts[array[i]] = 1;
    }
  }
  for (var item in counts) {
    if (counts[item] % 2 === 0) {
      return item;
    }
  }
  return null;
}

evenOccurrence(['cat','dog','dog','bear','bear'])
evenOccurrence([1,2,3])
