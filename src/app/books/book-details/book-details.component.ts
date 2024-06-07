import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BookStoreService} from "../shared/book-store.service";
import {Book} from "../shared/book";
import {RatingComponent} from "../book/rating/rating.component";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    RouterLink,
    RatingComponent
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  private route = inject(ActivatedRoute);
  private bs = inject(BookStoreService);
  book?: Book;

  constructor(){
    //PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn');


    //PUSH
    this.route.paramMap.subscribe(
      (params) => {
        const isbn = params.get('isbn')!;

        this.bs.getSingle(isbn).subscribe(
          (book)=> this.book = book
        )


      }
    )
  }
}
