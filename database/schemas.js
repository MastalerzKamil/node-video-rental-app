const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  type: ['movie', 'series', 'episode'],
  year: Number,
  plot: ['short', 'full']
});

module.exports = {
  movieSchema
}