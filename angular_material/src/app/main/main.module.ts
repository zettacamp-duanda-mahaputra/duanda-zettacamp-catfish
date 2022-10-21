import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { OutputComponent } from './content/output/output.component';



@NgModule({
  declarations: [
    ContentComponent,
    CardComponent,
    JumbotronComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    CardComponent,
    JumbotronComponent,
    OutputComponent
  ]
})
export class MainModule { }
