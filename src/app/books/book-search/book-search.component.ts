import {Component, inject, } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, filter, switchMap} from "rxjs";
import {BookStoreService} from "../shared/book-store.service";
import {RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {
  searchControl = new FormControl('', {nonNullable: true})
  private bs = inject(BookStoreService);
  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(500),
    filter((searchValue)=> searchValue.length >= 3),
    switchMap( searchValue => this.bs.search(searchValue) )
  )
  resultList = toSignal(this.results$);


}
