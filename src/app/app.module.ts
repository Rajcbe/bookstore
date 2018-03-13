import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { GenreComponent } from './genre/genre.component';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { BookItemsComponent } from './books/book-list/book-items/book-items.component';
import { BookListComponent } from './books/book-list/book-list.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {BookService} from "./books/book.service";

const appRoutes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'genre',
    component: GenreComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    GenreComponent,
    AuthorComponent,
    HeaderComponent,
    BookDetailsComponent,
    BookEditComponent,
    AuthorEditComponent,
    BookItemsComponent,
    BookListComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
