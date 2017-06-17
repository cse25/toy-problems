// Is Unique: Implement an algorithm to determine if a string has all unique characters

// implementation with obj
const isUnique = (string) => {
  let obj = {}
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1
    } else {
      return false
    }
  }
  
  return true
}

isUnique('hello') // false
isUnique('bye') // true
