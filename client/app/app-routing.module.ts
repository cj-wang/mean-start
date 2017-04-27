import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './demo/posts/posts.component';
import { ChatComponent } from './demo/chat/chat.component';
import { HeroFormComponent } from './demo/form/hero-form.component';
import { UploadFileComponent } from './demo/upload-file/upload-file/upload-file.component';
import { FileListComponent } from './demo/upload-file/file-list/file-list.component';

const appRoutes: Routes = [
  {
    path: 'home',
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
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    // component: PageNotFoundComponent
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
