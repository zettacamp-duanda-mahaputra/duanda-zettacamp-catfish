import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myAddresses = new FormGroup({
    address: new FormControl(null),
    zipcode: new FormControl(null),
    city: new FormControl(null),
    country: new FormControl(null),
  });
  myForm:any = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    position: new FormControl(null),
    martialstatus: new FormControl(null),
    addresses: this.myAddresses
  });
  constructor(private dataService:DataService) {}

  ngOnInit(): void {}

  onSubmit(){
    this.dataService.addUserToList(this.myForm.value)
  }
}
