import { NgModule } from '@angular/core';
import { PostsComponentComponent } from '../posts-component/posts-component.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'posts', component: PostsComponentComponent}

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
