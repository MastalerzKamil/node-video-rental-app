const mongoose = require('mongoose');
const { connect, closeConnection } = require('../../database').connection
const { singleMovie, invalidMovie } = require('../mock').movies;
const { addMovie, getMovieByTitle } = require('../../database/queries').movies;

const testedMovieTitle = '2012'

beforeAll(async () => {
  await connect();
  await addMovie({title: testedMovieTitle});
});
afterAll(async () => await closeConnection());

describe('collection movies', () => {
  it('should add new movie into collection', async () => {
    const givenMovie = singleMovie;
    addMovie(givenMovie)
      .then((res) => {
        expect(res.title).toEqual(singleMovie.title);
        done();
      });
  });

  it('should valid correct schema for movie', async () => {
    const givenMovie = singleMovie;
    await expect(addMovie.bind(null,givenMovie)).not.toThrow();
  });

  it.skip('should throw error because invalid type', async () => {
    const givenMovie = invalidMovie;
    await expect(addMovie.bind(null,givenMovie)).rejects.toThrow();
  });

  it('should find movie by title', async () => {
    const givenMovie = await getMovieByTitle(testedMovieTitle)
    expect(givenMovie !== null).toBe(true);
    done();
  });
});