const mongoose = require('mongoose');
const { connect, closeConnection } = require('../../database').connection
const { comment } = require('../mock').comment;
const { getMovieByTitle, addMovie } = require('../../database/queries').movies;
const { addComment } = require('../../database/queries').comments;

beforeAll(async () => {
  await connect();
  await addMovie({title: 'Avatar'});
});
afterAll(async () => await closeConnection());

describe('collection comment', () => {
  it.skip('should add comment to collection', async () => {
    const givenComment = comment;
    const movieForComment = await getMovieByTitle('Avatar');
    // givenComment.movie = movieForComment._id;
    console.log(givenComment);

    addComment(givenComment)
      .then(res => {
        expect(res.movie).toEqual(movieForComment._id)
        done();
      });
  })
})