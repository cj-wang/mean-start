import * as supertest from "supertest";

import app from '../../../app';

describe('GET /api/demo/test', () => {
  it('should return "Test API works"', (done) => {
    supertest(app)
      .get('/api/demo/test')
      .expect(200)
      .then((response) => {
        expect(response.text).toBe('Test API works');
        done();
      })
  });
});
