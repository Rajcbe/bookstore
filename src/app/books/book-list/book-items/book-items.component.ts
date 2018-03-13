import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Books} from "../../book.model";
import {BookService} from "../../book.service";

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  @Input() book: Books;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  onSelected(){
    this.bookService.bookSelected.emit(this.book);
  }

}
