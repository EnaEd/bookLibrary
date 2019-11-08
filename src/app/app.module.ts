import { BookListModule } from './library/book.list.module';
import { BookModule } from './models/book.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
