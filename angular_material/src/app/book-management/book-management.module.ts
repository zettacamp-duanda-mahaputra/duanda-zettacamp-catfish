import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagementComponent } from './book-management.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { RouterModule } from '@angular/router';


  


@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentModule,
    RouterModule
  ],
  exports: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent
  ]
})
export class BookManagementModule { }
