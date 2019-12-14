const { getMovieByTitle } = require('../database/queries').movies;

async function checkExistingMovie(req, res, next) {
  const { title } = req.body;
  const movie = await getMovieByTitle(title);

  if (movie) {
    return res.status(409).send({message: 'Movie already exists.'})
  }
  next();
}

module.exports = {
  checkExistingMovie
}