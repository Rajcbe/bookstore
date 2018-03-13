import {Component, Input, OnInit} from '@angular/core';
import {Books} from "../book.model";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() books : Books;
  constructor() { }

  ngOnInit() {
  }

}
