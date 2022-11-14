import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {path:'', component: CartComponent, title:'Cart'}
]



@NgModule({
  declarations: [
    CartComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    CartComponent,
    ListComponent,
    CardComponent
  ]
})
export class CartModule { }
