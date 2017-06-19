// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

const isPalindrome = (str) => {
  let obj = {}
  if (!str) {
    return false
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (obj[str[i]]) {
        delete obj[str[i]]
      } else {
        obj[str[i]] = 1
      }
    }
  }

  return obj.length >= 1
}

isPalindrome('octa tac') // true
isPalindrome('abc dba') // false
