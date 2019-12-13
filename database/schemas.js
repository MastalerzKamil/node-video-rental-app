const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,

  Type: {
    type: String,
    enum: ['movie', 'series', 'episode']
  },
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
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