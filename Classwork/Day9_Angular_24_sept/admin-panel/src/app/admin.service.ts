import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
      url = 'http://localhost:3000/admin'
  constructor(private httpClient : HttpClient) { }

  adminLogin(email:string,password:string)
  {
    const body = {
      email : email,
      password : password
    }
    return this.httpClient.post(this.url + "/signin",body)

  }
}
