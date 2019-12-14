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

async function getMovieByTitle(movieTitle) {
  console.log(movieTitle)
  return await Movie.findOne({'Title': movieTitle}, function(err, doc) {
    if (err){
        // error
        throw err;
    } else if (doc) {
        // film exists
        console.log("Found movie with id "+doc._id);
    }
  });
}

module.exports = {
  addMovie,
  getAllMovies,
  getMovieByTitle,
}