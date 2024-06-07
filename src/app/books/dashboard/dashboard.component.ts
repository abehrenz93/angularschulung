import {Component, inject} from '@angular/core';
import {Book} from "../shared/book";
import {BookComponent} from "../book/book.component";
import {BookRatingService} from "../shared/book-rating.service";
import {BookStoreService} from "../shared/book-store.service";

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
  private bs = inject(BookStoreService);

  constructor() {
    this.bs.getAll().subscribe(
      books => this.books = books
    );

    // this.bs.getAll().subscribe({
    //   next: books => {
    //     this.books = books
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err);
    //   }
    // })
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

  deleteBook(book: Book) {
    const confirmationDialog = confirm(`Willst du das Buch ${book.title} wirklick löschen ?`);

    if (confirmationDialog) {
      this.bs.deleteBook(book.isbn);
      this.books = this.books.filter(b => b.isbn !== book.isbn);
      alert("Buch wurde erfolgreich gelöscht");
    }else{
      alert("Buch wurde nicht gelöscht")
    }

  }
}
