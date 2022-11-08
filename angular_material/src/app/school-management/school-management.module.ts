import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolManagementComponent } from './school-management.component';
import { SchoolTableComponent } from './school-table/school-table.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SchoolManagementComponent, pathMatch: 'full' },
];






@NgModule({
  declarations: [
    SchoolManagementComponent,
    SchoolTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class SchoolManagementModule { }
