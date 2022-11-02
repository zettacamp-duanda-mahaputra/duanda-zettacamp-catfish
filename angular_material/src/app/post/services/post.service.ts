import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/'; 

  constructor(private httpClient:HttpClient) { }

  getPost(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/')
  }

  getPostById(id:number){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/'+ id)
  }

  patchPost(id:number, data:Post){
    const url = this.API_URL + 'posts/' + id
    return this.httpClient.patch<Post>(url,data)
  }


}
