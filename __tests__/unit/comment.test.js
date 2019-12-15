const mongoose = require('mongoose');
const { connect, closeConnection } = require('../../database').connection
const { comment } = require('../mock').comment;
const { addComment } = require('../../database/queries').comments;

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


})