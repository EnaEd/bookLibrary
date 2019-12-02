export class Book{
    id: number;
    category: string;
    author:string;
    title:string;

    constructor(
        id?:number,
        bookTitle?:string,
        author?:string,
        category?:string) {
            this.id=id;
            this.author=author;
            this.category=category;
            this.title=bookTitle;
        }  
}