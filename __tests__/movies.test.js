const request = require('supertest');
const { stop, server } = require('../bin/www');

describe('/movies', () => {
  describe('POST /', () => {
    it('should return code 200', async () => {
      const body = {
        title: 'Fast&Furious 1',
        type: 'movie',
        year: 2000,
        plot: 'full'
      };
      const response = await request(server)
        .post('/movies')
        .send(body)
        .set('Accept', 'application/json')
      expect(response.status).toEqual(200);
    });
  });
  afterEach(() => {
    stop();
  });
});