import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { Post , Comment } from '../interfaces';
import { retry,catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PostService {
//  private post= new Subject<Post>(); 

  constructor(private http: HttpClient) { }

  // getPost(): Observable<Post>{
  //   return this.post.asObservable();
  // }

  // public updatePost(postNew: Post): void{
  //   this.post.next(postNew);
  // }


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts');
    }

  createPost(postInformations : Post){
      return this.http.post('https://jsonplaceholder.typicode.com/posts', 
      {... postInformations, userId :1 });
    }

    getPostByID(id: string): Observable<Post> {
      return this.http.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
    }

    getCommentsForSinglePost (id: string): Observable<Comment[]> {
      return this.http.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
    }
    
}
