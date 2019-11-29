import { ReaderDetailModule } from './library/reader.detail.module';
import { ReaderListModule } from './library/reader.list.module';
import { ReaderListComponent } from './library/reader.list.component';
import { BookListComponent } from './library/book.list.component';
import { RouterModule } from '@angular/router';
import { BookListModule } from './library/book.list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReaderDetailComponent } from './library/reader.detail.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:[BrowserModule,BookListModule,ReaderListModule,ReaderDetailModule,AppRoutingModule,RouterModule.forRoot([
    {path:"bookList",component:BookListComponent},
    {path:"readerList",component:ReaderListComponent},
    {path:"readerDetail",component:ReaderDetailComponent},
    {path:"**",redirectTo:"/bookList"},
  ])],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
