import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form.component';
import {ReactiveFormsModule} from '@angular/forms'




@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MaterialModule, ReactiveFormsModule
  ], exports: [FormComponent]
})
export class FormModule { }
