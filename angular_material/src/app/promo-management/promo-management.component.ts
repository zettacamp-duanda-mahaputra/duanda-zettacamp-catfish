import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PromoManagementService } from './promo-management.service';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promo-management',
  templateUrl: './promo-management.component.html',
  styleUrls: ['./promo-management.component.css'],
})
export class PromoManagementComponent implements OnInit {
  isLoading:boolean = false
  myForm = new FormGroup({
    ref: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    sub_title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private promoManagementService: PromoManagementService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true
    if (this.myForm.valid) {
      Swal.fire('Good job!', 'You clicked the button!', 'success');
      let valueForm = this.myForm.value;
      this.promoManagementService.createPromo(valueForm).subscribe(()=>{
        this.isLoading = false
      });
      this.myForm.reset();
      console.log(valueForm);
    }else{
      Swal.fire('Data not Completed',  'error')
    }
   
  }
}
