const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['movie', 'series', 'episode']
  },
  year: {
    type: Number,
    required: true,
  },
  plot: {
    type: String,
    enum: ['short', 'full']
}
});

module.exports = {
  movieSchema
}