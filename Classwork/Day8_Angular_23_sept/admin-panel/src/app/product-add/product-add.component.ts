
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title = ''
  description = ''
  price = 0

  product = {}

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    if (id) {
      // edit product
      this.productService
        .getProductDetails(id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            const products = response['data']
            if (products.length > 0) {
              this.product = products[0]
              this.title = this.product['title']
              this.description = this.product['description']
              this.price = this.product['price']
            }
          }
        })
    }
  }

  onUpdate() {
    this.productService
      .updateProduct(this.product['id'], this.title, this.description, this.price)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/product-list'])
        }
      })
  }

}
