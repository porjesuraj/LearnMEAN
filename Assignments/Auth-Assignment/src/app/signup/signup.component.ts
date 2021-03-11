import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

      firstName   = ''   
      middleName = ''
      lastName   = ''
      birthDate  = new Date()
      contact   = 1
      email   = ''
      address   = ''
      password   = ''

      loginService : LoginService
  constructor(loginService : LoginService ) { this.loginService = loginService }


  ngOnInit(): void {
  }

  signUp()
  {
     this.loginService.
     customerSignUp(this.firstName,this.middleName,this.lastName,
     this.birthDate,this.contact,this.email,this.password,this.address )
     .subscribe(response => {

      if(response['status'] == 'success')
      {
        alert(`customer ${this.firstName} ${this.lastName} registered successfully`)
      }
      else{
        console.log(`error : ${response['error']}`)
        alert(`please fill form with all required fields`)
      }
     })


  }
   
  cancel()
  {
    this.firstName = '',
    this.middleName = '',
    this.lastName = '',
    this.birthDate = new Date(),
    this.contact = 0,
    this.email = '',
    this.password = '',
    this.address = ''
  }
}
