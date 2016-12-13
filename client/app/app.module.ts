import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './demo/posts/posts.component';

import { PostsService } from './demo/posts/posts.service';
import { ChatComponent } from './demo/chat/chat.component';
import { HeroFormComponent } from './demo/form/hero-form.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ChatComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
