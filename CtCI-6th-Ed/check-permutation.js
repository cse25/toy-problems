// Keep track of characters counts with a Map data structure, fail when
// str2 has a character different to str2 or if any characters are left over at the end

//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  
  if (str1 === str2) {
    return true
  }
  
  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')

  if (sortedStr1 === sortedStr2) {
    return true
  }
  
  return false
}

isPermutation('hello', 'olleh') // true
isPermutation('goodbye', 'goodbuy') // false
