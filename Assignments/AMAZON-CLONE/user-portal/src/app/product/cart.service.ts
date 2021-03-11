import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    url = 'http://localhost:4000/cart'
    
  constructor(private httpClient : HttpClient) { }
  getCartItem()
  { 
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
   
    return this.httpClient.get(this.url + '/user',options)
  }

  addCartItem(productId,price,quantity)
  { 
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    const body = {
      productId : productId,
      price : price,
      quantity : quantity

    }
   
   return this.httpClient.post(this.url + '/user',body,options)
  } 

  deleteItem(id)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    const body = { }
   
   return this.httpClient.delete(this.url + "/" + id,options)
  }

 updateCartItem(id,quantity,price)
  { 
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    const body = {
      id : id,
      quantity : quantity,
      price : price
     
    }
   
   return this.httpClient.put(this.url + '/' + id,body,options)
  } 



}
