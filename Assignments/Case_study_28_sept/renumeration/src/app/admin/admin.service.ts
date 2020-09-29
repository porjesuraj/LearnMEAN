import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 url = 'http://localhost:3000/admin'
  constructor(private httpClient : HttpClient) { }

  getAllFaculty()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }

    return this.httpClient.get(this.url + '/AllFaculty',options)
  }

  onDeleteFaculty(Id)
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }

    return this.httpClient.delete(this.url + '/faculty/' + Id,options)
  }
}
