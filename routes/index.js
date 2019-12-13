const version = require('../version');
const moviesController = require('../controllers').movies;
const movieValidation = require('../middleware').movieValidation;
const omdapiMiddleware = require('../middleware').omdapi;

module.exports = (app) => {
  app.get('/version', (_, res) => res.status(200).json({ version }));
  app.post('/movies',
    movieValidation('addMovie'),
    omdapiMiddleware.getMovieByTitle,
    moviesController.add
  );
  app.get('/movies', moviesController.get);
}