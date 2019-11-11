import { CounterDirective } from './counter.derective';
import { BookListComponent } from './book.list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookModule } from './../models/book.module';
import { NgModule } from "@angular/core";
import{ReaderListComponent} from './reader.list.component'
import { from } from 'rxjs';


@NgModule({
    imports:[BookModule,BrowserModule],
    declarations:[BookListComponent,CounterDirective],
    exports:[BookListComponent]
})
export class BookListModule{}