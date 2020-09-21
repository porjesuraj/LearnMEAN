import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { ServicePaymentComponent } from './service-payment/service-payment.component';
import { ProductListComponent } from './product-list/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicePaymentComponent,
    ProductListComponent
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
