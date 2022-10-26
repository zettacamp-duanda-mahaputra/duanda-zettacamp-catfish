import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManagementModule } from './book-management/book-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialComponentModule } from './material-component/material-component.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookManagementModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
