import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../shared/book";
import {Router} from "@angular/router";
import {BookStoreService} from "../shared/book-store.service";

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {
  private router = inject(Router);
  private bs = inject(BookStoreService);
  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(100),
      ]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: []
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0),
      ]
    }),
  })

  submitForm() {
    const newBook: Book = this.bookForm.getRawValue();
    this.bs.create(newBook).subscribe(
      (response) => {
        alert("Buch erfolgreich hinzugefügt");
        this.router.navigate(['/books', response.isbn]);
      },
      (e) => {
        alert(e.error.error)
      })

  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) return false
    return control.touched && control.invalid
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.bookForm.get(controlName);
    if (!control) return false
    // console.log(control.getError(errorCode))
    // console.log(control.errors);
    return control.hasError(errorCode)

  }
}
