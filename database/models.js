const { db } = require('./connection');
const { movieSchema, commentSchema } = require('./schemas');

const Movie = db.model('Movie', movieSchema);
const Comment = db.model('Comment', commentSchema);

module.exports = {
  Movie,
  Comment
};