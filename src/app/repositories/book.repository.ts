import { Book } from './../models/book.model';
import { HttpService } from './../services/http.service';
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookRepository {
    
    private books: Book[] = [];
    private categories: string[] = [];
    

    constructor(private httpService :HttpService)  {
        // datasource.getBooks().subscribe(data => {
        //     this.books = data;
        //     this.categories = data.map(p => p.category).filter((x, index, array) => array.indexOf(x) == index).sort();
        // });
        this.httpService.getBookData().
        subscribe(data => {
            this.books = data;
            console.log(data);
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