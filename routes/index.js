const version = require('../version');

module.exports = (app) => {
  app.get('/version', (_, res) => res.status(200).json({ version }));
}