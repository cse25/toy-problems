// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

function powerSet(string) {
  var arr = string.split('')
    var results = [''];
    for (var i=0; i < arr.length; i++) {
        for (var j = 0, len = results.length; j < len; j++) {
          var temp = results[j].concat(arr[i])
          var sortedTemp = temp.split('').sort();
          uniqueArray = sortedTemp.filter(function(item, pos) {
            return sortedTemp.indexOf(item) == pos;
          })
          var sortedTempString = uniqueArray.join('')
          results.push(sortedTempString)
        }
    }
    var sorted = results.sort();
    var unique = sorted.filter(function(item, pos) {
      return sorted.indexOf(item) == pos;
    })
    return unique;
}
 