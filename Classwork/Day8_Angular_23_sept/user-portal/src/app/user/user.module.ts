import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressAddComponent } from './address-add/address-add.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ProfileComponent, AddressListComponent, AddressAddComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
