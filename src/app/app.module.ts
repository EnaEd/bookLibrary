import { ReaderListModule } from './library/reader.list.module';
import { ReaderListComponent } from './library/reader.list.component';
import { BookListComponent } from './library/book.list.component';
import { RouterModule } from '@angular/router';
import { BookListModule } from './library/book.list.module';
import { BookModule } from './models/book.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  imports:[BrowserModule,BookListModule,ReaderListModule,AppRoutingModule,RouterModule.forRoot([
    {path:"bookList",component:BookListComponent},
    {path:"readerList",component:ReaderListComponent},
    {path:"**",redirectTo:"/bookList"}
  ])],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
