import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_material';
  menus: any = [];
  isLogin: any
  role: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLogin = localStorage.getItem('userToken');
    this.role = localStorage.getItem('userRole');
  
  }

  isLogout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userId');
    this.router.navigate(['Homepage']).then(() => {
      window.location.reload();
    });
  }

  onCart() {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Cant Acces Cart Before Login',
    });
  }
}
