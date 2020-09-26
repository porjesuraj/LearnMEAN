import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient : HttpClient) { }
  url = 'http://localhost:3000/brand'
  getBrands()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    return this.httpClient.get(this.url,options)


  }
}
