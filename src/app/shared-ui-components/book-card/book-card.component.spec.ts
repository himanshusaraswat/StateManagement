import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatastoreService } from 'src/app/core/datastore.service';
import { MyBooksStoreService } from 'src/app/core/my-books-store.service';
import { SnackBarService } from 'src/app/core/utility-service/snack-bar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookCardComponent } from './book-card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ BookCardComponent ],
      providers : [
        DatastoreService,
        MyBooksStoreService,
        SnackBarService
      
      ]
    })
    .compileComponents();
  });

  // beforeEach(() => {
    
  //   fixture = TestBed.createComponent(BookCardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookCardComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});
