import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 

import { LoginComponent } from './../users/login/login.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  }
]

export const routing = RouterModule.forRoot(routes)
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
