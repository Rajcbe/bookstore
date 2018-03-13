import { Component, OnInit } from '@angular/core';
import {Author} from "../shared/author.model";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: Author[] = [
    new Author('Chetan Bhagat'),
    new Author('Shakespeare')
  ];
  constructor() { }

  ngOnInit() {
  }

}
