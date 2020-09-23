import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
 
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
  }
 
  onLogin() {
    this.adminService
      .login(this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          const data = response['data']
          console.log(data)

          // cache the user info
          sessionStorage['token'] = data['token']
          sessionStorage['firstName'] = data['firstName']
          sessionStorage['lastName'] = data['lastName']
          alert(`user  ${data['firstName']} ${data['lastName']} logged in `)
        } else {
          alert('invalid email or password')
        }
      })
  }


  onCancel()
  {
    this.email = ''
    this.password = ''
  }
}
