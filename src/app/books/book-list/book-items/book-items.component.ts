import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Books} from "../../book.model";

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  @Input() book: Books;
  @Output() bookSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.bookSelected.emit();
  }

}
