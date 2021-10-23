import { Component, OnInit} from '@angular/core';
import { Post  } from '../interfaces';
import { PostService } from '../services/post-service.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponent implements OnInit {

  public posts : Post[] = [];

  constructor(private postsService: PostService) { }
  
  ngOnInit(): void {
      this.postsService.getPosts().subscribe(
        response => {
          this.postsService.setPosts(response);
          this.posts = this.postsService.getAllPosts();
        }, 
        error  => {
         console.log("error ", error);
        }
      );

    }
  
  

}
