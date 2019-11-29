import { Router } from '@angular/router';
import { Reader } from './../models/reader';
import { ReaderRepository } from './../repositories/reader.repository';
import { Component } from "@angular/core";
import { Book } from '../models/book.model';

@Component({
    selector: "readerList",
    templateUrl: "reader.list.component.html"
})
export class ReaderListComponent {

    public selectedReader: Reader = null;

    constructor(private readerRepository: ReaderRepository,private router:Router) {

    }

    get Readers(): Reader[] {
        return this.readerRepository.getReaders();
    }

    get BooksInHand(): Book[] {
        return this.readerRepository.getBooksInHand(this.selectedReader);
    }

    changeReader(newReader?: Reader) {
        this.selectedReader = newReader;
    }
    toDetailReader(readerId:number){
        this.router.navigate(['readerDetail',readerId]);
    }

}