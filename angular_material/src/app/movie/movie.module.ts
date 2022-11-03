import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './list/card/card.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MovieComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    HttpClientModule

  ],
  exports: [
    MovieComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ]
})
export class MovieModule { }
