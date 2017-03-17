import { Component, OnInit } from '@angular/core';
import { MenuService } from './home/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menu: any;
  navbarExpanded = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
    });
  }

}
