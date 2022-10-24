import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ContentComponent,
    CardComponent
  ]
})
export class MainModule { }
