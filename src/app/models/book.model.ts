export class Book{
    id: number;
    category: string;
    author:string;
    bookTitle:string;

    constructor(
        id?:number,
        bookTitle?:string,
        author?:string,
        category?:string) {
            this.id=id;
            this.author=author;
            this.category=category;
            this.bookTitle=bookTitle;
        }  
}