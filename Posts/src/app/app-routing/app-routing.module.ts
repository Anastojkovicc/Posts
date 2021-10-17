import { NgModule } from '@angular/core';
import { PostsComponent } from '../posts-component/posts-component.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';


const routes: Routes = [
  {path: '', redirectTo:'/posts',  pathMatch: 'full'},
  {path: 'posts', component: PostsComponent}

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
