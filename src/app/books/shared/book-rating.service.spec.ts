import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import {Book} from "./book";

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    book = {
      isbn: '1234',
      title: 'Test Book',
      rating: 3,
      price: 10,
      description: 'Description of Test Book'
    };

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase rating by one', () => {
    //ARRANGE
    book.rating = 3;

    //ACT
    service.doRateUp(book);
    //ASSERTATION
    expect(book.rating).toBe(4);
  });

  it('should decrease rating by one', () => {
    service.doRateDown(book);
    //ASSERTATION
    expect(book.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    book.rating = 5;
    service.doRateUp(book);
    expect(book.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    service.doRateDown(book);
    expect(book.rating).toBe(1);
  });
});
