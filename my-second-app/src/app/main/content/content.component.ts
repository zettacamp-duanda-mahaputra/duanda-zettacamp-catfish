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
      title: "Van",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos alias tempora aliquid reprehenderit? Ratione quia alias non enim dignissimos impedit aliquid corporis cupiditate. Necessitatibus quisquam optio perferendis vero laboriosam."
    },
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos alias tempora aliquid reprehenderit? Ratione quia alias non enim dignissimos impedit aliquid corporis cupiditate. Necessitatibus quisquam optio perferendis vero laboriosam."
    },
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos alias tempora aliquid reprehenderit? Ratione quia alias non enim dignissimos impedit aliquid corporis cupiditate. Necessitatibus quisquam optio perferendis vero laboriosam."
    },
    {
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: "Van",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos alias tempora aliquid reprehenderit? Ratione quia alias non enim dignissimos impedit aliquid corporis cupiditate. Necessitatibus quisquam optio perferendis vero laboriosam."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
