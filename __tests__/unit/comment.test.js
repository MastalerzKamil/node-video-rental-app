const mongoose = require('mongoose');
const { connect, closeConnection } = require('../../database').connection
const { comment } = require('../mock').comment;
const { singleMovie } = require('../mock').movies;
const {
  addComment,
  getAllComments,
  getCommentsForMovie
} = require('../../database/queries').comments;

beforeAll(async () => {
  await connect();
});
afterAll(async () => await closeConnection());

describe('collection comment', () => {
  it('should add comment to collection', async () => {
    const givenComment = comment;
    addComment(givenComment)
      .then(res => {
        expect(res.movie !== null).toBe(true);
        done();
      });
  });

  it('should get all comments', async () => {
    getAllComments()
      .then(res => {
        expect(res.body.length > 0).toBe(true);
        done();
      });
  });

  it('should get comments for movie', async () => {
    getCommentsForMovie(singleMovie._id)
      .then(res => {
        expect(res.body.length !== 0).toBe(true);
      })
  })
});