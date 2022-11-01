import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './list/card/card.component';
import { MainComponent } from './main.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AccentPipe } from './pipes/accent.pipe';
import { CombinePipe } from './pipes/combine.pipe';



export function HttpLoaderFactory(httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient)
}


@NgModule({
  declarations: [
    FormComponent,
    CardComponent,
    MainComponent,
    ListComponent,
    FilterPipe,
    AccentPipe,
    CombinePipe,
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  exports: [
    FormComponent,
    CardComponent,
    MainComponent,
    ListComponent

  ]
})
export class MainModule { }
