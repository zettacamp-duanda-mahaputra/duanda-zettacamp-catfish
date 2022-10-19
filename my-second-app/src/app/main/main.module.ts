import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardsComponent } from './content/cards/cards.component';
import { FormComponent } from './content/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContentComponent,
    CardsComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContentComponent,
    CardsComponent
  ]
  })
export class MainModule { }
