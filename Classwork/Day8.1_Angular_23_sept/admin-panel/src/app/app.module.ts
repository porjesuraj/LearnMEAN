import { AdminService } from './admin.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserListComponent,
    SignupComponent,
    ProductAddComponent,
    ProductListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AdminService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
