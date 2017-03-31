import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuService } from './home/menu.service';

import { PostsComponent } from './demo/posts/posts.component';
import { PostsService } from './demo/posts/posts.service';
import { ChatComponent } from './demo/chat/chat.component';
import { HeroFormComponent } from './demo/form/hero-form.component';
import { UploadFileComponent } from './demo/upload-file/upload-file/upload-file.component';
import { FileListComponent } from './demo/upload-file/file-list/file-list.component';
import { FileListService } from './demo/upload-file/file-list/file-list.service';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'form',
    component: HeroFormComponent
  },
  {
    path: 'upload-file',
    component: UploadFileComponent
  },
  {
    path: 'file-list',
    component: FileListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    ChatComponent,
    HeroFormComponent,
    UploadFileComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    FileUploadModule
  ],
  providers: [
    MenuService,
    PostsService,
    FileListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
