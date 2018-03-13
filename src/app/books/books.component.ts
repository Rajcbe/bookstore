import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Books} from "./book.model";
import {BookService} from "./book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  selectedBook: Books;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.bookSelected.subscribe(
      (books:Books) => {
        this.selectedBook = books;
      }
    );
  }


}
