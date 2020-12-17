import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../core/datastore.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private dataStore: DatastoreService) { }
  booksInLibrary:any=[]

  ngOnInit(): void {    
    this.dataStore.$booksFromLibrary.subscribe(data=>this.booksInLibrary = data);
    }

}
