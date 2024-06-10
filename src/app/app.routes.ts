import { Routes } from '@angular/router';

export const routes: Routes = [

  // bei einem leeren Pfad (fast) immer pathMatch:full benötigt
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  //...booksRoutes,
  {path: 'books', loadChildren: ()=> import('./books/books.routes').then(
     m => m.booksRoutes
    ) }
];
