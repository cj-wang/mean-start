import { testHandler } from './test';

const httpMocks = require('node-mocks-http');

describe('Test route', function () {
  it('should return "Test API works"', function () {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    testHandler(req, res);
    expect(res._getData()).toBe('Test API works');
  });
});
