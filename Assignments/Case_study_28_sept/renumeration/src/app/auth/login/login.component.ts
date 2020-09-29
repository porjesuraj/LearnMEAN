import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  userType:number = 0
  constructor(private authService : AuthService,
             private router : Router
              ) { }

  ngOnInit(): void {
  }
  onLogin()
  {
    if(this.userType == 1)
    {
      this.authService
    .adminLogin(this.email,this.password)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        const data = response['data']
        alert(`welcome user ${data['firstName']} ${data['lastName']} : ${this.userType}`)

        sessionStorage['token'] = data['token']
        sessionStorage['firstName'] = data['firstName']
        sessionStorage['lastName'] = data['lastName']
        this.router.navigate(['/admin-home'])
      } 
      else
      {
        alert(`error : ${response['error']}`)
      }
    })
            console.log(this.userType)
    }
    else if(this.userType == 2)
    {
      this.authService
    .facultyLogin(this.email,this.password)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        const data = response['data']
        alert(`welcome user ${data['firstName']} ${data['lastName']} : ${this.userType}`)

        sessionStorage['token'] = data['token']
        sessionStorage['firstName'] = data['firstName']
        sessionStorage['lastName'] = data['lastName']
        this.router.navigate(['/faculty-home'])
      } 
      else
      {
        alert(`error : ${response['error']}`)
      }
    })
            console.log(this.userType)
    } else if(this.userType == 3)
    {
      this.authService
    .studentLogin(this.email,this.password)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        const data = response['data']
        alert(`welcome user ${data['firstName']} ${data['lastName']} : ${this.userType}`)

        sessionStorage['token'] = data['token']
        sessionStorage['firstName'] = data['firstName']
        sessionStorage['lastName'] = data['lastName']
        this.router.navigate(['/home'])
      } 
      else
      {
        alert(`error : ${response['error']}`)
      }
    })
            console.log(this.userType)
    }
    else
    {
      
    }


  }



}
