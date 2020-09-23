import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : 'http://localhost:3000/user'
  constructor(private httpClient : HttpClient) { }

  getUsers() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url, httpOptions)
  }
}
