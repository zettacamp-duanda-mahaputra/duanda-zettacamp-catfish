import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }



  LIST:List[] = [
    {
      img:"https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title:"Leopard",
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, commodi? Quisquam praesentium odit cupiditate corporis quam beatae id? Tempora, eaque at dolorum quasi quis necessitatibus inventore. Odio sunt adipisci fuga.",
      liked: false
      
    },
    {
      img:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title:"Fox",
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, commodi? Quisquam praesentium odit cupiditate corporis quam beatae id? Tempora, eaque at dolorum quasi quis necessitatibus inventore. Odio sunt adipisci fuga.",
      liked: false
    },
    {
      img:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
      title:"Tortoise",
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, commodi? Quisquam praesentium odit cupiditate corporis quam beatae id? Tempora, eaque at dolorum quasi quis necessitatibus inventore. Odio sunt adipisci fuga.",
      liked: false
    }
  ]

  getList() {
    return this.LIST; 
  }

  updateData(index:any,data:any) {
    this.LIST[index] = data;
    return this.LIST[index];
  }

  

}


