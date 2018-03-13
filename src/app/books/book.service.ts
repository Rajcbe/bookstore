import {Books} from "./book.model";

export class BookService{
 private books : Books[] = [
    new Books('2 States' , 'Fiction and Love'),
    new Books('The Devil in the White City' , 'Murder, Magic, and Madness ')
  ];
 getBooks(){
   return this.books.slice();
 }
}
