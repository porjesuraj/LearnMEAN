import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { ServicePaymentComponent } from './service-payment/service-payment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductList1Component } from './product-list1/product-list1.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicePaymentComponent,
    ProductListComponent,
    ProductList1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
