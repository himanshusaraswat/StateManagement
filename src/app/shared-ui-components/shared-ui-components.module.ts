import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { MaterialModule } from '../material/material.module';
import { NoBooksComponent } from './no-books/no-books.component';



@NgModule({
  declarations: [BookCardComponent, NoBooksComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[BookCardComponent]
})
export class SharedUIComponentsModule { }
