import { NgModule } from '@angular/core';
import { PostsComponent } from '../posts-component/posts-component.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { CommentsComponent } from '../comments-component/comments-component';
import { Routes, RouterModule, Router } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo:'/posts',  pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'new', component: PostFormComponent},
  {path: 'comments/post/:postID', component: CommentsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
