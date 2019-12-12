const { Movie } = require('../models');

async function addMovie(movieData) {
  const movieObject = new Movie(movieData);
  return await movieObject.save();
}

module.exports = {
  addMovie
}