import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from './List';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  list: BehaviorSubject<List[]> = new BehaviorSubject<List[]>([]);
  list$ = this.list.asObservable()

  selectedBook: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  selectedBook$ = this.selectedBook.asObservable()
  
  constructor(private httpClient: HttpClient) { 
    this.fetchList().subscribe(data => {
      this.list.next(data)
      console.log(data);
      
    })
  }

  fetchList():Observable<any>{
    return this.httpClient.get('../../assets/list.json')
  }

  updateSelectedBook(data:any){
    this.selectedBook.next(data)
  }

  getBooks(): List[] {
    return this.list.getValue()
  }

  getBookById(id: number): List {
    return this.getBooks().filter(item => item.id == id)[0];
  }
}
