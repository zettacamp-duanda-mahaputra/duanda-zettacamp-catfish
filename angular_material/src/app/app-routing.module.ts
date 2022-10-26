import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-management/book-detail/book-detail.component';
import { BookListComponent } from './book-management/book-list/book-list.component';
import { BookManagementComponent } from './book-management/book-management.component';

const routes: Routes = [
  { path: '', component: BookManagementComponent },
  { path: 'card', component: BookListComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
