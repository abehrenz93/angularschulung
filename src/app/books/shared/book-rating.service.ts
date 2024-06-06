import { Injectable } from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() {}

  doRateDown(book: Book) {
    return {
      ...book,
      rating: book.rating === 1 ? book.rating: book.rating--,
    }
  }

  doRateUp(book: Book) {
    return {
      ... book,
      rating: book.rating ===  5 ? book.rating : book.rating++,
    }
  }

}
