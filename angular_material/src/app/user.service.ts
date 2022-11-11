import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getUser() {
    const url = this.API_URL + 'users/';
    return this.httpClient.get<User[]>(url);
  }

  getUserById(id: number) {
    const url = this.API_URL + 'users/' + id;
    return this.httpClient.get<User[]>(url);
  }

  addUser(data: any) {
    const url = this.API_URL + 'users/';
    return this.httpClient.post<User[]>(url, data);
  }

}
