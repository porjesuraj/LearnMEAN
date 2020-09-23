import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private adminService: AdminService) {}

  ngOnInit(): void {
  }

  onLogin() {
    this.adminService
      .login(this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('welcome')
          const data = response['data']
          // cache data
          sessionStorage['token'] = data['token']
          sessionStorage['firstName'] = data['firstName']
          sessionStorage['lastName'] = data['lastName']
          localStorage['token'] = data['token']
          //
        } else {
          alert('invalid email or password')
        }
      })
  }

}
