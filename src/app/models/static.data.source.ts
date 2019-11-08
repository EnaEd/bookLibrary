import { Injectable } from "@angular/core";
import { Book } from './book.model';
import { Observable } from 'rxjs';
import { from as observableFrom  } from 'rxjs';

//false data, delete after start api
@Injectable()
export class StaticDataSource {
    private books: Book[] = [
        new Book(1, "The Lord of the Rings", "JRR Tolkien", "Fantasy"),
        new Book(2, "Pride and Prejudice", "Jane Austen", "BestSeller"),
        new Book(3, "His Dark Materials", "Philip Pullman", "BestSeller"),
        new Book(4, "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "BestSeller"),
        new Book(5, "Harry Potter and the Goblet of Fire", "JK Rowling", "Child"),
        new Book(6, "To Kill a Mockingbird", "Harper Lee", "BestSeller"),
        new Book(7, "Winnie the Pooh", "AA Milne", "Child"),
        new Book(8, "Nineteen Eighty-Four", "George Orwell", "BestSeller"),
        new Book(9, "The Lion, the Witch and the Wardrobe", "CS Lewis", "BestSeller"),
        new Book(10,"The Hobbit", "JRR Tolkien","Fantasy")];
        
    getBooks(): Observable<Book[]> {
        return observableFrom([this.books]);
    }
    //#region booklist
    // 10. Jane Eyre, Charlotte Brontë
    // 11. Catch-22, Joseph Heller
    // 12. Wuthering Heights, Emily Brontë
    // 13. Birdsong, Sebastian Faulks
    // 14. Rebecca, Daphne du Maurier
    // 15. The Catcher in the Rye, JD Salinger
    // 16. The Wind in the Willows, Kenneth Grahame
    // 17. Great Expectations, Charles Dickens
    // 18. Little Women, Louisa May Alcott
    // 19. Captain Corelli's Mandolin, Louis de Bernieres
    // 20. War and Peace, Leo Tolstoy
    // 21. Gone with the Wind, Margaret Mitchell
    // 22. Harry Potter And The Philosopher's Stone, JK Rowling
    // 23. Harry Potter And The Chamber Of Secrets, JK Rowling
    // 24. Harry Potter And The Prisoner Of Azkaban, JK Rowling
    // 25. The Hobbit, JRR Tolkien
    // 26. Tess Of The D'Urbervilles, Thomas Hardy
    // 27. Middlemarch, George Eliot
    // 28. A Prayer For Owen Meany, John Irving
    // 29. The Grapes Of Wrath, John Steinbeck
    // 30. Alice's Adventures In Wonderland, Lewis Carroll
    // 31. The Story Of Tracy Beaker, Jacqueline Wilson
    // 32. One Hundred Years Of Solitude, Gabriel García Márquez
    // 33. The Pillars Of The Earth, Ken Follett
    // 34. David Copperfield, Charles Dickens
    // 35. Charlie And The Chocolate Factory, Roald Dahl
    // 36. Treasure Island, Robert Louis Stevenson
    // 37. A Town Like Alice, Nevil Shute
    // 38. Persuasion, Jane Austen
    // 39. Dune, Frank Herbert
    // 40. Emma, Jane Austen
    // 41. Anne Of Green Gables, LM Montgomery
    // 42. Watership Down, Richard Adams
    // 43. The Great Gatsby, F Scott Fitzgerald
    // 44. The Count Of Monte Cristo, Alexandre Dumas
    // 45. Brideshead Revisited, Evelyn Waugh
    // 46. Animal Farm, George Orwell
    // 47. A Christmas Carol, Charles Dickens
    // 48. Far From The Madding Crowd, Thomas Hardy
    // 49. Goodnight Mister Tom, Michelle Magorian
    // 50. The Shell Seekers, Rosamunde Pilcher
    //#endregion
}