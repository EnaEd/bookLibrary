import { Book } from './book.model';
export class Reader{
    id: number;
    name: string;
    books: Book[];
    

    constructor(
        id?:number,
        name?:string,
        books?:Book[]) {
            this.id=id;
            this.name=name;
            this.books=books
        }
}