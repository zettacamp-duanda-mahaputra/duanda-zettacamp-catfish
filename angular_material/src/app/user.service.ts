import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  user$ = this.user.asObservable();

  constructor() {}

  getUsers(): User[] {
    return this.user.getValue();
  }

  addUser(data: User) {
    const users = this.getUsers();
    users.push(data);
    this.user.next(users);
  }
}
