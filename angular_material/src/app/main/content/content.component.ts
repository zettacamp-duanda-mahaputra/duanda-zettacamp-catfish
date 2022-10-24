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
    this.LIST = this.dataService.LIST
    console.log(this.LIST)
  }

  onClick(index:any): void {
    const data = this.LIST[index];
          data.liked = !data.liked;
    
    this.LIST[index] = this.dataService.updateData(index,data);
  }

}
