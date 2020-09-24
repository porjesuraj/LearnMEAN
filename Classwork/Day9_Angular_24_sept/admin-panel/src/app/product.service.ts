import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/product'
  constructor(private httpClient : HttpClient) { }
  loadProducts()
  {
    const httpOptions = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }

    return this.httpClient.get(this.url,httpOptions)
  }
  toggleSuspend(product)
  {
    const httpOptions = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    const body = {}

    return this.httpClient.put(this.url + `/update-state/${product['id']}/${product['isActive'] == 0 ? 1 : 0}`, body, httpOptions)

  }
}
