import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormComponent } from './form.component';
import {ReactiveFormsModule} from '@angular/forms'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
      return new TranslateHttpLoader(http);
}




@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
      },
      defaultLanguage: 'en'
})
  ], exports: [FormComponent]
})
export class FormModule { }
