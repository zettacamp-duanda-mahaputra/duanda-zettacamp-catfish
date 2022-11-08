import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserManagementService } from '../user-management.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[] = [];
  searchName = new FormControl('');

  constructor(private userManagementService: UserManagementService) { }

  ngOnInit(): void {
    this.searchName.valueChanges.subscribe((search: any) => {
      if (search.length > 3) {
        this.userManagementService
          .getUsers(search)
          .subscribe((resp: any) => {
            this.users = resp.data.GetAllUsers;
          });
      }else {
        this.users = [];
      }
    });
  }

}
