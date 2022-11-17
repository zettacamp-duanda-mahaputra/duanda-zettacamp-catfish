import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuManagementService } from '../menu-management.service';
import Swal from 'sweetalert2';
import { MenuManagementComponent } from '../menu-management.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  formIngredients = new FormGroup({
    ingredient_id: new FormControl(null),
    stock_used: new FormControl(null)
  })

  myForm:any = new FormGroup({
    recipe_name: new FormControl(null),
    price: new FormControl(null),
    image: new FormControl(null),
    ingredients: new FormArray([])
  });

  get ingredientsForms (){
    return this.myForm.get('ingredients') as FormArray
  }
  constructor(public dialogRef: MatDialogRef<MenuManagementComponent>,@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.myForm.patchValue(this.data)
    }
  }

  onClose() {
    const value: any = {};
    const isValid = this.myForm.valid;

    if (!isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Data not Completed',
      });
    } else {
      value.name = this.myForm.get('name')?.value;
      value.stock = this.myForm.get('stock')?.value;
  
      if (this.data) {
        value._id = this.data._id;
      }
  
      this.dialogRef.close(value);
     
    }

  
  }

}
