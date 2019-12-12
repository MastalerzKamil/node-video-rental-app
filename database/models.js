const { db } = require('./connection');
const { movieSchema } = require('./schemas');

const Movie = db.model('Movie', movieSchema);

module.exports = {
  Movie
};