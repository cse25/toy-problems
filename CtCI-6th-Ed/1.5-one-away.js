// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

const oneAway = (str1, str2) => {
  let edited = false

  for (let i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (edited) {
        return false
      }

      if (str1.length > str2.length) {
        i++
      }
      if (str2.length < str2.length) {
        j++
      }

      edited = true
    }
  }

  return true
}

oneAway('pale', 'ple') // true
oneAway('pales', 'pale') // true
oneAway('pale', 'bale') // true
oneAway('pale', 'bake') // false
