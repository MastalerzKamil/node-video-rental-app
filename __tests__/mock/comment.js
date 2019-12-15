const mongoose = require('mongoose')
const mockMovie = require('./movies');

const comment = {
  _id: mongoose.Types.ObjectId(),
  movie: mockMovie.singleMovie._id,
  text: 'Best movie ever',
  rate: 4.5,
}

module.exports = {
  comment
}