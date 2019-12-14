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
    throw new Error(err.message)
  }
}

module.exports = {
  addComment
}