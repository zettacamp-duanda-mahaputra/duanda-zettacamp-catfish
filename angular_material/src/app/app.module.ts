import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AboutModule } from './about/about.module';
import { MovieModule } from './movie/movie.module';
import { ActorsModule } from './actors/actors.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AboutModule,
    MovieModule,
    HttpClientModule,
    ActorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
