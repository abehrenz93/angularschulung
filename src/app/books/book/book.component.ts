import {Component, Input, output} from '@angular/core';
import {Book} from "../shared/book";
import {RatingComponent} from "./rating/rating.component";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    RatingComponent,
    CurrencyPipe
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  // hier fließen Daten von der Elternkomponente hinein
  // von oben nach unten
  @Input({required: true}) book?: Book;

  // hier fließen Daten zur Elternkomponente hinaus
  // von unten nach oben
  // @Output() rateUp = new EventEmitter<Book>();
  // @Output() rateDown = new EventEmitter<Book>();
  rateUp = output<Book>()
  rateDown = output<Book>()

  doRateDown() {
    // bitte immer prüfen ob es wirklich ein Buch ist denn:
    // beim Empfangen des Events ist der Typ "Book" und nicht mehr "Book  undefinded"
    if (this.book) {
      this.rateDown.emit(this.book);
    }

  }


  doRateUp() {
    if (this.book) {
      this.rateUp.emit(this.book);
    }
  }

}
