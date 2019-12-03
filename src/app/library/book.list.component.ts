import { Routes } from '@angular/router';
import { BookRepository } from './../repositories/book.repository';
import { Component } from "@angular/core";
import { Book } from '../models/book.model';

@Component({
    selector: "bookList",
    templateUrl: "book.list.component.html"
})
export class BookListComponent {
    public selectedCategory = null;
    public bookPerPage = 4;
    public selectedPage = 1;
    constructor(private repository: BookRepository) { }

    get books(): Book[] {
        let pageIndex = (this.selectedPage - 1) * this.bookPerPage;
        return this.repository.getBooks(this.selectedCategory)
            .splice(pageIndex, this.bookPerPage); //splice returned array from index for deletedcaunt
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
        this.changePage(1)//for start first page on new category
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
        this.bookPerPage = Number(newSize);
        this.changePage(1);// 1 for apply new index's array
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getBooks(this.selectedCategory).length / this.bookPerPage);
    }

}