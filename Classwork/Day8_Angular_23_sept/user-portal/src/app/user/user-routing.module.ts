import { AddressAddComponent } from './address-add/address-add.component';
import { AddressListComponent } from './address-list/address-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './../../../../admin-panel/src/app/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: 'signup',component : SignupComponent},
  {path: 'profile',component : ProfileComponent},
  {path: 'address-list',component : AddressListComponent},
  {path: 'address-add',component : AddressAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
