import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:3000/student'
 
  constructor(private httpClient : HttpClient) { }

  getAllClasses()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }

    return this.httpClient.get(this.url + '/classroomDetails',options)
  }

  getAllFaculty()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }

    return this.httpClient.get(this.url + '/facultyDetail',options)
  }
}