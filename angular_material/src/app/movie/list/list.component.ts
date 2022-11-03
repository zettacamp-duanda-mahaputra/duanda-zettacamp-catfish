import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:Movie[] = []

  constructor(private movieService:MovieService) { }

  ngOnInit(){
    this.movieService.fetchData().subscribe(data =>{
      this.list = data
      console.log(this.list)
    })
  }

}
