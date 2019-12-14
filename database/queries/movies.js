const { Movie } = require('../models');

async function addMovie(movieData) {
  try {
    const movieObject = new Movie(movieData);
    return movieObject.save();
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getAllMovies() {
  return await Movie.find();
}

async function getMovieByTitle(movieTitle) {
  try {
    return Movie.findOne({'Title': movieTitle})
} catch (error) {
    throw new Error(error.message)
}
}

module.exports = {
  addMovie,
  getAllMovies,
  getMovieByTitle,
}