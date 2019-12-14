const { Comment } = require('../models');

async function addComment(commentData) {
  try {
    const commentObject = new Comment(commentData);
    await commentObject.save();
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  addComment
}