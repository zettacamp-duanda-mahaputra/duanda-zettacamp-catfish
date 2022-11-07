import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { User } from './user.model';
import { UserService } from './user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_material';
 

  displayedColumns: string[] = [
    'civility',
    'first_name',
    'last_name',
    'date_of_birth',
    'gender',
  ];
  dataSource = new MatTableDataSource<User>();

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      this.userService.addUser(result);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data Completed',
      });
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
