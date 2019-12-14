const config = require('../config');
const axios = require('axios');

function getMovieByTitle(req, res, next) {
  const { title } = req.body;

  fetchMovieByTitle(title)
    .then(({ data }) => {
      res.locals.movie = data;
      next();
    });
}

async function fetchMovieByTitle(title) {
  return axios(`http://www.omdbapi.com/?apikey=${config.omdapi_key}&t="${title}"`);
}

module.exports = {
  getMovieByTitle,
  fetchMovieByTitle
};