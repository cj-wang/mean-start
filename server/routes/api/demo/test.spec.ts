import * as httpMocks from "node-mocks-http";

import { testHandler } from './test';

describe('Test route', function () {
  it('should return "Test API works"', function () {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    testHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getData()).toBe('Test API works');
  });
});
