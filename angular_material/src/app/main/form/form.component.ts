import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: any = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, [Validators.required, Validators.min(10)]),
    gender: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    position: new FormControl(null),
    martialstatus: new FormControl(null),
    addresses: new FormArray([]),
  });

  getErrorMessage() {
    if (this.myForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.myForm.get('email').hasError('email')
      ? 'Not a valid email'
      : '';
  }

  isEdit: boolean = false;

  selectedLang: any = null;

  get addressForms() {
    return this.myForm.get('addresses') as FormArray;
  }

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    public translateService: TranslateService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('userId');
    this.isEdit = id != null;
    console.log(id);

    if (this.isEdit) {
      this.dataService.list
        .pipe(first((items) => items.length !== 0))
        .subscribe((items) => {
          const item: any = items.find((items) => items.id === id);
          console.log(item);

          for (let i = 0; i < item.addresses.length; i++) {
            this.pushForm();
          }
          this.myForm.patchValue(item);
        });
    } else {
      this.pushForm();
    }

    this.myForm.get('name').valueChanges.subscribe((value: any) => {
      console.log(value);
      const chars = /[^a-z|\s]/i;

     
      let temp = value.replace(chars, '');
      this.myForm.get('name').patchValue(temp, { emitEvent: false });
    });
  }

  pushForm() {
    this.addressForms.push(
      new FormGroup({
        address: new FormControl(null),
        zipcode: new FormControl(null, [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
        city: new FormControl(null),
        country: new FormControl(null),
      })
    );
  }

  setFormValues(user: any) {
    this.myForm.setValue(user);
  }

  onSubmit() {
    console.log(this.myForm)
    if (this.isEdit) {
      if (this.myForm.valid) {
        this.dataService.updateUser(this.myForm.value);
        Swal.fire({
          title: 'Success!',
          text: 'Data Updated!',
          icon: 'success',
          didClose: () => this.goBack()
        });
      } else {
        Swal.fire('Warning!', 'Data not Completed!', 'warning');
      }
    } else {
      if (this.myForm.valid) {
        this.dataService.addUserToList(this.myForm.value);
        Swal.fire({
          title: 'Success!',
          text: 'Data Updated!',
          icon: 'success',
          didClose: () => this.goBack()
        });
      } else {
        Swal.fire('Warning!', 'Data not Completed!', 'warning');
      }
    }
  }

  setLanguage(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang);
  }

  removeForm(index: number) {
    this.addressForms.removeAt(index);
  }

  goBack(){
    this.location.back();
  }
}
