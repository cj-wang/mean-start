import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  getMenu() {
    return this.http.get('assets/menu.json')
      .map(res => res.json().data);
  }

}
