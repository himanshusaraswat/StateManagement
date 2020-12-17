import { Component, OnInit, Input } from '@angular/core';
import { DatastoreService } from 'src/app/core/datastore.service';
import { MyBooksStoreService } from 'src/app/core/my-books-store.service';
import { ACTION_ON_BOOK, VIEWS } from '../../config/constants';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() view: string = VIEWS.LIBRARY; //SET DEFAULT VIEW
  @Input() books = [];
  actionOnBooks = ACTION_ON_BOOK;
  availableViews = VIEWS;
  actionTootipText: string = '';

  constructor(
    private library: DatastoreService,
    private myBooks: MyBooksStoreService
  ) {}

  ngOnInit(): void {
    this.actionTootipText =
      this.view === VIEWS.LIBRARY
        ? ACTION_ON_BOOK.BORROW_TOOLTIP_TEXT
        : ACTION_ON_BOOK.RETURN_TOOLTIP_TEXT;
  }

  trackByID(index: number, book: any) {
    return book.id;
  }

  actionOnBook(book: {}, view: string) {
    switch (view) {
      case VIEWS.LIBRARY:
        if (this.myBooks.allowToBorrow(book, this.myBooks.getMyBooksState())) {
          this.library.setLibraryState(book, ACTION_ON_BOOK.BORROW);
          this.myBooks.setMyBooksState(book, ACTION_ON_BOOK.BORROW);
        }
        break;
      case VIEWS.MY_BOOKS:
        this.library.setLibraryState(book, ACTION_ON_BOOK.RETURN);
        this.myBooks.setMyBooksState(book, ACTION_ON_BOOK.RETURN);
        break;
    }
  }
}
