import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from "./addstudent/addstudent.component";
import {ListstudentComponent } from "./liststudent/liststudent.component";
import { UpdatestudentComponent } from "./updatestudent/updatestudent.component";
  import { from } from 'rxjs';
const routes: Routes = [

  {
    path:'addstudent',
    component: AddstudentComponent
  },
  {
    path:'liststudent',
    component:ListstudentComponent,
  },
  {
    path:'updatestudent/:rollNo',
    component:UpdatestudentComponent,
  },
  {
    path:'',
    redirectTo:'/liststudent',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
