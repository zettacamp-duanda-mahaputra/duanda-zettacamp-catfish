import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../models/table';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  table: BehaviorSubject<Table[]> = new BehaviorSubject<Table[]>([]);
  table$ = this.table.asObservable()

  constructor(private httpClient:HttpClient) {
    this.fetchData().subscribe(data =>{
      this.table.next(data)
    })
   }

  fetchData():Observable<any>{
    return this.httpClient.get('../../../assets/mentor.json')
  }

}
