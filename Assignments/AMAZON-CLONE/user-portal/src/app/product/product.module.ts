import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from './product.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [GalleryComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers : [ProductService]
})
export class ProductModule { }
