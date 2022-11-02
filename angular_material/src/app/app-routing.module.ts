import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '',component: PostComponent},
  { path: 'card', component: PostListComponent},
  { path: 'detail/:id', component: PostFormComponent},
  { path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
