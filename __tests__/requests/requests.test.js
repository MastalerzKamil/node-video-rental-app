const request = require('supertest');
const { stop, server } = require('../../bin/www');
const { singleMovie } = require('../mock').movies;

afterAll((done) => stop().then(done));

describe('requests', () => {
  describe('/movies', () => {
    it('should show all body validation errors', async () => {
      const response = await request(server)
        .post('/movies')
        .set('Accept', 'application/json');
      expect(response.message !== 0).toBe(true);
    });

    it('should return code 200 or 409 if exists', async () => {
      const body = {title: 'Kevin'};
      const response = await request(server)
        .post('/movies')
        .send(body)
        .set('Accept', 'application/json')
      expect(
        response.status === 200 || response.status === 409
        ).toBe(true);
    });

    it('should fetch all movies from database', async () => {
      const response = await request(server)
        .get('/movies');
      expect(response.body.length !== 0).toBe(true);
    });

    it('should fetch movie by id', async () => {
      const response = await request(server)
        .get(`/movies/${singleMovie._id}`)
      expect(response.body.length !== 0).toBe(true);
    });
  })

  describe('/comments', () => {
    it('should show all body validation errors', async () => {
      const response = await request(server)
        .post('/comments')
        .set('Accept', 'application/json');
      expect(response.message !== 0).toBe(true);
    });

    it('should return code 200 (comment added)', async () => {
      const body = {
        movie: singleMovie._id,
        text: 'Worth to see but too long',
        rate: 3.5
      };
      const response = await request(server)
        .post('/comments')
        .send(body)
        .set('Accept', 'application/json');
      expect(response.status === 200).toBe(true);
    });

    it('should fetch all comments', async() => {
      const response = await request(server)
        .get('/comments');
        expect(response.body.length !== 0).toBe(true);
    });

    it('should fetch comments for single movie', async () => {
      const response = await request(server)
        .get(`/comments/${singleMovie._id}`)
      expect(response.body.length !== 0).toBe(true);
    });
  });
});