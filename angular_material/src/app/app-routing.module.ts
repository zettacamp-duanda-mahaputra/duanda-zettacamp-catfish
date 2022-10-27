import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { ListComponent } from './main/list/list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"card", component:ListComponent},
  {path:"form", component:FormComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
