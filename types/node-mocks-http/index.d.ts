// Type definitions for node-mocks-http 1.6.1
// Project: https://github.com/howardabrams/node-mocks-http
// Definitions by: CJ Wang <https://github.com/cj-wang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from 'express';

export function createRequest(reqOpts?: MockRequestOptions): MockRequest;
export function createResponse(resOpts?: MockResponseOptions): MockResponse;
export function createMocks(reqOpts?: MockRequestOptions, resOpts?: MockResponseOptions): MockRequestResponse;

export interface MockRequestOptions {
  method?: string;
  url?: string;
  originalUrl?: string;
  path?: string;
  params?: { [key: string]: any; };
  session?: { [key: string]: any; };
  cookies?: { [key: string]: any; };
  signedCookies?: { [key: string]: any; };
  headers?: { [key: string]: any; };
  body?: { [key: string]: any; };
  query?: { [key: string]: any; };
  files?: { [key: string]: any; };
  eventEmitter?: any;
}

export interface MockRequest extends express.Request {
  _setParameter(key: string, value: any): void;
  _setSessionVariable(variable: string, value: any): void;
  _setCookiesVariable(variable: string, value: any): void;
  _setSignedCookiesVariable(variable: string, value: any): void;
  _setHeadersVariable(variable: string, value: any): void;
  _setFilesVariable(variable: string, value: any): void;
  _setMethod(method: string): void;
  _setURL(value: string): void;
  _setOriginalUrl(value: string): void;
  _setBody(body: any): void;
  _addBody(key: string, value: any): void;
}

export interface MockResponseOptions {
  encoding?: string;
  writableStream?: any;
  eventEmitter?: any;
  req?: MockRequest;
}

export interface MockResponse extends express.Response {
  _isEndCalled(): boolean;
  _getHeaders(): any;
  _getData(): any;
  _getStatusCode(): number;
  _getStatusMessage(): string;
  _isJSON(): boolean;
  _isUTF8(): boolean;
  _isDataLengthValid(): boolean;
  _getRedirectUrl(): string;
  _getRenderView(): string;
  _getRenderData(): any;
}

export interface MockRequestResponse {
  req: MockRequest;
  res: MockResponse;
}
