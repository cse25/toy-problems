// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Examples
// Input           Output
// digitString:
// "0002"          [ "000A", "000B", "000C" ]
// digitString:
// "1123"          [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]

var converterArr = [
    ['0'],
    ['1'],
    ['A','B','C'],
    ['D','E','F'],
    ['G','H','I'],
    ['J','K','L'],
    ['M','N','O'],
    ['P','Q','R','S'],
    ['T','U','V'],
    ['W','X','Y','Z'],
];

function telephoneWords (digitString) {
  var results = [];
  
  function recurse(string) {
    if (string.length === digitString.length) {
      results.push(string);
    } else {
      var key = digitString.charAt(string.length);
      var letters = converterArr[key];
      for (var i = 0; i < letters.length; i++) {
        recurse(string + letters[i]);
      }
    }
  }
  recurse('');
  return results;
};
