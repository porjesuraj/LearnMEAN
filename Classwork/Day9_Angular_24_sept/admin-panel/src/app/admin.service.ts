import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
      url = 'http://localhost:3000/admin'
  constructor(private httpClient : HttpClient,
              private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   
   if(sessionStorage['token'])
   { return true

   }
   else
   { 
     this.router.navigate(['/login'])
     return false
   }
   



  }

  adminLogin(email:string,password:string)
  {
    const body = {
      email : email,
      password : password
    }
    return this.httpClient.post(this.url + "/signin",body)

  }
}
