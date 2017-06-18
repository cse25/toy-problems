// URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
// EXAMPLE
// Input: "Mr John Smith " J 13 Output: "Mr%20John%20Smith"

const URLify = (str) => {
  let spaceCount = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      spaceCount++
    }
  }

  for (let j = 0; j < spaceCount; j++) {
    str = str.replace(' ', '%20')
  }

  return str
}

URLify('hi how are you doing?')
