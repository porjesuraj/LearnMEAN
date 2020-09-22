import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productService : ProductService 

  products = [
   
  ]



  constructor(productService : ProductService) { this.productService = productService}


  onDelete(product) {
    this.productService
      .deleteProduct(product['id'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadProducts()
        } else {
          console.log(response['error'])
        }
      })
  }



  ngOnInit(): void {
  }

  loadProducts() {
    const request = this.productService.getProducts()
    request.subscribe(response => {
      if (response['status'] == 'success') {
        this.products = response['data']
      }
    })
  }

}
