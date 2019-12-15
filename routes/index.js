const version = require('../version');
const moviesController = require('../controllers').movies;
const commentsController = require('../controllers').comments;
const validation = require('../middleware').validation;
const omdapiMiddleware = require('../middleware').omdapi;
const databaseMiddleware = require('../middleware').database;

module.exports = (app) => {
  app.get('/version', (_, res) => res.status(200).json({ version }));
  app.post('/movies',
    validation('addMovie'),
    omdapiMiddleware.getMovieByTitle,
    databaseMiddleware.checkExistingMovie,
    moviesController.add
  );
  app.get('/movies', moviesController.get.all);
  app.get('/movies/:movieId', moviesController.get.byId)
  app.post('/comments', validation('addComment'), commentsController.add);
  app.get('/comments', commentsController.get.all);
  app.get('/comments/:movieId', commentsController.get.byId)
}