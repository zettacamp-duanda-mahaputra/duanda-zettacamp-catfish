import { JSDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.invalid) {};

    const value = this.myForm.value;
    this.loginService
      .getToken(value)
      .pipe(
        map((data: any) => {
          return data.data.loginUser;
        })
      )
      .subscribe({
        next: (data: any) => this.successHandler(data),
        error: (error: any) => this.errorHandler(error),
      });
  }

  successHandler(data: any) {
    console.log(data);

    let userToken = data.token;
    let userRole = data.userType.role;
    let userId = data._id

    localStorage.setItem('userToken', userToken);
    localStorage.setItem('userRole', userRole);
    localStorage.setItem('userId', userId);

      this.router.navigate(['Homepage']).then(()=>{
              window.location.reload()
    })
  }

  errorHandler(error: any) {
    console.log(error);
    
    Swal.fire('Failed', 'Not Completed', 'error');
  }
}

//   onSubmit() {
//     if (this.myForm.valid) {
//       const payload: any = this.myForm.value;
//       this.loginService.getToken(payload).subscribe((resp: any) => {
//         if (resp) {
//           window.location.reload()    
//         }
//       })
//     } else {
//       if (!this.myForm.valid) {
//         Swal.fire({
//           icon: 'error',
//           title: 'email or password invalid !',
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'email or password invalid !',
//         });
//       }  
//     }
//   }
// }

