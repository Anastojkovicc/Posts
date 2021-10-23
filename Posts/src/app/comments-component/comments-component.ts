import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post , Comment } from '../interfaces';
import { PostService } from '../services/post-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comments',
  templateUrl: 'comments-component.html',
})
export class CommentsComponent implements OnInit {
  public postID: string = '';
  public post!: Post;
  public postComments: Comment[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postID = this.activatedRoute.snapshot.params['postID'];
    this.postService.getPostByID(this.postID)
    .subscribe((response) => {
      this.post = response;
    });
    this.postService.getCommentsForSinglePost(this.postID)
    .subscribe((response) => {
      this.postComments = response;
    });
  }


}