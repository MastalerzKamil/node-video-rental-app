const omdapiMiddleware = require('../../middleware').omdapi;
const { addMovie } = require('../../database/queries').movies;
const config = require('../../config');
const axios = require('axios');


const singleMovie = {
  title: 'Fast & Furious6',
};

const invalidMovie = {}

async function saveMovie(title) {
  const fetchedMovie = await omdapiMiddleware.fetchMovieByTitle(title)
  console.log(fetchedMovie)
  return addMovie(fetchedMovie);
}

module.exports = {
  singleMovie,
  invalidMovie,
  saveMovie
}