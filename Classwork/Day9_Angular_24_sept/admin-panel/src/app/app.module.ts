import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { UserService } from './user-list/user.service';
import { AdminService } from './admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
