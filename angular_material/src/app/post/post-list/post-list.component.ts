import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService:PostService) { }

  Post:Post[] = [];

  ngOnInit(){
    this.postService.getPost().subscribe((data)=>{
      this.Post = data;
      console.log(this.Post)
    })
  }

}
