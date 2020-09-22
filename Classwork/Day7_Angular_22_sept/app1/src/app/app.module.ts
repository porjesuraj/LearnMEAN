
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { CategoryService } from './category.service';
import { BrandService } from './brand.service';
import {RouterModule,Routes} from '@angular/router'

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-add', component: ProductAddComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService,
    BrandService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
