import request from 'supertest';
import express from 'express';
import router from '../src/routes';

const app = express();
app.use('/', router);

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /health', () => {
  it('responds with OK', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });
});
