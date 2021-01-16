function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // Determine if two movie runtimes add up to the flight length
  //Assumptions
  // Users will watch exactly two movies
  // Don't make users watch same movie twitce
  // Optimize for runtime over memory
  // Aim for o(1) time and o(n) space

  let movieLengthsSeen = new Set();
  let currentMovie;
  let otherMovieLengthNeeded;

  for (let i = 0; i < movieLengths.length; i++) {
    currentMovie = movieLengths[i];
    otherMovieLengthNeeded = flightLength - movieLengths[i];

    if (movieLengthsSeen.has(otherMovieLengthNeeded)) return true;
    movieLengthsSeen.add(currentMovie);
  }

  return false;
}
