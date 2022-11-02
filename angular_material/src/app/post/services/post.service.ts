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
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getPostById(id: number) {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  patchPost(id: any, data: any) {
    const url = this.API_URL + 'posts/' + id;
    return this.httpClient.patch<Post>(url, data);
  }

  addPost(data: any) {
    return this.httpClient.post<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      data
    );
  }

  deletePost(id: number){
    const url = this.API_URL + 'posts/' + id;
    return this.httpClient.delete<any>(url);
    
}

  
}
