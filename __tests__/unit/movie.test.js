const mongoose = require('mongoose');
const { connect, closeConnection, addMovie } = require('../../database').connection
const { singleMovie, invalidMovie, saveMovie } = require('../mock').movies;
const {
  getMovieByTitle
} = require('../../database/queries').movies;
const config = require('../../config');
const axios = require('axios');

const testedMovieTitle = '2012'

jest.mock('axios');

// Make sure to resolve with a promise
axios.mockResolvedValue();

beforeAll(async () => {
  await connect();
});
afterAll(async () => await closeConnection());

describe('collection movies', () => {
  it('should add new movie into collection', async () => {
    const givenMovie = singleMovie;
    const addedMovie = await saveMovie(givenMovie);
    expect(addedMovie.Title).toEqual(singleMovie.Title);
  });

  it.skip('should throw error because invalid type', async () => {
    const givenMovie = invalidMovie;
    await expect(saveMovie(givenMovie)).rejects.toThrow();
  });

  it.skip('should find movie by title', async () => {
    await saveMovie(testedMovieTitle);
    const givenMovie = await getMovieByTitle(testedMovieTitle)
    expect(givenMovie !== null).toBe(true);
    done();
  });
});