import { JSDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    email: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  })

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.myForm.valid){
      this.loginService.getToken(this.myForm.value).subscribe((data:any) =>{
        let userData = data.data.loginUser.userType.permission
        let userToken = data.data.loginUser.token
        let userId = data.data.loginUser._id
        for(let user of userData){
          user.routing = `${user.page}`
          if(user.page === 'Login'){
            user.view = false
          }
          console.log(user);
          console.log(user.page);
        }
        localStorage.setItem('userToken', userToken)
        localStorage.setItem('userData', JSON.stringify(userData))
        localStorage.setItem('userId', userId)
      })
      this.router.navigate(['Homepage'])
      this.myForm.reset()


      Swal.fire(
        'Success',
        'Completed',
        'success'
      )
    }else{
      Swal.fire(
        'Failed',
        'Not Completed',
        'error'
      )
    }
  }

}
