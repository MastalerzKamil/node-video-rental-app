const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['movie', 'series', 'episode']
  },
  year: {
    type: String,
  },
  plot: {
    type: String,
    enum: ['short', 'full']
  }
});

module.exports = {
  movieSchema
}