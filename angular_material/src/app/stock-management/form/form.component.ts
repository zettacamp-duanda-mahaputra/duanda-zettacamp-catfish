import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { Ingredients } from '../stock-management.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl(null,Validators.required),
    stock: new FormControl(null,Validators.required)
  })

  constructor(public dialogRef: MatDialogRef<FormComponent>, @Inject (MAT_DIALOG_DATA) private ingredients:Ingredients ) { }

  ngOnInit(): void {
   
  }

  onAdd(){
    const isValid = this.myForm.valid;

    if (!isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Data not Completed',
      });
    } else {
      this.dialogRef.close(this.myForm.value);
    }
  }

  onClose(){
    this.dialogRef.close();
  }
  }




