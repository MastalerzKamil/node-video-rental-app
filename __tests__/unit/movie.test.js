const mongoose = require('mongoose');
const { connect, closeConnection } = require('../../database').connection
const { singleMovie, invalidMovie } = require('../mock').movies;
const {
  getMovieByTitle,
  addMovie
} = require('../../database/queries').movies;

beforeAll(async () => {
  await connect();
});
afterAll(async () => await closeConnection());

describe('collection movies', () => {
  it('should add new movie into collection', async () => {
    const givenMovie = singleMovie;
    const addedMovie = await addMovie(givenMovie);
    expect(addedMovie.Title).toEqual(singleMovie.Title);
  });

  it('should find movie by title', async () => {
    const givenMovie = await getMovieByTitle(singleMovie.Title)
    expect(givenMovie !== null).toBe(true);
  });
});