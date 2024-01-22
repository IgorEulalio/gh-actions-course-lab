const request = require('supertest');
const { app, server } = require('./app'); // Import the server along with the app

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World!');
  });

  afterAll(done => {
    server.close(done); // Close the server after all tests
  });
});
