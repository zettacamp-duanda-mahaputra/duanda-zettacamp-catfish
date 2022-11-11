import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  users:User[] = []
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(data =>{
      this.users = data
    })
  }

}
