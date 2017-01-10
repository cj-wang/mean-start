import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  menu = require('./menu.json');

  constructor() { }

  getMenu() {
    return this.menu;
  }

}
