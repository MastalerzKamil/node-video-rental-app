const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Type: {
    type: String,
    enum: ['movie', 'series', 'episode']
  },
  Year: {
    type: String,
  },
  Rated: { type: String },
  Released: { type: String },
  Runtime: { type: String },
  Genre: { type: String },
  Director: { type: String },
  Writer: { type: String },
  Actors: { type: String },
  Plot: { type: String },
  Language: { type: String },
  Country: { type: String },
  Awards: { type: String },
  Poster: { type: String },
  Ratings: [
    { Source: String, Value: String}
  ],
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  DVD: String,
  BoxOffice: String,
  Production: String,
  Website: String,
  Response: String
});

module.exports = {
  movieSchema
}