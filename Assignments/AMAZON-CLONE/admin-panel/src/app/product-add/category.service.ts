import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }
  
  url = 'http://localhost:3000/category'
  getCategory()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    return this.httpClient.get(this.url,options)


  }
}
