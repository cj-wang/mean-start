import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FileListService } from './file-list.service';

describe('FileListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileListService]
    });
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        FileListService
      ]
    });
  });

  it('should ...', inject([FileListService], (service: FileListService) => {
    expect(service).toBeTruthy();
  }));
});
