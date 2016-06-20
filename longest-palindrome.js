function longestPalindrome(string) {
  var longestPal = '';
  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i];
    var firstPos;
    for (var j = i + 1; j < string.length; j++) {
      if (currentLetter === string[j]) {
        firstPos = j;
        var substring = string.slice(i, firstPos + 1);
        var reversed = substring.split('').reverse().join('');
        if (substring.length > longestPal.length) {
          longestPal = substring;
        }
      }
    }
  }
  return longestPal;
}
