import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actors } from '../models/actors';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  actors: BehaviorSubject<Actors[]> = new BehaviorSubject<Actors[]>([]);
  actors$ = this.actors.asObservable();

  selectedActors: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedActors$ = this.selectedActors.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe((data) => {
      this.actors.next(data);
      console.log(data);
    });
  }
  fetchData() {
    return this.httpClient.get<Actors[]>('../assets/static/actors.json');
  }

  updateSelectedActors(data: any) {
    this.selectedActors.next(data);
  }

  getActors(): Actors[] {
    return this.actors.getValue();
  }

  getActorsById(id: number): Actors {
    return this.getActors().filter((item) => item.id == id)[0];
  }
}
