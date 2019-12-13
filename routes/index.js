const version = require('../version');
const moviesController = require('../controllers').movies
const movieValidation = require('../middleware').movieValidation

module.exports = (app) => {
  app.get('/version', (_, res) => res.status(200).json({ version }));
  app.post('/movies', movieValidation('addMovie'), moviesController.add);
  app.get('/movies', moviesController.get);
}