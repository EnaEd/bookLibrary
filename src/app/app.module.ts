import { ReaderDetailModule } from './library/reader.detail.module';
import { ReaderListModule } from './library/reader.list.module';
import { ReaderListComponent } from './library/reader.list.component';
import { BookListComponent } from './library/book.list.component';
import { RouterModule } from '@angular/router';
import { BookListModule } from './library/book.list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReaderDetailComponent } from './library/reader.detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { ApiInterceptor } from './services/api.interceptor';

@NgModule({
  imports:[BrowserModule,BookListModule,HttpClientModule,ReaderListModule,ReaderDetailModule,AppRoutingModule,RouterModule.forRoot([
    {path:"bookList",component:BookListComponent},
    {path:"readerList",component:ReaderListComponent},
    {path:"readerDetail/:id",component:ReaderDetailComponent},
    {path:"**",redirectTo:"/bookList"},
  ])],
  declarations: [
    AppComponent
  ],
  providers: [ 
    HttpService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
