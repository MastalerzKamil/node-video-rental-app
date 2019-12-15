const commentsQueries = require('../database/queries').comments;
const { validationResult } = require('express-validator/check');

async function addComment(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    commentsQueries.addComment(req.body)
      .then(() => res.status(200).send({result: 'Success', comment: req.body}))
      .catch(err => res.status(400).send(err));
  } catch(err) {
    res.status(400).send(err.message);
  }
}

async function getAllComments(req, res) {
  commentsQueries.getAllComments()
    .then((result) => res.status(200).send(result))
    .catch(err => res.status(404).send({
      error: err,
      msg: 'Problem with getting comments'
    }));
}

async function getCommentsByMovieId(req, res) {
  const { movieId } = req.params;
  commentsQueries.getCommentsForMovie(movieId)
    .then((result) => res.status(200).send(result))
    .catch(err => res.status(404).send({
      error: err,
      msg: 'Problem with getting comments for movie'
    }));
}

module.exports = {
  add: addComment,
  get: {
    all: getAllComments,
    byId: getCommentsByMovieId
  }
}