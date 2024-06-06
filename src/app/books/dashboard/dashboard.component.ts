import {Component, inject} from '@angular/core';
import {Book} from "../shared/book";
import {BookComponent} from "../book/book.component";
import {BookRatingService} from "../shared/book-rating.service";

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
  bookRatingService = inject(BookRatingService);

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

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingService.doRateDown(book);
    this.updateList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingService.doRateUp(book);
    this.updateList(ratedBook);
  }

  private updateList(changedBook: Book) {
    this.books = this.books.map(b => {
      if (b.isbn === changedBook.isbn) {
        return changedBook;
      } else {
        return b
      }
    })
  }
}
