const { connect, closeConnection } = require('../../database').connection
const { singleMovie } = require('../mock').movies;
const { addMovie } = require('../../database/queries').movies;

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
  })
});