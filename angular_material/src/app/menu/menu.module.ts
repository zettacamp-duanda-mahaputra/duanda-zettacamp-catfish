import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {path:'', component: MenuComponent, title:'Menu'}
]



@NgModule({
  declarations: [
    MenuComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  exports: [
    MenuComponent,
    ListComponent,
    CardComponent
  ]
})
export class MenuModule { }
