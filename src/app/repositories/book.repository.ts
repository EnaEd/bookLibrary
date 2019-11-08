import { StaticDataSource } from './../models/static.data.source';
import { Injectable } from "@angular/core";
import { Book } from '../models/book.model';

@Injectable()
export class BookRepository {
    private books: Book[] = [];
    private categories: string[] = [];

    constructor(private datasource: StaticDataSource) {
        datasource.getBooks().subscribe(data => {
            this.books = data;
            this.categories = data.map(p => p.category).filter((x, index, array) => array.indexOf(x) == index).sort();
        });
    }
    getBooks(category: string = null): Book[] {
        return this.books.filter(x => category == null || x.category == category);
    }

    getBook(book:Book):Book{
        return this.books.find(x=>x.id==book.id);
    }

    getAuthorsBook(author:string):Book[]{
        return this.books.filter(x=>x.author.includes(author));
    }

    getCategories():string[]{
        return this.categories;
    }
}