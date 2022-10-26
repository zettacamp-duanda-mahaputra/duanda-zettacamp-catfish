import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private dataService:DataService, private route: ActivatedRoute) { }

  selectedBook:any

  ngOnInit(){
    // // this.dataService.selectedBook$.subscribe(data=>{
    // //   this.selectedBook = data
    // //   console.log(this.selectedBook)
    // })
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      this.selectedBook = this.dataService.getBookById(id);
    });
  }

}
