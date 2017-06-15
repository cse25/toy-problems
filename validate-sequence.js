const validateSequence = (array) => {
  let delta
  for (let i = 0; i < array.length - 1; i++) {
    let currentDelta = (array[i] - array[i+1])
    if (i === 0) {
      delta = currentDelta
    } else if (delta !== currentDelta) {
      return false
    }
    return true
  }
}

validateSequence([1,2,3,4,5,6,7,8,9]) === true
validateSequence([1,2,3,4,5,8,7,8,9]) === false
validateSequence([2,4,6,8,10]) === true
validateSequence([0,2,4,6,8]) === true
validateSequence([1,3,5,7,9]) === true
validateSequence([1,2,4,8,16,32,64]) === false
validateSequence([0,1,1,2,3,5,8,13,21,34]) === false
