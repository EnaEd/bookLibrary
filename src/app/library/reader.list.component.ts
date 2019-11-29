import { Reader } from './../models/reader';
import { ReaderRepository } from './../repositories/reader.repository';
import { BookRepository } from './../repositories/book.repository';
import { Component } from "@angular/core";
import { Book } from '../models/book.model';

@Component({
    selector: "readerList",
    templateUrl: "reader.list.component.html"
})
export class ReaderListComponent {

    public selectedReader:Reader = null;

    constructor(private readerRepository: ReaderRepository, private bookRepository: BookRepository) {

    }

    get Readers(): Reader[] {
        return this.readerRepository.getReaders();
    }

    get BooksInHand(): Book[] {
        return this.readerRepository.getBooksInHand(this.selectedReader);
    }

    
}