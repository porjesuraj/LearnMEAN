import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
 
  //class attribute
 
  loginService : LoginService
   constructor(loginService:LoginService) 
   { this.loginService = loginService}
 
   ngOnInit(): void {
   }
 
   
   OnCancel()
   {
     this.email = ''
     this.password = ''
     console.log(`email : ${this.email}`)
     console.log(`password : ${this.password}`)
 
   }
 
   OnSave()
   {
     console.log(`email : ${this.email}`)
     console.log(`password : ${this.password}`)
 
    this.loginService
    .customerSignIn(this.email,this.password)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        const data = response['data']
         const firstName = data['firstName']
         const lastName = data['lastName']
         alert(`welcome ${firstName} ${lastName}`)
         
      }
      else
      {
        console.log(response['error'])
        alert('user not found')
      }
    })


    /*  const body = {
 
       email : this.email,
       password : this.password
     }
 
     const url = 'http://localhost:3000/customer/signin'
 
     const request = this.httpClient.post(url,body)
 
     request.subscribe(response => {
 
       console.log(response)
       if(response['status'] == 'success')
       {
         const data = response['data']
         const firstName = data['firstName']
         const lastName = data['lastName']
         alert(`welcome ${firstName} ${lastName}`)
       } else {
 
         alert('invalid email or password')
       }
     }) */
 
 
 
 
 
   }
 
 }
 