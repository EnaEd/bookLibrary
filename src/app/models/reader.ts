import { Book } from './book.model';
export class Reader{
    id: number;
    name: string;
    books: number[];
    

    constructor(
        id?:number,
        name?:string,
        books?:number[]) {
            this.id=id;
            this.name=name;
            this.books=books
        }
}