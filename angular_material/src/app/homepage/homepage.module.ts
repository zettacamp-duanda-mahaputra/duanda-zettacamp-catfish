import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomepageComponent, title:'Home'}
]


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
