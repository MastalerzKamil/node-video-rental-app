const moviesQueries = require('../database/queries').movies;
const { validationResult } = require('express-validator/check');

async function addMovie(req, res) {
  const { title, type, year, plot } = req.body;
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    res.status(200).send({result: 'Success'});
  } catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = {
  add: addMovie
}