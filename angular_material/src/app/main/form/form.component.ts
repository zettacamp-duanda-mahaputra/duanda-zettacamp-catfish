import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Location } from '@angular/common'; 
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  
  myForm:any = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    position: new FormControl(null),
    martialstatus: new FormControl(null),
    addresses: new FormArray([])
  });

  isEdit: boolean = false;

  selectedLang = 'en';

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
    }else{
      this.dataService.addUserToList(this.myForm.value);
    }
    this.location.back()
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }

  removeForm(index:number){
    this.addressForms.removeAt(index)
  }

}
