import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = 'http://localhost:3000/product'
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

  toggleAcitve(product)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token'],
      })
    }
    const body = { }
    
    return this.httpClient.put(this.url + `/update-state/${product['id']}/${product['isActive'] == 0 ? 1 : 0}` ,body,options)

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
  updateProducts(id,title:string,description:string,price:number,brand:number,category:number)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token'],
      })
    }
      
    const body = {
      title : title,
      description : description,
      price : price,
      brand :brand,
      category : category
    }
    return this.httpClient.put(this.url + "/" + id,body,options)
  }


  insertProducts(title:string,description:string,price:number,brand:number,category:number)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token'],
      })
    }
      
    const body = {
      title : title,
      description : description,
      price : price,
      brand : brand,
      category : category
    }
    return this.httpClient.post(this.url + "/create",body,options)
  }


  deleteProduct(id)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token'],
      })
    }
      
    const body = {}
    return this.httpClient.delete(this.url + "/" + id,options)
  }

  uploadImage(File_id,file) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = new FormData()
    body.append('image', file)

    return this.httpClient.post(this.url + `/upload-image/${File_id}`, body, httpOptions)
  }
}
