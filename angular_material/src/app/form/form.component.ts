import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    password: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    img: new FormControl(null),
  });

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.userForm.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.userForm.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  onSubmit(data: any) {
    if (this.userForm.valid) {
      this.userService.addUser(data);
      this.userForm.reset();
      this.router.navigate(['card'])
      Swal.fire('Completed', 'Data Valid', 'success');
    }else{
      Swal.fire('Not Completed', 'Data Not Valid', 'error');
    }
  }
}
