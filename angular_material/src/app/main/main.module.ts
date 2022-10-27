import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './list/card/card.component';
import { MainComponent } from './main.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    FormComponent,
    CardComponent,
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    FormComponent,
    CardComponent,
    MainComponent,
    ListComponent

  ]
})
export class MainModule { }
