import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
