import { Component, OnInit, Output,EventEmitter, ViewChild} from '@angular/core';
import { Post  } from '../interfaces';
import { PostService} from '../services/post-service.service';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {

  public postInformations: Post = {
    id : 0,
    userId : 1,
    title: '',
    body: ''
  };

  constructor(private postService:PostService) { }

  public success : boolean = false;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const post : Post  = {
      ...this.postInformations
    }
    this.postService.newPost(post);
    this.success= true;
  }

}
