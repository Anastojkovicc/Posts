import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts-component/posts-component.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post-service.service';
import { CommentsComponent } from './comments-component/comments-component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    CommentsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
