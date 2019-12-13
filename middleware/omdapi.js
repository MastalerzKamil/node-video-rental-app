const config = require('../config');
const axios = require('axios');

function getMovieByTitle(req, res, next) {
  const { title } = req.body;

  axios(`http://www.omdbapi.com/?apikey=${config.omdapi_key}&t="${title}"`)
  .then(({ data }) => {
    res.locals.movie = data;
    next();
  });
}

module.exports = {
  getMovieByTitle
};