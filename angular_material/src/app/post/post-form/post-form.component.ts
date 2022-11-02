import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../services/post.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  isEdit: boolean = false;
  id:any

  postForm = this.formBuilder.group({
    userId: [],
    title: [''],
    body: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private location:Location
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.isEdit = this.id != null;

    console.log(this.id);

    if (this.isEdit) {
      this.postService
        .getPostById(Number(this.id))
        .subscribe((data: any) => this.postForm.patchValue(data));
    }
  }

  onSubmit() {
    console.log(this.postForm)
    if (this.isEdit) {
      if (this.postForm.valid) {
        this.postService.patchPost(this.id,this.postForm.value).subscribe(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Data Updated!',
            icon: 'success',
            didClose: () => this.goBack()
          });
        })
      } 
    } else {
      if (this.postForm.valid) {
        this.postService.addPost(this.postForm.value).subscribe(() => {
          Swal.fire({
            title: 'Success!',
            text: 'Data Updated!',
            icon: 'success',
            didClose: () => this.goBack()
          });
        });
      } 
    }
  }

  goBack(){
    this.location.back();
  }
}

