import { Component, OnInit , OnDestroy} from '@angular/core';
import { Post  } from '../interfaces';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post-service.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponent implements OnInit,OnDestroy {

  public posts : Post[] = [];
  // public post : Post;
  public postSubscription !: Subscription;

  constructor(private postsService: PostService) { }
  
  ngOnInit(): void {
    // this.postSubscription = this.postsService.getPost().subscribe(post => this.post = post);
    this.postSubscription= this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }

  addFirstPost(post : Post){
    this.posts.unshift(post);  
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe(); 
  }
  
}
