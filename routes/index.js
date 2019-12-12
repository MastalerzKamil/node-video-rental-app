const version = require('../version');
const moviesController = require('../controllers').movies

module.exports = (app) => {
  app.get('/version', (_, res) => res.status(200).json({ version }));
  app.post('/movies', moviesController.add);
}