const { Movie } = require('../models');

async function addMovie(movieData) {
  const movieObject = new Movie(movieData);
  try {
    await movieObject.save();
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getAllMovies() {
  return await Movie.find();
}

module.exports = {
  addMovie,
  getAllMovies
}