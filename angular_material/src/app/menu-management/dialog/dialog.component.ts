import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MenuManagementComponent } from '../menu-management.component';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  myForm = new FormGroup({
    recipe_name: new FormControl(null),
    price: new FormControl(null),
    image: new FormControl(null),
    ingredients: new FormArray([]),
  });

  stockIngredient: any;

  get ingredientsForms() {
    return this.myForm.get('ingredients') as FormArray;
  }
  constructor(
    public dialogRef: MatDialogRef<MenuManagementComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private stockManagementService: StockManagementService
  ) {}

  ngOnInit(): void {
    this.addIngredients();

    this.stockManagementService.getAllIngredients().subscribe((result) => {
      
      this.stockIngredient = result;

      if (this.data) {
        const data: any = Object.assign({}, this.data);

        data.ingredients = data.ingredients.map((item: any) => {
          const meti = Object.assign({}, item);
          meti.ingredient_id = meti.ingredient_id._id;
          return meti;
        });

        for (let i = 0; i < data.ingredients.length; i++) {
          this.addIngredients();
        }

        this.myForm.patchValue(this.data);
      } else {
        this.addIngredients();
      }
    });
  }

  addIngredients() {
    const group = new FormGroup({
      ingredient_id: new FormControl(null),
      stock_used: new FormControl(null),
    });
    this.ingredientsForms.push(group);
  }

  removeForm(index: number) {
    this.ingredientsForms.removeAt(index);
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
      value.recipe_name = this.myForm.get('recipe_name')?.value;
      value.price = this.myForm.get('price')?.value;
      value.image = this.myForm.get('image')?.value;
      value.ingredients = this.myForm.get('ingredients')?.value;

      if (this.data) {
        value._id = this.data._id;
      }

      this.dialogRef.close(value);
    }
  }
}
