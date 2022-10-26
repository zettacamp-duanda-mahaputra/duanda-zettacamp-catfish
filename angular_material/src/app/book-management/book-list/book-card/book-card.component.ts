import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  
  @Input() items:any

  color:string = ""

  isSelected:boolean = false

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(){
    this.dataService.selectedBook$.subscribe(data=>{
      this.isSelected = (data != null) && (data.id == this.items.id)
    })
  }


  onClick(items:any){
    this.router.navigate([`detail/${items.id}`])

  }

}
