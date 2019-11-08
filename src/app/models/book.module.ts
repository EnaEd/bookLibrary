import { StaticDataSource } from './static.data.source';
import { BookRepository } from './../repositories/book.repository';
import { NgModule } from "@angular/core";

@NgModule({
providers:[BookRepository,StaticDataSource]
})
export class BookModule{}