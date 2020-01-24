import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EducationformComponent } from './educationform/educationform.component';


const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'educationform',component:EducationformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
