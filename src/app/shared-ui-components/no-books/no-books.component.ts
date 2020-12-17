import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-no-books',
  templateUrl: './no-books.component.html',
  styleUrls: ['./no-books.component.scss'],
})
export class NoBooksComponent {
  constructor(private router: Router) {}
  goToLibrary() {
    this.router.navigate(['/library']);
  }
}
