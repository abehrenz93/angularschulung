import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.angular.schule';

  constructor() { }

  getAll():Observable<Book[]> {
    return this.http.get<Book[]>( this.apiUrl + '/books');
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn);
  }
  getSingleSlow(isbn: string){
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn + '/slow')
  }

  create(book: Book) {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  search(term: string){
    return this.http.get<Book[]>(this.apiUrl + '/books/search/' + term);
  }

  deleteBook(isbn: string) {
    return this.http.delete( this.apiUrl + '/books/' + isbn);
  }
}
