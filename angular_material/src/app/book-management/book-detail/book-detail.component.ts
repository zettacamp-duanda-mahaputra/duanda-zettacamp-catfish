import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { List } from 'src/app/List';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private dataService:DataService) { }

  selectedBook:any

  ngOnInit(){
    this.dataService.selectedBook$.subscribe(data=>{
      this.selectedBook = data
      console.log(this.selectedBook)
    })
    
  }

}
