const version = require('../version');
const moviesController = require('../controllers').movies;
const movieValidation = require('../middleware').movieValidation;
const omdapiMiddleware = require('../middleware').omdapi;
const databaseMiddleware = require('../middleware').database;

module.exports = (app) => {
  app.get('/version', (_, res) => res.status(200).json({ version }));
  app.post('/movies',
    movieValidation('addMovie'),
    omdapiMiddleware.getMovieByTitle,
    databaseMiddleware.checkExistingMovie,
    moviesController.add
  );
  app.get('/movies', moviesController.get);
}