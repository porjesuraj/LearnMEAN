import { Router } from '@angular/router';
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

  constructor(private adminService : AdminService,
              private router : Router) { }

  ngOnInit(): void {
  }

   adLogin()
   {
       this.adminService
       .adminLogin(this.email,this.password)
       .subscribe(response => {
         if(response['status'] == 'success')
         {
           let data = response['data']
           alert(`welcome ${data['firstName']} ${data['lastName']}`)
           //localStorage
           
          //sessionStorage
           sessionStorage['firstName'] = data['firstName']
           sessionStorage['lastName'] = data['lastName']
           sessionStorage['token'] = data['token']
           this.router.navigate(['/dashboard'])
         }
         else
         {
           console.log(response['error'])
           alert('invalid user')
         }
       })

      
   }
}
