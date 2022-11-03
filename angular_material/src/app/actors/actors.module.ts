import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors.component';
import { ActorsRoutingModule } from './actors-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './list/card/card.component';
import { MaterialModule } from '../material/material.module';
MaterialModule



@NgModule({
  declarations: [
    ActorsComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    MaterialModule
  ],
  exports: [
    ActorsComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ]
  
})
export class ActorsModule { }
