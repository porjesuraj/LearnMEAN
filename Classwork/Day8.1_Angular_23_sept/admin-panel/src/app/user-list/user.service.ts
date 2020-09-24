import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user'

  constructor(
    private httpClient: HttpClient) { }

  getUsers() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url, httpOptions)
  }

  toggleActiveStatus(user) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    // suspend user if already active or activate otherwise
    const body = {
      status: user['active'] == 1 ? 0 : 1
    }

    return this.httpClient.put(this.url + "/toggle-active/" + user['id'], body, httpOptions)
  }
}
