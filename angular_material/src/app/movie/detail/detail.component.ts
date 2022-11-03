import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private movieService:MovieService, private route:ActivatedRoute) { }

  selectedMovie:any

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      this.selectedMovie = this.movieService.getMovieById(id);
    });    
    
  }

}
