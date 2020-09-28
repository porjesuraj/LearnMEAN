import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  url = 'http://localhost:3000/faculty'
  constructor(private httpClient : HttpClient) { }

  loadStudentCount()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    return this.httpClient.get(this.url + '/studentCount',options)
  }

  loadClassroomDetails()
  {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }
    return this.httpClient.get(this.url + '/classroomDetails',options)
  }
}
