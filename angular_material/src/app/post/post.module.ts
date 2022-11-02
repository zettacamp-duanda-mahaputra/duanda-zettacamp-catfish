import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { HttpClientModule } from '@angular/common/http';









@NgModule({
  declarations: [
    PostComponent,
    PostFormComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentModule,
    HttpClientModule
  ],
  exports: [
    PostComponent,
    PostFormComponent,
    PostListComponent,
    PostCardComponent
  ]
})
export class PostModule { }
