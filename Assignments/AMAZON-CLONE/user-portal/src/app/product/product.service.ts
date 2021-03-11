import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:4000/product'
  constructor(private httpClient : HttpClient) { }

  getProducts()
  {
    const httpOptions = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    
    return this.httpClient.get(this.url,httpOptions)
  }

  

  productDetails(id)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token'],
      })
    }

    return this.httpClient.get(this.url + "/details/" + id ,options)
  } 

  
 

 


  

 
}
