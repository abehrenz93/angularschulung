import {Component, inject, signal} from '@angular/core';
import {Book} from "../shared/book";
import {BookComponent} from "../book/book.component";
import {BookRatingService} from "../shared/book-rating.service";
import {BookStoreService} from "../shared/book-store.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BookComponent,
    DatePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];
  bookRatingService = inject(BookRatingService);
  private bs = inject(BookStoreService);
  uhrzeit = signal(Date.now());
  private uhrzeitInterval = 0;


  constructor() {
    this.bs.getAll().subscribe(
      books => this.books = books
    );
    this.uhrzeitInterval = setInterval(()=>{console.log("interval läuft") ; this.uhrzeit.set(Date.now()) ;}, 1000);


    // this.bs.getAll().subscribe({
    //   next: books => {
    //     this.books = books
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err);
    //   }
    // })
  }

  ngOnDestroy(){
    clearInterval(this.uhrzeitInterval);
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
      this.bs.deleteBook(book.isbn).subscribe( ()=> {

        this.books = this.books.filter(b => b.isbn !== book.isbn);
        alert("Buch wurde erfolgreich gelöscht");
      })
    } else {
      alert("Buch wurde nicht gelöscht")
    }

  }

}
