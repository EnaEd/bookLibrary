import { StaticDataSource } from './../models/static.data.source';
import { Reader } from './../models/reader';
import { Injectable } from "@angular/core";
import { Book } from '../models/book.model';

@Injectable()
export class ReaderRepository {
    private readers: Reader[] = [];
    private books: Book[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getReaders().subscribe(data => {
            this.readers = data;
        });
        dataSource.getBooks().subscribe(data => {
            this.books = data;
        });
    }
    getReaders() {
        return this.readers;
    }

    getReader(id:number):Reader{
        return this.readers.find(reader=>reader.id==id);
    }

    getBooksInHand(reader: Reader = null): Book[] {
        return this.books.filter(x => {
            if (reader == null) {
                let bookIds = [].concat(...this.readers.map(item => item.books)).
                    filter((value, index, self) => self.indexOf(value) == index);//filter for distinct
                return bookIds.indexOf(x.id)>=0;
            }
            return reader.books.indexOf(x.id) >= 0;
        });
    }
}