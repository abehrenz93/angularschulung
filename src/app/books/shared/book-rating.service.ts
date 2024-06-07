import { Injectable } from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {
  minValue: number = 1;
  maxValue: number = 5;

  constructor() {}

  doRateDown(book: Book) {
    return {
      ...book,
      rating: book.rating === this.minValue ? book.rating: book.rating - 1,
    }
  }

  doRateUp(book: Book) {
    return {
      ... book,
      rating: book.rating ===  this.maxValue ? book.rating : book.rating + 1,
    }
  }

}
