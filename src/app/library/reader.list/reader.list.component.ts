import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { Reader } from 'src/app/models/reader';
import { ReaderRepository } from 'src/app/repositories/reader.repository';
import { Book } from 'src/app/models/book.model';


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