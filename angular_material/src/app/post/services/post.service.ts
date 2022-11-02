import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  getPost() {
    const url = this.API_URL + 'posts/';
    return this.httpClient.get<Post[]>(url);
  }

  getPostById(id: number) {
    const url = this.API_URL + 'posts/' + id;
    return this.httpClient.get<Post[]>(url);
  }

  patchPost(id: any, data: any) {
    const url = this.API_URL + 'posts/' + id;
    return this.httpClient.patch<Post>(url, data);
  }

  addPost(data: any) {
    const url = this.API_URL + 'posts/';
    return this.httpClient.post<Post[]>(url, data);
  }

  deletePost(id: number) {
    const url = this.API_URL + 'posts/' + id;
    return this.httpClient.delete<any>(url);
  }
}
