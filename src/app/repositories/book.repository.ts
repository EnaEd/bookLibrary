import { Book } from './../models/book.model';
import { HttpService } from './../services/http.service';
import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class BookRepository {

    private books: Book[] = [];
    private categories: string[] = [];
    private error: HttpErrorResponse;


    constructor(private httpService: HttpService) {
        this.httpService.getBookData().
            subscribe(data => {
                this.books = data;
                this.categories = data.map(p => p.category).filter((x, index, array) => array.indexOf(x) == index).sort();
            },
                err => this.error = err
            );
    }
    getBooks(category: string = null): Book[] {
        return this.books.filter(x => category == null || x.category == category);
    }

    getBook(book: Book): Book {
        return this.books.find(x => x.id == book.id);
    }

    getAuthorsBook(author: string): Book[] {
        return this.books.filter(x => x.author.includes(author));
    }

    getCategories(): string[] {
        return this.categories;
    }
}