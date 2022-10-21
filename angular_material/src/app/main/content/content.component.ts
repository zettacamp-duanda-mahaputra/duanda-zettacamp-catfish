import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  list = [
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van (2020)",
      des: "Rp 500.000.000"
    },
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van (1998)",
      des: "Rp 1.000.000.000"
    },
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van (2000)",
      des: "Rp 900.000.000"
    },
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van (2005)",
      des: "Rp 700.000.000"
    }
  ]


  addItem(newItem:any) {
    this.list.push(newItem);
    console.log(newItem)
    console.log(this.list);
    
  }


  constructor() { }

  ngOnInit(): void {
    console.log("Hello")
  }

  

  
  

}
