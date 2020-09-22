import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-amazon-product',
  templateUrl: './amazon-product.component.html',
  styleUrls: ['./amazon-product.component.css']
})
export class AmazonProductComponent implements OnInit {
 
  products = []
  httpClient : HttpClient
  constructor(httpClient : HttpClient) {this.httpClient = httpClient }

  ngOnInit(): void {
  }

  loadProducts()
  {
    const url = 'http://localhost:4000/products'
    const request = this.httpClient.get(url)

    request.subscribe(response => {
      console.log(`response`)
      console.log(response)
      if(response['status'] == 'success')
      {
        this.products = response['data']
      }
    })
  }

}
