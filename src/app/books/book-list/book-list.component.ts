import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Books} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() bookIsSelected = new EventEmitter<Books>();
  books : Books[] ;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
  onBookSelected(book : Books){
    this.bookIsSelected.emit(book);
  }

}
