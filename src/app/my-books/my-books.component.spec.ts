import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBooksComponent } from './my-books.component';
import { MyBooksStoreService } from '../core/my-books-store.service';
import { SnackBarService } from 'src/app/core/utility-service/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBooksComponent ],
      imports: [
        MatSnackBarModule
      ],
      providers : [
        MyBooksStoreService,
        SnackBarService
      
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
