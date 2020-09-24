import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
     products = []
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts()
  {
    this.productService
    .loadProducts()
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.products = response['data']
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })

  }
  toggleActive(product)
  {
    this.productService
    .toggleSuspend(product)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        this.loadProducts()
      }
      else
      {
        console.log(`error = ${response['error']}`)
      }
    })
  }
}
