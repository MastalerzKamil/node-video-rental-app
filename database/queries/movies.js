const { Movie } = require('../models');

async function addMovie(movieData) {
  const movieObject = new Movie(movieData);
  try {
    await movieObject.save();
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  addMovie
}