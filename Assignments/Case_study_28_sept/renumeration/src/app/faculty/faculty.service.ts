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

  updateFacultyProfile(FirstName:string,LastName:string,Address:string,Contact:number,Email,Password,Experience:number,Age:number)
   {
    const options = {
      headers : new HttpHeaders({
        token : sessionStorage['token']
      })
    }

        const body = {
          FirstName:FirstName,
          LastName:LastName,
          Address:Address,
          Contact:Contact,
          Email : Email,
          Password : Password,
          Experience: Experience,
          Age:Age
          
        } 

        return this.httpClient.put(this.url + '/',body,options)

   }
}
