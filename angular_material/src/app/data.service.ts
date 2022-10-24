import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from './list';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  list: BehaviorSubject<List[]> = new BehaviorSubject<List[]>([]);

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe(data => {
      this.list.next(data)
      console.log(data);
      
    })
  }

  fetchData():Observable<any>{
    return this.httpClient.get('../../assets/data.json')
  }

  updateLike(index:any,liked:boolean){
    const list = this.list.getValue();
    list[index].liked = liked;
    this.list.next(list)
  }
}
