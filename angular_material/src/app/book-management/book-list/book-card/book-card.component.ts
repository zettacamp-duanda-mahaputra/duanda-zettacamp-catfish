import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  
  @Input() items:any

  color:string = ""

  isSelected:boolean = false

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.dataService.selectedBook$.subscribe(data=>{
      this.isSelected = (data != null) && (data.id == this.items.id)
      
    })
    switch (this.items.id) {
      case 0:
        this.color = "salmon"
        break;
      case 1:
        this.color = "cornflowerblue"
        break;
      case 2:
        this.color = "yellow"
        break;
      default:
        break;
    }
  }


  onClick(){
    if(this.isSelected){
      this.dataService.updateSelectedBook(null)
    }else{
      this.dataService.updateSelectedBook(this.items)
    }
    console.log("data")
  }

  




}
