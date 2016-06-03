// Given two arrays of negative/positive integers, return a new array such that each 
// element at index n is the sum of the two elements from the other arrays at their index n’s.

// Inputs:
let xs = [10,20,30];
let ys = [5,6];

// Output: [15,26];

zipSum = (xs,ys) => {
  let smallest = Math.min(xs.length, ys.length)
  let results = []
  for (let i = 0; i < smallest; i++) {
    results.push(xs[i] + ys[i])
  }
  return results;
}

zipSum(x,y);
