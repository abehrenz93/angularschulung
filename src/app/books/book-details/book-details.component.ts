import {Component, inject, input} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BookStoreService} from "../shared/book-store.service";
import {Book} from "../shared/book";
import {RatingComponent} from "../book/rating/rating.component";
import {map, switchMap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    RouterLink,
    RatingComponent,
    AsyncPipe
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  private route = inject(ActivatedRoute);
  private bs = inject(BookStoreService);
  book?: Book;
  isbn = input<string>();

  book$ = this.route.paramMap.pipe(
    map(params => params.get('isbn')!),
    switchMap( isbn => this.bs.getSingle(isbn))
  )

  bookSignal = toSignal(this.book$);

  constructor(){
    //PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn');


    //PUSH

    // Verschachtelung
    // this.route.paramMap.subscribe(
    //   (params) => {
    //     const isbn = params.get('isbn')!;
    //     // const slowisbn = '9783864907845'
    //
    //     // this.bs.getSingleSlow(slowisbn).subscribe(
    //     //   (book) => this.book = book
    //     // )
    //     this.bs.getSingle(isbn).subscribe(
    //       (book)=> this.book = book
    //     )
    //   }
    // )

    //ohne Verschachtelung

    // this.route.paramMap.pipe(
    //   map(params => params.get('isbn')!),
    //   switchMap( isbn => this.bs.getSingle(isbn))
    // ).subscribe((book)=>
    //   {
    //     this.book = book;
    //   }
    // )

    // ohne subscription
    // direkt vor

  }
}
