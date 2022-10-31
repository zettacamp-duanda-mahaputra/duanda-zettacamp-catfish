import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, RequiredValidator, FormGroupDirective } from '@angular/forms';
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
  myForm:any = new FormGroup({
    id: new FormControl(null,Validators.required),
    name: new FormControl(null,[Validators.required]),
    age: new FormControl(null,[Validators.required,Validators.min(10)]),
    gender: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    position: new FormControl(null,[Validators.required]),
    martialstatus: new FormControl(null,[Validators.required]),
    addresses: new FormArray([])
  });

  getErrorMessage() {
    if (this.myForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.myForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  

  isEdit: boolean = false;

  selectedLang:any = null;

  get addressForms (){
    return this.myForm.get('addresses') as FormArray
  }


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location:Location,
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
          const item:any = items.find((items) => items.id === id);
          console.log(item);
          

          for(let i = 0; i < item.addresses.length;i++){
            this.pushForm()
          }
          this.myForm.patchValue(item);
        });

    

    } 
    else{
      this.pushForm()
    }

    // this.myForm.get("name").valueChanges.subscribe( => {
    //   let specialChar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    // }

  }

  pushForm(){
    this.addressForms.push(new FormGroup({
      address: new FormControl(null),
      zipcode: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null)
    }))
  }

  setFormValues(user: any) {
    this.myForm.setValue(user);
  }

  onSubmit() {
    if(this.isEdit){
      this.dataService.updateUser(this.myForm.value)
      Swal.fire(
        'Success!',
        'Data Updated!',
        'success'
      )
    }else{
      this.dataService.addUserToList(this.myForm.value);
      Swal.fire(
        'Success!',
        'Data Added!',
        'success'
      )
    }
    this.location.back()
  }

  setLanguage(lang: string) {
    this.selectedLang = lang
    this.translateService.use(lang);
  }

  removeForm(index:number){
    this.addressForms.removeAt(index)
  }

}
