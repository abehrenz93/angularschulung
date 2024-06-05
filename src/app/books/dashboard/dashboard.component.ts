import { Component } from '@angular/core';
import {Book} from "../shared/book";
import {BookComponent} from "../book/book.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BookComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Das Große Praxisbuch',
        price: 40.9,
        rating: 5

      },
      {
        isbn: '43243',
        title: 'Clean Code',
        description: 'make your code more readable',
        price: 22.9,
        rating: 3

      },
      {
        isbn: '223',
        title: 'How to Code',
        description: 'the complete guide how to start with code',
        price: 10.9,
        rating: 5

      },
    ]
  }
}
