import { Component, OnInit, Output,EventEmitter, ViewChild} from '@angular/core';
import { Post } from '../post';
import { PostService} from '../services/post-service.service';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  
  public postInformations: Post = {
    title: '',
    body: ''
  };

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

}
