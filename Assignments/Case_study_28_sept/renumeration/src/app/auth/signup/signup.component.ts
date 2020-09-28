import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  FirstName = ''
  LastName = ''
  Address = ''
  Contact = 1
  Email = ''
  Password = ''
  ClassroomId = 1
  Experience = 1
  Age = 1
  userType = 4
  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSave()
  {
    if(this.userType == 1)
  {
    this.authService
    .adminSignup(this.FirstName,this.LastName,this.Address,this.Contact,this.Email,this.Password)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        alert('sucessfully Sign up')
        this.router.navigate(['/auth/login'])
      }
      else
      {
        console.log(`error : ${response['error']}`)
      }
    })
  } else if(this.userType == 2){
    this.authService
    .facultySignup (this.FirstName,this.LastName,this.Address,this.Contact,this.Email,this.Password,this.Experience,this.Age)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        alert('sucessfully Sign up')
        this.router.navigate(['/auth/login'])
      }
      else
      {
        console.log(`error : ${response['error']}`)
      }
    })
  }
  else if(this.userType == 3)
  {
    this.authService
    .studentSignup(this.FirstName,this.LastName,this.Address,this.Contact,this.Email,this.Password,this.ClassroomId)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        alert('sucessfully Sign up')
        this.router.navigate(['/auth/login'])
      }
      else
      {
        console.log(`error : ${response['error']}`)
      }
    })
  }
  else
  {

  }



  }

}
