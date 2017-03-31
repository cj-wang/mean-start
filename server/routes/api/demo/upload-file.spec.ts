import * as httpMocks from 'node-mocks-http';
import { Express } from 'express';

import { files, uploadFile, listFiles, remove, removeAll } from './upload-file';

describe('uploadFile', () => {
  it('should create a file entry', () => {
    const req = httpMocks.createRequest({});
    req.file = {
      fieldname: 'file',
      filename: 'abc.txt',
      originalname: 'abc.txt',
      encoding: '7bit',
      mimetype: 'application/octet-stream',
      size: 123,
      destination: '',
      path: '',
      buffer: null,
    };
    const res = httpMocks.createResponse();
    uploadFile(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(files[req.file.filename]).toBe(req.file);
    expect(files[req.file.filename]['uploadDate']).toBeTruthy();
  });
});

describe('listFiles', () => {
  it('should return the file list', () => {
    const req = httpMocks.createRequest({});
    const res = httpMocks.createResponse();
    listFiles(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._isJSON()).toBeTruthy();
    expect(JSON.parse(res._getData()).length).toBe(1);
    expect(JSON.parse(res._getData())[0].filename).toBe('abc.txt');
  });
});

describe('remove', () => {
  it('should delete the file entry', () => {
    const req = httpMocks.createRequest({
      params: {
        _filename: 'abcde'
      }
    });
    const res = httpMocks.createResponse();
    remove(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(files[req.params._filename]).toBeFalsy();
  });
});

describe('removeAll', () => {
  it('should delete all the file entries', () => {
    const req = httpMocks.createRequest({});
    const res = httpMocks.createResponse();
    removeAll(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(files).toEqual({});
  });
});
