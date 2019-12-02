import { Reader } from './../models/reader';
import { Injectable } from "@angular/core";
import { Book } from '../models/book.model';
import { HttpService } from '../services/http.service';

@Injectable()
export class ReaderRepository {
    private readers: Reader[] = [];
    private books: Book[] = [];

    constructor(private httpService: HttpService) {
        httpService.getReaderData().subscribe(data => {
            this.readers = data;
            console.log(data);
        });
        httpService.getBookData().subscribe(data => {
            this.books = data;
        });
    }
    getReaders() {
        return this.readers;
    }

    getReader(id: number): Reader {
        return this.readers.find(reader => reader.id == id);
    }

    getBooksInHand(reader: Reader = null): Book[] {
        if (reader == null) {
            return [].concat(...this.readers.map(x => x.books).
                filter((value, index, self) => self.indexOf(value) == index));//filter for distinct
        }
        return [].concat(...this.readers.filter(item => item.id == reader.id).map(x => x.books).
            filter((value, index, self) => self.indexOf(value) == index)//filter for distinct
        );
    }
}