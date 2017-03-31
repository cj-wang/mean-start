import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  hasBaseDropZoneOver = false;

  uploader = new FileUploader({
    url: '/api/demo/upload-file'
  });

  constructor() { }

  ngOnInit() {
  }

}
