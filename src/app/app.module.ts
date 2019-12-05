import { SigninModule } from './library/registration/signin.module';
import { BookListModule } from './library/book.list/book.list.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { ApiInterceptor } from './services/api.interceptor';
import { LoginModule } from './library/login/login.module';
import { ReaderListModule } from './library/reader.list/reader.list.module';
import { ReaderDetailModule } from './library/reader.detail/reader.detail.module';



@NgModule({
  imports:[
    BrowserModule,
    LoginModule,
    SigninModule,
    BookListModule,
    HttpClientModule,
    ReaderListModule,
    ReaderDetailModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ 
     HttpService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
