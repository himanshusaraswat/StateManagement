import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full',
  },
  {
    path: 'library',
    component: LibraryComponent,
    pathMatch: 'full',
  },
  {
    path: 'my-books',
    loadChildren: () =>
      import('./my-books/my-books.module').then((m) => m.MyBooksModule),
  },
  {
    path:'**',
    redirectTo:'library'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
