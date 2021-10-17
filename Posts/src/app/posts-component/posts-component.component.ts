import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Subscription } from 'rxjs';
import { PostService} from '../services/post-service.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponent implements OnInit {
  public posts : Post[] = [];
  postSubscription !: Subscription;

  constructor(private postsService: PostService) { }
  
  ngOnInit(): void {
    this.postSubscription= this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }
  
}
