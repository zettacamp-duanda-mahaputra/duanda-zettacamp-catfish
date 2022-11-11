import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  user$ = this.user.asObservable()


  private readonly API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { 
    this.getUser().subscribe(data =>{
      this.user.next(data)
    })
  }

  getUser() {
    const url = this.API_URL + 'users/';
    return this.httpClient.get<User[]>(url);
  }

  getUserById(id: number) {
    const url = this.API_URL + 'users/' + id;
    return this.httpClient.get<User[]>(url);
  }

  addUser(data: any) {
    data.id = this.findBiggestNumber()+1
    const url = this.API_URL + 'users/';
    return this.httpClient.post<User[]>(url, data).subscribe((value:any)=>this.addUserToData(value))
  }

  addUserToData(data: User){
    let allUser = this.user.getValue()
    allUser.push(data)
    this.setAllPostData(allUser)
  }

  fetchAllData():User[]{
    return this.user.getValue()
  }

  setAllPostData(data:User[]){
    return this.user.next(data)
  }

  findBiggestNumber(){
    let users = this.user.getValue();
    
    if (users.length == 0) return 0;

    const ids = users.map(value =>{
      return value.id;
      
    })

    return Math.max(...ids);
  }

  

}
