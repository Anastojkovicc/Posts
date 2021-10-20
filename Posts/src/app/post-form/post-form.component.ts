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
  @Output() newPostInList = new EventEmitter<Post>();

  @ViewChild('postForm') postForm !: NgForm;

  public success: boolean = false;
  public loading: boolean = false;

  public postInformations: Post = {
    title: '',
    body: ''
  };

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

  addPostInList(post: Post){
    this.newPostInList.emit({...post});
  }

  onSubmit() {
    this.loading= true;
    this.postService.createPost(this.postInformations).subscribe(
      response => {
        console.log(response);
        this.loading= false;
        this.success= true;
        this.addPostInList(this.postInformations);
        
      },
      error => {
        console.log(error.message);
        this.loading= false;
      }
    )
  }

}
