const mongoose = require('mongoose');
const { connect, closeConnection } = require('../../database').connection
const { Movie } = require('../../database').models;
const { singleMovie } = require('../mock').movies;
const { addMovie, invalidMovie } = require('../../database/queries').movies;

beforeAll(async () => await connect());
afterAll(async () => await closeConnection());

describe('collection movies', () => {
  it('should add new movie into collection', async () => {
    const givenMovie = singleMovie;
    addMovie(givenMovie)
      .then((res) => {
        expect(res.title).toEqual(singleMovie.title)
        done();
      });
  });

  it('should valid correct schema form movie', async () => {
    const givenMovie = invalidMovie;
    await expect(addMovie(givenMovie)).not.toThrow()
  });

  it('should throw error because invalid type', async () => {
    const givenMovie = invalidMovie;
    await expect(addMovie(givenMovie)).rejects.toThrow()
  });
});