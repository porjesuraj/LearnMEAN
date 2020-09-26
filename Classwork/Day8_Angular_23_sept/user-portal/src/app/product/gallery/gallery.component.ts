import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  products = []

  constructor(
    private toastr: ToastrService,
    private cartService: CartService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService
      .getProducts()
      .subscribe(response => {
        console.log(response)
        if (response['status'] == 'success') {
          this.products = response['data']
        }
      })
  }

  addToCart(product) {
    this.cartService
      .addCartItem(product['id'], product['price'], 1)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.toastr.success('added your product to cart')
        }
      })
  }
}

            