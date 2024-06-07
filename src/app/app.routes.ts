import { Routes } from '@angular/router';
import {booksRoutes} from "./books/books.routes";

export const routes: Routes = [

  // bei einem leeren Pfad (fast) immer pathMatch:full benötigt
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  ...booksRoutes,
];
