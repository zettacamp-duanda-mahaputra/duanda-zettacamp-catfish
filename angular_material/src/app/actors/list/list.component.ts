import { Component, OnInit } from '@angular/core';
import { Actors } from 'src/app/models/actors';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:Actors[] = []

  constructor(private actorsService:ActorsService) { }

  ngOnInit(){
    this.actorsService.fetchData().subscribe(data =>{
      this.list = data
      console.log(this.list)
    })
  }

}
