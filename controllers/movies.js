const moviesQueries = require('../database/queries').movies;
const { validationResult } = require('express-validator/check');

async function addMovie(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    moviesQueries.addMovie(req.body)
      .then(() => res.status(200).send({result: 'Success'}))
      .catch(err => res.status(400).send(err));
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function getAllMovies(req, res) {
  moviesQueries.getAllMovies()
    .then((result) => res.status(200).send(result))
    .catch(err => res.status(404).send({
      error: err,
      msg: 'Problem with fetching movies'
    }));
}

module.exports = {
  add: addMovie,
  get: getAllMovies
}