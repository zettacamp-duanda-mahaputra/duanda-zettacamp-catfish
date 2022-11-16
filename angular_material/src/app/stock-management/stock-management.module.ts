import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module';


const routes: Routes = [
  {path:'', component: StockManagementComponent, title:'Stock Management'}
]



@NgModule({
  declarations: [
    StockManagementComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    StockManagementComponent,
    FormComponent
  ]
})
export class StockManagementModule { }
