import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Post , Comment } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private posts : Post[] = [];

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts');
  }
    
  setPosts(posts: Post[]){
      this.posts = posts;
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
  
  newPost(post : Post): void  {
      post.id = this.posts.length + 1;
      post.userId = 1;
      let existingPostsJSON = localStorage.getItem('local-posts');
      let existingPosts : Post[] = JSON.parse(existingPostsJSON || '[]');
      existingPosts.unshift(post);
      localStorage.setItem('local-posts' , JSON.stringify(existingPosts));
    }

  getAllPosts() : Post[] {
      let existingPostsJSON = localStorage.getItem('local-posts');
      let existingPosts : Post[] = JSON.parse(existingPostsJSON || '[]');
      let allPosts = existingPosts.concat(this.posts);
      return allPosts;
    }
  
}
