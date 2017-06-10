// Find the length between 2 coordinates. The coordinates are made of integers between -20 and 20 and will be given in the form of a 2D array:

// (0,0) and (5,-7) would be [ [ 0 , 0 ] , [ 5, -7 ] ]

// The function must return the answer rounded to 2 decimal places in the form of a string.

// If the 2 given coordinates are the same, the returned length should be "0.00"

const lengthOfLine = (coordinates) => {
    let a = Math.pow((coordinates[1][1] - coordinates[0][1]),2)
    let b = Math.pow((coordinates[1][0] - coordinates[0][0]),2)
    let c = Math.sqrt(a + b)
    let cTwoDecimals = c.toFixed(2)
    return cTwoDecimals
}

lengthOfLine([ [ 0 , 0 ] , [ 5, -7 ] ]); // '8.60'
