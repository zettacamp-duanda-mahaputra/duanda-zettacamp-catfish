import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from '../user-interface/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  List:User[] = []
  filterBy:string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.list$.subscribe((data) => {
      this.List = data;
      console.log(this.List);
    });

    
  }

  

}
