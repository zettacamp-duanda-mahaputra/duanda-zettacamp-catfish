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
        console.log(data);
        let userData = data.data.loginUser.userType.permission
        let userToken = data.data.loginUser.token
        for(let user of userData){
          user.routing = `${user.page}`
          console.log(user.page);
          
        }
        localStorage.setItem('userToken', userToken)
        localStorage.setItem('userData', JSON.stringify(userData))
        
      })
      this.router.navigate(['Menu'])
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
