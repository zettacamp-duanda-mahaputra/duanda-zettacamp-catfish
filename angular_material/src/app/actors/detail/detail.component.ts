import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private actorsService:ActorsService, private route:ActivatedRoute) { }

  selectedActors:any

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      this.selectedActors = this.actorsService.getActorsById(id);
    });  
  }

}
