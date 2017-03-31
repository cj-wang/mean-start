import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FileListService {

  constructor(private http: Http) { }

  // Get uploaded files
  getFiles() {
    return this.http.get('/api/demo/upload-file')
      .map(res => res.json());
  }

  remove(filename) {
    return this.http.delete('/api/demo/upload-file/' + filename);
  }

  removeAll() {
    return this.http.delete('/api/demo/upload-file');
  }

}
