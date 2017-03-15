import * as httpMocks from "node-mocks-http";
import * as nock from 'nock';

import { getPosts } from './posts';

describe('getPosts', () => {
  it('should return the posts', (done) => {
    // Expected data
    const posts = [{
      userId: '1',
      id: '1',
      title: 'title1',
      body: 'body1'
    }, {
      userId: '2',
      id: '2',
      title: 'title2',
      body: 'body2'
    }];
    // Mock http
    nock('https://jsonplaceholder.typicode.com')
      .get('/posts')
      .reply(200, posts);
    // Mock req and res
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    // Test
    getPosts(req, res)
      .then(() => {
        expect(res._getStatusCode()).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
        expect(JSON.parse(res._getData())).toEqual(posts);
        done();
      });
  });

  it('should return error if destination not reachable', (done) => {
    // Previous interceptor was used, we're not setting up a new one here, so the next request will fail
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    getPosts(req, res)
      .then(() => {
        expect(res._getStatusCode()).toBe(500);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();
        expect(JSON.parse(res._getData()).error).toBe('Error');
        done();
      });
  });
});
