function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1) {
      return false
    }
  }
  return true
}

mutation(['hello','hey'])
mutation(['what', 'hat'])
