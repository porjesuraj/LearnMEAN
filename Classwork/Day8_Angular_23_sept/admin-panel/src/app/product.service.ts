import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/product'

  constructor(
    private httpClient: HttpClient) { }
  
  getProducts() {
     // add the token in the request header
     const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url, httpOptions)
  }

  updateProduct(id, title: string, description: string, price: number, category: number, brand: number) {
     // add the token in the request header
     const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {
      title: title,
      description: description,
      price: price,
      category: category,
      brand: brand
    }
    
    return this.httpClient.put(this.url + "/" + id, body, httpOptions)
  }

  insertProduct(title: string, description: string, price: number, category: number, brand: number) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };

   const body = {
     title: title,
     description: description,
     price: price,
     category: category,
     brand: brand
   }
   
   return this.httpClient.post(this.url + "/create", body, httpOptions)
 }

  getProductDetails(id) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get(this.url + "/details/" + id, httpOptions)
  }

  toggleActivateStatus(product) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    const body = {}
    return this.httpClient.put(this.url + `/update-state/${product['id']}/${product['isActive'] == 0 ? 1 : 0}`, body, httpOptions)
  }

  uploadImage(id, file) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = new FormData()
    body.append('image', file)

    return this.httpClient.post(this.url + `/upload-image/${id}`, body, httpOptions)
  }
}

            