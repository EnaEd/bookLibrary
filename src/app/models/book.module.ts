import { BookRepository } from './../repositories/book.repository';
import { NgModule } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@NgModule({
providers:[BookRepository,HttpService]
})
export class BookModule{}