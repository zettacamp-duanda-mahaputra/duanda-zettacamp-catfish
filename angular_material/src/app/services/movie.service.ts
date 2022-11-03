import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actors } from '../models/actors';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movie$ = this.movie.asObservable()

  selectedMovie: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  selectedMovie$ = this.selectedMovie.asObservable()

  constructor(private httpClient:HttpClient) {
      this.fetchData().subscribe(data =>{
        this.movie.next(data)
        console.log(data)
      })
   }

   fetchData(){
    return this.httpClient.get<Movie[]>('../assets/static/movie.json')
   }

   updateSelectedMovie(data:any){
    this.selectedMovie.next(data)
  }

  getMovie(): Movie[] {
    return this.movie.getValue()
  }

  getMovieById(id: number): Movie {
    
    return this.getMovie().filter(item => item.id == id)[0];
  }


}
