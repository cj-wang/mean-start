/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from "rxjs/Rx";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuService } from './home/menu.service';

class FakeMenuService {
  getMenu() {
    return Observable.of([
      {
        "title": "Menu1",
        "sub": [
          {
            "title": "Menu1-Sub1",
            "link": "menu1-1"
          },
          {
            "title": "Menu1-Sub2",
            "link": "menu1-2"
          }
        ]
      }
    ]);
  }
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: MenuService, useClass: FakeMenuService }]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a menu`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.menu).toBeTruthy();
  }));

  it('should render menu', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('[href="/menu1-1"]').textContent).toBe('Menu1-Sub1');
    expect(compiled.querySelector('[href="/menu1-2"]').textContent).toBe('Menu1-Sub2');
  }));
});
