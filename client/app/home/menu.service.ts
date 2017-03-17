import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MenuService {

  menu = require('./menu.json');

  constructor() { }

  getMenu() {
    return Observable.of(this.menu);
  }

}
