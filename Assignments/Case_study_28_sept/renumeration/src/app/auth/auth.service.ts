import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url1 = 'http://localhost:3000/admin'

  url2 = 'http://localhost:3000/faculty'
  
  url3 = 'http://localhost:3000/student'

  constructor(private httpClient :HttpClient) { }

  adminLogin(email:string,password:string)
  {
    const body = {
      Email : email,
      Password : password
    }
       return this.httpClient.post(this.url1 + '/signin',body)
  }

  facultyLogin(email:string,password:string)
  {
    const body = {
      Email : email,
      Password : password
    }
       return this.httpClient.post(this.url2 + '/signin',body)
  }

  studentLogin(email:string,password:string)
  {
    const body = {
      Email : email,
      Password : password
    }
       return this.httpClient.post(this.url3 + '/signin',body)
  }

   adminSignup(FirstName:string,LastName:string,Address:string,Contact:number,Email,Password)
   {

        const body = {
          FirstName:FirstName,
          LastName:LastName,
          Address:Address,
          Contact:Contact,
          Email : Email,
          Password : Password
          
        } 

        return this.httpClient.post(this.url1 + '/signup',body)

   }

   facultySignup(FirstName:string,LastName:string,Address:string,Contact:number,Email,Password,Experience:number,Age:number)
   {

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

        return this.httpClient.post(this.url2 + '/signup',body)

   }

   studentSignup(FirstName:string,LastName:string,Address:string,Contact:number,Email,Password,ClassroomId:number)
   {

        const body = {
          FirstName:FirstName,
          LastName:LastName,
          Address:Address,
          Contact:Contact,
          Email : Email,
          Password : Password,
          ClassroomId : ClassroomId
        } 

        return this.httpClient.post(this.url3 + '/signup',body)

   }

}
