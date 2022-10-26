import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { List } from 'src/app/List';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  LIST: List[] = [];
  

  ngOnInit() {
    this.dataService.list$.subscribe((data) => {
      this.LIST = data;
      console.log(this.LIST);
    });


  }
}
