import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []

  constructor(
    private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService
      .getProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          console.log(response['error'])
        }
      })
  }

  toggleActiveStatus(product) {
    this.productService
    .toggleActiveStatus(product)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadProducts()
        } else {
          console.log(response['error'])
        }
      })
  }

}
         
