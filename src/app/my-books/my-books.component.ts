import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MyBooksStoreService } from '../core/my-books-store.service';
import { VIEWS } from '../config/constants';
@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss'],
})
export class MyBooksComponent implements OnInit {
  constructor(private myBooks: MyBooksStoreService) {}
  borrowedBooks: any = [];
  currentView = VIEWS.MY_BOOKS;
  ngOnInit(): void {
    this.myBooks.$myBooks
      .subscribe((data) => (this.borrowedBooks = data));
  }
}
