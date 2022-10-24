import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { List } from 'src/app/list';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [DataService]
})
export class ContentComponent implements OnInit {

  constructor(private dataService:DataService) { }



  LIST:any = []

  ngOnInit(){
     this.dataService.list.subscribe(data=>{
      this.LIST = data
      console.log(this.LIST)
    })
  }

  onClick(data:any): void {
    console.log(data);
    
    this.dataService.updateLike(data.index, data.liked)
  }

}
