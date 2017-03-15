import * as supertest from "supertest";

import app from '../../../app';

describe('GET /api/demo/posts', () => {
  it('should return the posts', (done) => {
    supertest(app)
      .get('/api/demo/posts')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(jasmine.any(Array));
        expect(response.body.length).toBeTruthy();
        expect(response.body[0]).toEqual({
          userId: 1,
          id: 1,
          title: jasmine.any(String),
          body: jasmine.any(String)
        });
        done();
      })
  });

});
