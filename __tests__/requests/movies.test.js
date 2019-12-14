const request = require('supertest');
const { stop, server } = require('../../bin/www');
const { singleMovie } = require('../mock').movies;

afterAll((done) => stop().then(done));
describe('/movies', () => {
  describe('POST /', () => {
    it('should show all body validation errors', async () => {
      const response = await request(server)
        .post('/movies')
        .set('Accept', 'application/json')
        console.log(response.body)
      expect(response.message !== 0).toBe(true);
    });

    it('should return code 200', async () => {
      const body = singleMovie;
      const response = await request(server)
        .post('/movies')
        .send(body)
        .set('Accept', 'application/json')
      expect(response.status).toEqual(200);
    });

    it('should fetch all movies from database', async () => {
      const response = await request(server)
        .get('/movies');

      expect(response.body.length !== 0).toBe(true);
    });
  });
});