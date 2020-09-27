import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email = ''
  password = ''

  constructor( private authService : AuthService,
               private  router : Router,
               private toastr : ToastrService ) { }

  ngOnInit(): void {
  }
  Login()
 {
    if(this.email.length == 0)
    {
     this.toastr.error(`please enter email`)
    }else if(this.password.length == 0)
    {  this.toastr.info(`please enter password`)
    
    }
    else
    {

    
    this.authService
    .login(this.email,this.password)
    .subscribe(response => {
      if(response['status'] == 'success')
      {
        const user = response['data']

        sessionStorage['token'] = user['token']
        sessionStorage['firstname'] = user['firstName']
        sessionStorage['lastName'] = user['lastName']
       this.toastr.success(`welcome ${user['firstName']} ${user['lastName']}`)
        this.router.navigate(['/home'])

      }
      else
      {
        console.log(response['error'])
       this.toastr.warning(response['error'])
      }
    })
   }

 }
}
