// Longest Run
// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

// Examples
// Input      Output
// string:
// "abbbcc"  [ 1, 3 ]
// string:
// "aabbc"   [ 0, 1 ]
// string:
// ""        [ 0, 0 ]
// string:
// "mississippi" [ 2, 3 ]
// string:
// "abcdefgh"  [ 0, 0 ]
// string:
// "abccccccc" [ 2, 8 ]

function longestRun (string) {
  var longestStreak = 0
  var longestStreakChar
  var count = 0
  var currentChar;
  for (var i = 0; i < string.length; i++) {
    console.log('string[i]', string[i])
    console.log(currentChar)
    if (currentChar === undefined) {
      currentChar = string[i]
      console.log('currentChar', currentChar)
      count += 1
    } else if (string[i] === currentChar) {
      count += 1
      if (count > longestStreak) {
        longestStreakChar = currentChar
        longestStreak = count
      }
    } else if (string[i] !== currentChar) {
        currentChar = string[i]
        if (count > longestStreak) {
          longestStreak = count
        }
        count = 1
    }
  }
  if (string.length === 0) {
    return [0,0]
  } else if (longestStreak === 1) {
    return [0,0]
  } else {
  var results = []
  var startIndex = string.indexOf(longestStreakChar)
  var endIndex = startIndex + (longestStreak -1)
  results.push(startIndex)
  results.push(endIndex)
  return results
  }
}
