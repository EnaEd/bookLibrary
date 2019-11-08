import { BookListComponent } from './book.list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookModule } from './../models/book.module';
import { NgModule } from "@angular/core";


@NgModule({
    imports:[BookModule,BrowserModule],
    declarations:[BookListComponent],
    exports:[BookListComponent]
})
export class BookListModule{}