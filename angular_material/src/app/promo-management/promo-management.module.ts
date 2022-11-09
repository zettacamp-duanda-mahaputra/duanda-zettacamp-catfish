import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import { PromoListComponent } from './promo-list/promo-list.component';
import { PromoCardComponent } from './promo-list/promo-card/promo-card.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PromoManagementComponent, pathMatch: 'full' },
];



@NgModule({
  declarations: [
    PromoManagementComponent,
    PromoListComponent,
    PromoCardComponent 
   ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    PromoManagementComponent,
    PromoListComponent,
    PromoCardComponent
  ]
})
export class PromoManagementModule { }
