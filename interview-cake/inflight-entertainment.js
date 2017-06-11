const willFinishMovies = (flightLength, movieLengths) => {
  for (let i = 0; i < movieLengths.length; i++) {
    for (let j = 0; j < movieLengths.length; j++) {
      if (movieLengths[i] + movieLengths[j] === flightLength && i !== j) {
        return true
      }
    }
  }
  return false
}

willFinishMovies(300, [200,120,150,190]) // false
willFinishMovies(300, [180,120,90,140]) // true
