import { Injectable } from '@angular/core';
import { User } from './main/user-interface/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  list: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  list$ = this.list.asObservable()


  constructor(private httpClient:HttpClient) {
    this.fetchList().subscribe(data => {
      this.list.next(data)
      console.log(data);
    })
   }

   fetchList():Observable<any>{
    return this.httpClient.get('../assets/list-form.json')
  }


  setAllUsersLists(data: User[]) {
    this.list.next(data);
  }

  addUserToList(data: User) {
    let tempUsers = this.getValuetAllStudentsLists();
    tempUsers.push(data);
    this.setAllUsersLists(tempUsers);
  }

  getValuetAllStudentsLists(): User[] {
    return this.list.getValue();
  }

  updateUser(user: any) {
    const items = this.list.getValue().map(u => {
          return (u.id === user.id) ? user : u;
    });

    this.list.next(items);
}


}
