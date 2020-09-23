import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []

  constructor(
    private router: Router,
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
      .toggleActivateStatus(product)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadProducts()
        } else {
          console.log(response['error'])
        }
      })
  }

  onEdit(product) {
    this.router.navigate(['/product-add'], {queryParams: {id: product['id']}})
  }
}
