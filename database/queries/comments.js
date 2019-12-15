const { Comment } = require('../models');

/**
 * @param  {movie, text, rate} commentData
 * movie - reference to movies collection
 * text - comment text
 * rate - rate for movie
 */
async function addComment(commentData) {
  try {
    const commentObject = new Comment(commentData);
    return commentObject.save();
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getAllComments() {
  try {
    return Comment.find();
  } catch (err) {
    throw new Error(err.message);
  }
}

/**
 * @param  {movieId: String} movieId
 * movieId - id which reffer to movie in comment document
 */
async function getCommentsForMovie(movieId) {
  try {
    return Comment.find({'movie': movieId})
      .populate('movie')
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  addComment,
  getAllComments,
  getCommentsForMovie
}