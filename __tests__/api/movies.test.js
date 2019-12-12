const request = require('supertest');
const { stop, server } = require('../../bin/www');
const { singleMovie } = require('../mock').movies;

afterAll((done) => stop().then(done));
describe('/movies', () => {
  describe('POST /', () => {
    it('should return code 200', async () => {
      const body = singleMovie;
      const response = await request(server)
        .post('/movies')
        .send(body)
        .set('Accept', 'application/json')
      expect(response.status).toEqual(200);
    });
  });
});