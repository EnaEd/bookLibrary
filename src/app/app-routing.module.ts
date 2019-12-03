import { LoginModule } from './library/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './library/book.list/book.list.component';
import { LoginComponent } from './library/login/login.component';
import { ReaderListComponent } from './library/reader.list/reader.list.component';
import { ReaderDetailComponent } from './library/reader.detail/reader.detail.component';



const appRoutes: Routes = [
  { path: "bookList", component: BookListComponent },
  { path: "readerList", component: ReaderListComponent },
  { path: "readerDetail/:id", component: ReaderDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
