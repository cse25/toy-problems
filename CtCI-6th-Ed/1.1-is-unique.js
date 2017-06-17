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

// implementation with Set
const isUniqueWithSet = (string) => {
  let set1 = new Set()
  for (let i = 0; i < string.length; i++) {
    if (set1.has(string[i])) {
      return false
    }
    set1.add(string[i])
  }
  
  return true
}

isUniqueWithSet('hello') // false
isUniqueWithSet('bye') // true

// implementation with sort
const isUniqueSort = (string) => {
  let arr = string.split('').sort()
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      return false
    }
  }
  
  return true
}

isUniqueSort('hello') // false
isUniqueSort('bye') // true

