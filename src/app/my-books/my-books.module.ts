import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBooksRoutingModule } from './my-books-routing.module';
import { MyBooksComponent } from './my-books.component';
import { SharedUIComponentsModule } from '../shared-ui-components/shared-ui-components.module';


@NgModule({
  declarations: [MyBooksComponent],
  imports: [
    CommonModule,
    MyBooksRoutingModule,
    SharedUIComponentsModule
  ]
})
export class MyBooksModule { }
