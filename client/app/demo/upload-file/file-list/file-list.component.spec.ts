import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { FileListComponent } from './file-list.component';
import { FileListService } from './file-list.service';

class FakeFileListService {
  getFiles() {
    return Observable.of([]);
  }
}

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileListComponent ],
      providers: [{ provide: FileListService, useClass: FakeFileListService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
