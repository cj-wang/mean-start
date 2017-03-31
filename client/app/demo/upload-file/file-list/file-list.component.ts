import { Component, OnInit } from '@angular/core';
import { FileListService } from './file-list.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files = [];

  constructor(private fileListService: FileListService) { }

  refresh() {
    this.fileListService.getFiles().subscribe((files) => {
      this.files = files;
    });
  }

  ngOnInit() {
    this.refresh();
  }

  remove(file) {
    this.fileListService.remove(file.filename).subscribe(() => {
      this.refresh();
    });
  }

  removeAll() {
    this.fileListService.removeAll().subscribe(() => {
      this.refresh();
    });
  }

}
