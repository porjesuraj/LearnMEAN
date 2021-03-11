import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

url = 'http://localhost:3000/customer'
httpClient : HttpClient

  constructor(httpClient : HttpClient) 
  { this.httpClient = httpClient }
 
  customerSignIn(email : string, password:string)
  {
    const body = {
      email: email,
      password : password
    }
    return this.httpClient.post(this.url + "/"+ "signin",body)
  }
  
  customerSignUp(firstName:string,middleName:string,lastName:string,birthDate:Date,contact:number,email:string,address:string,password:string)
  {
    const body = {
      firstName  :firstName,
      middleName :middleName,
      lastName   :lastName,
      birthDate  :birthDate,
      contact    :contact,
      email      :email,
      address    :address,
      password   : password
    }
    return this.httpClient.post(this.url + "/" + "signup",body)
  }


}
