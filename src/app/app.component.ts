import { Component, ViewChild } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  progress = false;
  uploadMoodelFiles: any[] = [];
  uploadedFiles: any[] = [];

  @ViewChild('fileUpload') fileUpload: FileUpload;

  constructor() {}

  ngOnInit() {
    console.log('ben');
  }

  storeFiles() {
    this.uploadMoodelFiles = this.fileUpload.files;
    this.progress = true;
    console.log('stored');
  }

  assignFiles() {
    this.progress = false;
    console.log('assigned');
  }

  test(event) {
    console.log('test');
  }

  uploadHandler(event) {
    console.log('test');
  }

  onBeforeUpload() {
    console.log('test');
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
